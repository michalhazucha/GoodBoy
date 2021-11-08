import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { IBtn } from '../../../interfaces';
import { setFormState, setHelpMethod, setShelterIdAction, setValueAction } from '../../../redux/actions/actiionCreators/shelterActionCreator';
//images
import paw from '../../../assets/icons/paw.png';
import wallet from '../../../assets/icons/wallet-icon.png';
import { useTranslation } from 'react-i18next';
/**styles */
import styled from 'styled-components';
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Form = styled.div`
  padding-top: 56px;
`;

const DonateAmmountBtn = styled.button<IBtn>`
  /* input label */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  height: 53px;
  background: ${(props) => (props.active ? 'linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%)' : '#ffffff')};
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => (props.active ? '#ffff;' : '#2f2f2f;')};
  margin: 0px 4px;
  border-radius: 8px;
  max-width: 86px;
  @media only screen and (max-width: 480px) {
    margin: 4px 4px;
  }
  &::after {
    content: ' €';
    color: ${(props) => (props.active ? '#ffff;' : '#2f2f2f;')};
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    font-family: 'Open Sans', sans-serif;
  }
  &:hover,
  &:active,
  &:focus {
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
    color: white !important;
    border: 1px solid transparent;
    box-shadow: none;
    &:after {
      color: white !important;
    }
  }
  & input {
    border: none;
    border-bottom: 1px solid #c9c9c9;
    background: transparent;
    max-width: 40px;
    color: ${(props) => (props.active ? '#ffff;' : '#2f2f2f;')};
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    text-align: right;
    -moz-appearance: textfield;
    &:hover {
      color: white;
      box-shadow: none;
      border: none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      appearance: textfield !important;
    }
  }
`;
const ButtonGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  border-radius: 24px;
  border: 1px solid #cd8b65;
`;
const ButtonSwitch = styled.button<IBtn>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 0 24px 24px 0;
  border: none;
  background: ${(props) => (props.active ? 'linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%)' : '#fff')};
  padding: 24px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #585757;
  width: 278px;
  height: 186px;
  color: #585757;
  border-right: 1px solid #cd8b65;
  text-align: left;
  @media only screen and (max-width: 680px) {
    width: 200px;
    height: 250px;
  }
  @media only screen and (max-width: 480px) {
    width: 120px;
    height: 250px;
  }
  & img {
    background: ${(props) => (props.active ? 'rgb(47 47 47 / 16%);' : 'transparent')};
    padding: ${(props) => (props.active ? '24px' : '0')};
    position: absolute;
    left: 24px;
    top: 24px;
    border-radius: 80%;
  }
  & span {
    position: absolute;
    left: 24px;
    bottom: 24px;
  }
  &:first-child {
    border-radius: 24px 0 0 24px;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & strong {
    font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #2f2f2f;
  }
  & small {
    font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    color: rgba('#2f2f2f', 0.8);
  }
`;

const SelectBox = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 40px;
  padding: 15px 24px;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  border-radius: 8px;
  box-sizing: border-box;
`;
const SelectLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  border-radius: 15px;
  box-sizing: border-box;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  padding-left: 5px;
`;
const Error = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
  border-radius: 15px;
  box-sizing: border-box;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  color: #c57a51;
`;
const SelectMenu = styled.select`
  width: 100%;
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 21px;
  color: #9f9f9f;
`;
const HeadingSmall = styled.h5`
  font-family: 'Public-sans', sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #2f2f2f;
  font-weight: 800;
  text-align: left;
`;

const Donate = ({ shelters }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const setDonateMethod = (e: any) => {
    e.preventDefault();
    dispatch(setHelpMethod(e.target.id));
  };
  const getValue = (e: any) => {
    e.preventDefault();
    e.target.textContent;
    if (e.target.textContent) {
      dispatch(setValueAction(e.target.textContent));
    } else {
      dispatch(setValueAction(e.target.value));
    }
  };

  const getPlace = (e: any) => {
    e.preventDefault();
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    let optionId = optionElement.id;
    let optionValue = optionElement.value;
    dispatch(setShelterIdAction(optionId, optionValue));
  };
  const { error } = useSelector((state: any) => state.state);
  const { value, shelterID, shelterName, helpMethod } = useSelector((state: any) => state.state.formData);

  useEffect(() => {
    if ((value > 0 && shelterID !== null && helpMethod == 1) || (value > 0 && helpMethod == 2)) {
      dispatch(setFormState(true));
    } else {
      dispatch(setFormState(false));
    }
  }, [value, shelterID, helpMethod]);

  return (
    <Fragment>
      <ButtonGroup>
        <ButtonSwitch active={helpMethod == 1} onClick={setDonateMethod} {...register('donate-method', { required: true })} id="1">
          {helpMethod == 1 ? <img src={paw} /> : <img src={wallet} />}
          <span>{t('Donate_method_one')}</span>
        </ButtonSwitch>
        <ButtonSwitch active={helpMethod == 2} onClick={setDonateMethod} {...register('donate-method', { required: true })} id="2">
          {helpMethod == 2 ? <img src={paw} /> : <img src={wallet} />}
          <span>{t('Donate_method_all')}</span>
        </ButtonSwitch>
      </ButtonGroup>
      <Form>
        <Label>
          <strong>{t('Donate_project_about')}</strong>
          <strong className="text-secondary">{helpMethod === 1 ? t('Donate_help_method_non_optional') : t('Donate_help_method_optional')}</strong>
        </Label>
        <SelectBox>
          {!error ? (
            <SelectMenu
              id="selectShelter"
              {...register('selectShelter', {
                required: 'select one option',
              })}
              onChange={getPlace}
            >
              {shelters.map((c: any) => (
                <option id={c.id} key={c.id}>
                  {c.name}
                </option>
              ))}
              {errors.shelterName && <span>{errors.email.message}</span>}
            </SelectMenu>
          ) : (
            <Error>{t('load_error')}</Error>
          )}
          {!error ? <SelectLabel>{t('Donate_form_shelter_label')}</SelectLabel> : ''}
        </SelectBox>
      </Form>
      <HeadingSmall>{t('Donate_form_ammount_label')}</HeadingSmall>
      <Row>
        <DonateAmmountBtn active={value == 10} onClick={getValue} {...register('ammount1', { required: true })}>
          10
        </DonateAmmountBtn>
        <DonateAmmountBtn active={value == 20} onClick={getValue} {...register('ammount2', { required: true })}>
          20
        </DonateAmmountBtn>
        <DonateAmmountBtn active={value == 30} onClick={getValue} {...register('ammount3', { required: true })}>
          30
        </DonateAmmountBtn>
        <DonateAmmountBtn active={value == 50} onClick={getValue} {...register('ammount4', { required: true })}>
          50
        </DonateAmmountBtn>
        <DonateAmmountBtn active={value == 100} onClick={getValue} {...register('ammount5', { required: true })}>
          100
        </DonateAmmountBtn>

        <DonateAmmountBtn active={value !== 0 && value !== 10 && value !== 20 && value !== 30 && value !== 50 && value !== 100} onClick={(e: any) => e.preventDefault()}>
          <input type="number" onKeyUp={getValue} {...register('ammount', { required: false })} id="price" />
        </DonateAmmountBtn>
      </Row>
    </Fragment>
  );
};

export default Donate;
