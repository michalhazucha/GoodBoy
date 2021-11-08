import { ActionTypes } from '../actionTypes/types';

export const fetchSheltersAction = () => {
  return {
    type: ActionTypes.FetchShelters,
  };
};
export const getSheltersAction = (data: Array<any>) => {
  return {
    type: ActionTypes.GetShelters,
    payload: data,
  };
};
export const submitForm = (formData: any) => {
  return {
    type: ActionTypes.SubmitForm,
    payload: { firstName: formData.firstName, lastName: formData.lastName, email: formData.email, phone: formData.phoneNumber, value: formData.value, shelterID: formData.shelterID },
  };
};
export const FetchErrorAction = () => {
  return { type: ActionTypes.FetchError, message: 'Shelters fetch failed' };
};
export const setFirstNameAction = (e: any) => {
  return { type: ActionTypes.SetFirstName, payload: e.target.value };
};
export const setLastNameAction = (e: any) => {
  return { type: ActionTypes.SetLastName, payload: e.target.value };
};
export const setEmailAction = (e: any) => {
  return { type: ActionTypes.SetEmail, payload: e.target.value };
};
export const setPhoneNumberAction = (e: any) => {
  return { type: ActionTypes.SetPhoneNumber, payload: e };
};
export const setValueAction = (e: any) => {
  return { type: ActionTypes.SetValue, payload: e };
};
export const setShelterIdAction = (id: number, name: String) => {
  return { type: ActionTypes.SetShelterId, payload: { id, name } };
};
export const setFormState = (formState: boolean) => {
  return { type: ActionTypes.SetFormState, payload: formState };
};
export const setHelpMethod = (val: any) => {
  console.log('helpMethod:', val);
  return { type: ActionTypes.SetHelpMethod, payload: val };
};
export const goToNextPage = () => {
  return { type: ActionTypes.NextPage };
};
export const goToPreviousPage = () => {
  return { type: ActionTypes.PreviousPage };
};
