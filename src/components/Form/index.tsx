import { useSelector } from 'react-redux';
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
import { Heading, FormContainer, FormElement, ActionButtons, ButtonNext, ButtonPrevious } from '../styles/styles';
/**styles */

const MySwal = withReactContent(Swal);

const Form = ({ shelters, formData, currentPage, dispatch, t }: IFormProps) => {
  const isValid = useSelector((state: any) => state.state.formData.isValid);

  const nextPage = (e: any) => {
    e.preventDefault();
    dispatch(goToNextPage());
  };
  const previousPage = (e: any) => {
    e.preventDefault();
    dispatch(goToPreviousPage());
  };

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
            title: <strong>{t('success_response_header')}</strong>,
            html: <span>{t(`${JSON.stringify(response.messages[0].message)}`)}</span>,
            icon: 'success',
            buttonsStyling: true,
            confirmButtonColor: ' #c4794f',
          }).then(() => {
            window.location.href = '/';
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
        return <Donate shelters={shelters} t={t} />;
    }
  };
  const renderStep = () => {
    switch (formData.currentPage) {
      case 1:
        return <Donate dispatch={dispatch} shelters={shelters} t={t} />;
      case 2:
        return <PersonalInfo t={t} dispatch={dispatch} />;

      case 3:
        return <CheckInfo t={t} dispatch={dispatch} />;

      default:
        return <Donate shelters={shelters} t={t} />;
    }
  };

  return (
    <FormContainer>
      <FormElement>
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
      </FormElement>
    </FormContainer>
  );
};

export default Form;
