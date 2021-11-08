import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { goToNextPage, goToPreviousPage } from '../../redux/actions/actiionCreators/shelterActionCreator';
import CheckInfo from './CheckInfo';
import Donate from './Donate';
import PersonalInfo from './PersonalInfo';
import PagePaginator from '../PagePaginator';
import { IFormProps } from '../../interfaces';
/**styles */
import styled from 'styled-components';
const Heading = styled.h3`
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 46px;
  line-height: 52px;
  letter-spacing: 0.01em;
  color: #000000;
  font-weight: 700;
  padding-block: 28px;
`;
const FormContainer = styled.div`
  padding-right: 164px;
  padding-left: 55px;
  @media only screen and (max-width: 1140px) {
    padding-right: 55px;
  }
  @media only screen and (max-width: 640px) {
    padding-inline: 20px;
  }
`;
const ButtonNext = styled.button`
  display: flex;
  padding: 20px 24px;
  height: 59px;
  background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 100px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  &:disabled {
    background: #9f9f9f;
  }
`;
const ButtonPrevious = styled.button`
  display: flex;
  padding: 20px 24px;
  height: 59px;
  background: #f3e2d9;
  border-radius: 100px;
  font-family: 'Public Sans', sans-serif;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #2f2f2f;
  border: none;
`;
const ActionButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row-reverse;
  border: none;
  padding-top: 72px;
`;
const MySwal = withReactContent(Swal);

const Form = ({ shelters, formData, currentPage }: IFormProps) => {
  const dispatch = useDispatch();
  const isValid = useSelector((state: any) => state.state.formData.isValid);

  const nextPage = (e: any) => {
    console.log(typeof e);
    e.preventDefault();
    dispatch(goToNextPage());
  };
  const previousPage = (e: any) => {
    e.preventDefault();
    dispatch(goToPreviousPage());
  };
  const { t } = useTranslation();

  const postData = (e: any) => {
    e.preventDefault();
    axios
      .post('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        value: formData.value,
        shelterID: formData.shelterID,
      })
      .then((response) => response.data)
      .then((response) => {
        if (response.messages[0].type === 'SUCCESS') {
          MySwal.fire({
            title: <strong>Výborne</strong>,
            html: <span>{JSON.stringify(response.messages[0].message)}</span>,
            icon: 'success',
          });
        }
      })
      .catch((error) => {
        MySwal.fire({
          title: <strong>Chyba</strong>,
          html: <span>{error.message}</span>,
          icon: 'error',
        });
      });
  };
  const renderHeading = () => {
    switch (formData.currentPage) {
      case 1:
        return <Heading>{t('Donate_section_heading')}</Heading>;
      case 2:
        return <Heading>{t('Personal_info_section_heading')}</Heading>;

      case 3:
        return <Heading>{t('Check_info_section_heading')}</Heading>;

      default:
        return <Donate shelters={shelters} />;
    }
  };
  const renderStep = () => {
    switch (formData.currentPage) {
      case 1:
        return <Donate shelters={shelters} />;
      case 2:
        return <PersonalInfo />;

      case 3:
        return <CheckInfo />;

      default:
        return <Donate shelters={shelters} />;
    }
  };

  return (
    <FormContainer>
      <form>
        <span>
          <PagePaginator currentPage={currentPage} />
        </span>
        {renderHeading()}
        {renderStep()}
        <ActionButtons>
          {formData.currentPage < 3 ? (
            <ButtonNext name="next" onClick={nextPage} disabled={!isValid}>
              {t('Button_next')}
            </ButtonNext>
          ) : (
            ''
          )}{' '}
          {formData.currentPage === 3 ? (
            <ButtonNext name="submit" onClick={postData} disabled={!isValid}>
              {t('Button_send')}
            </ButtonNext>
          ) : (
            ''
          )}
          {formData.currentPage > 1 ? (
            <ButtonPrevious name="back" onClick={previousPage}>
              {t('Button_back')}
            </ButtonPrevious>
          ) : (
            ''
          )}
        </ActionButtons>
      </form>
    </FormContainer>
  );
};

export default Form;
