import React, { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setFormState, setHelpMethod, setShelterIdAction, setValueAction } from '../../../redux/actions/actiionCreators/shelterActionCreator';
//images
import paw from '../../../assets/icons/paw.png';
import wallet from '../../../assets/icons/wallet-icon.png';
/**styles */
import { ButtonGroup, ButtonSwitch, DonateAmmountBtn, Form, HeadingSmall, Label, Row, SelectBox, SelectLabel, SelectMenu, Error } from '../../styles/styles';

const Donate = ({ shelters, t, dispatch }: any) => {
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
  const ammounts = [10, 20, 30, 50, 100];
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
        <SelectBox focused={helpMethod == 1}>
          {!error ? <SelectLabel>{t('Donate_form_shelter_label')}</SelectLabel> : ''}
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
        </SelectBox>
      </Form>
      <HeadingSmall>{t('Donate_form_ammount_label')}</HeadingSmall>
      <Row>
        {ammounts.map((ammount) => {
          return (
            <DonateAmmountBtn active={value == 10} onClick={getValue}>
              {ammount}
            </DonateAmmountBtn>
          );
        })}

        <DonateAmmountBtn active={value !== 0 && value !== 10 && value !== 20 && value !== 30 && value !== 50 && value !== 100} onClick={(e: any) => e.preventDefault()}>
          <input type="number" onKeyUp={getValue} {...register('ammount', { required: false })} id="price" />
        </DonateAmmountBtn>
      </Row>
    </Fragment>
  );
};

export default Donate;
