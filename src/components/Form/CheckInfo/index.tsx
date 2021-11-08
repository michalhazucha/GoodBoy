import React, { useEffect, FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setFormState } from '../../../redux/actions/actiionCreators/shelterActionCreator';
import { useTranslation } from 'react-i18next';
/**styles */
import styled from 'styled-components';
import { ICheckInfoProps } from '../../../interfaces';
const FormDataHeading = styled.h3`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #2f2f2f;
`;
const FormDataContent = styled.p`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2f2f2f;
`;
const CheckboxButton = styled.input`
  background: #ffffff;
  border: 1px solid #f3e2d9;
  box-sizing: border-box;
  border-radius: 8px;
`;
const CheckboxLabel = styled.label`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #2f2f2f;
  opacity: 0.8;
  padding-left: 16px;
`;
/**Component */
const CheckInfo = ({ t, dispatch }: ICheckInfoProps) => {
  const {
    register,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
  });
  useEffect(() => {
    dispatch(setFormState(isValid));
  }, [isValid]);

  /**Last step functions */
  const formData = useSelector((state: any) => state.state.formData);
  return (
    <Fragment>
      <article>
        {formData.shelterName || formData.value || formData.firstName || formData.lastName || formData.email || formData.phoneNumber ? (
          <div>
            {formData.shelterName ? (
              <article>
                <FormDataHeading>{t('Check_info_shelter_chosen')}Najviac mi záleží na útulku</FormDataHeading>
                <FormDataContent>{formData.shelterName}</FormDataContent>
              </article>
            ) : (
              ''
            )}
            {formData.value ? (
              <article>
                <FormDataHeading>{t('Check_info_ammount_chosen')}Suma ktorou chcem pomôcť</FormDataHeading>
                <FormDataContent>{formData.value}</FormDataContent>
              </article>
            ) : (
              ''
            )}
            {formData.firstName || formData.lastName ? (
              <article>
                <FormDataHeading>{t('Check_info_name')}Meno a priezvisko</FormDataHeading>
                <FormDataContent>
                  {formData.firstName} {formData.lastName}
                </FormDataContent>
              </article>
            ) : (
              ''
            )}
            {formData.email ? (
              <article>
                <FormDataHeading>{t('Check_info_email')}E-mailová adresa</FormDataHeading>
                <FormDataContent>{formData.email}</FormDataContent>
              </article>
            ) : (
              ''
            )}
            {formData.phone ? (
              <article>
                <FormDataHeading>{t('Check_info_phone')}Telefónne čislo</FormDataHeading>
                <FormDataContent>{formData.phone}</FormDataContent>
              </article>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
        <CheckboxButton type="checkbox" id="GDPRcheckbox" {...register('GDPR', { required: 'Musíte súhlasiť so spracovaním osobných údajov' })} />
        <CheckboxLabel htmlFor="GDPRcheckbox">{t('Check_info_GDPR')}</CheckboxLabel>
        {errors.GDPR && <div className="text-danger">{errors.GDPR.message}</div>}
        {isValid}
      </article>
    </Fragment>
  );
};

export default CheckInfo;
