import React, { useEffect, FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setFormState } from '../../../redux/actions/actiionCreators/shelterActionCreator';
import { ICheckInfoProps } from '../../../interfaces';
/**styles */
import { FormDataHeading, FormDataContent, CheckboxButton, CheckboxLabel } from '../../styles/styles';

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
                <FormDataHeading>{t('Check_info_shelter_chosen')}</FormDataHeading>
                <FormDataContent>{formData.shelterName}</FormDataContent>
              </article>
            ) : (
              ''
            )}
            {formData.value ? (
              <article>
                <FormDataHeading>{t('Check_info_ammount_chosen')}</FormDataHeading>
                <FormDataContent>{formData.value}</FormDataContent>
              </article>
            ) : (
              ''
            )}
            {formData.firstName || formData.lastName ? (
              <article>
                <FormDataHeading>{t('Check_info_name')}</FormDataHeading>
                <FormDataContent>
                  {formData.firstName} {formData.lastName}
                </FormDataContent>
              </article>
            ) : (
              ''
            )}
            {formData.email ? (
              <article>
                <FormDataHeading>{t('Check_info_email')}</FormDataHeading>
                <FormDataContent>{formData.email}</FormDataContent>
              </article>
            ) : (
              ''
            )}
            {formData.phone ? (
              <article>
                <FormDataHeading>{t('Check_info_phone')}</FormDataHeading>
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
