import React, { FC, Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import { setEmailAction, setFirstNameAction, setFormState, setLastNameAction, setPhoneNumberAction } from '../../../redux/actions/actiionCreators/shelterActionCreator';
import 'react-phone-input-2/lib/style.css';
import { IPersonalInfoProps } from '../../../interfaces';
/**styles */
import { Subheading, InputContainer, ErrorMessage } from '../../styles/styles';

const PersonalInfo = ({ t, dispatch }: IPersonalInfoProps) => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    dispatch(setFormState(isValid));
  }, [isValid, errors]);

  const getName = (e: any) => {
    trigger(e.target.name);
    switch (e.target.id) {
      case 'firstName':
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
