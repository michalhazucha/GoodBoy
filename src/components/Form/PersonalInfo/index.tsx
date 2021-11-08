import React, { FC, Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import { useTranslation } from 'react-i18next';
import { setEmailAction, setFirstNameAction, setFormState, setLastNameAction, setPhoneNumberAction } from '../../../redux/actions/actiionCreators/shelterActionCreator';
/**styles */
import 'react-phone-input-2/lib/style.css';
import styled from 'styled-components';
const InputContainer = styled.div`
  margin-block: 16px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  padding: 16px 24px;
  &:focus-within {
    border: 1px solid #cd8b65;
  }

  & label {
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    color: #2f2f2f;
  }
  input {
    border: none;
    font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #9f9f9f;
    padding-inline: 0;
    &:focus {
      border-bottom: 1px solid #9f9f9f8f;
      box-shadow: none;
      border-radius: 0;
      transition: border ease-in-out 0.2s;
    }
  }
  & .flag-dropdown {
    border: none;
  }
`;
const ErrorMessage = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #cd8a64;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const Subheading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
`;

const PersonalInfo: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: 'onChange',
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormState(isValid));
  }, [isValid, errors]);

  const getName = (e: any) => {
    console.log(e);
    trigger(e.target.name);
    switch (e.target.id) {
      case 'firstName':
        console.log(e.target.value);
        dispatch(setFirstNameAction(e));
        break;
      case 'lastName':
        dispatch(setLastNameAction(e));
        break;
      case 'email':
        dispatch(setEmailAction(e));
        break;
    }
  };

  const getPhoneNumber = (e: any) => dispatch(setPhoneNumberAction(e));
  return (
    <Fragment>
      <Subheading>{t('Personal_info_section_subheading')}</Subheading>
      <InputContainer>
        <label>{t('Personal_info_first_name')}</label>
        <input type="text" id="firstName" className="form-control" placeholder="Zadajte vaše Meno" onKeyUp={getName} {...register('firstName', { required: 'Meno je je povinné pole', minLength: 2, maxLength: 20 })} />
        {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <label>{t('Personal_info_last_name')}</label>
        <input type="text" id="lastName" className="form-control" placeholder="Zadajte vaše Priezvisko" onKeyUp={getName} {...register('lastname', { required: 'Priezvisko je povinné pole', minLength: 2, maxLength: 30 })} /> {errors.lastname && <ErrorMessage>{errors.lastname.message}</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <label>{t('Personal_info_email')}</label>
        <input type="email" id="email" className="form-control" placeholder="Zadajte váš e-mail" onKeyUp={getName} {...register('email', { required: 'Email je povinný', pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <label>{t('Personal_phone_number')}</label>
        <PhoneInput
          dropdownStyle={{ border: 'none' }}
          inputStyle={{ width: '100%', fontSize: '1rem', boxSizing: 'border-box', border: 'none' }}
          inputProps={{
            name: 'phoneNumber',
            required: true,
            autoFocus: false,
          }}
          country={'sk'}
          onlyCountries={['sk', 'cz']}
          placeholder="+421"
          {...register('phoneNumber')}
          onChange={getPhoneNumber}
        />
        {errors.tel && <ErrorMessage>{errors.tel.message}</ErrorMessage>}
      </InputContainer>
    </Fragment>
  );
};

export default PersonalInfo;
