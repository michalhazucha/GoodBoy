import { IState } from '../../interfaces';
import { ActionTypes } from '../actions/actionTypes/types';
/**TODO  REFACTOR imports*/
const initialState: IState = {
  shelters: [],

  formData: {
    currentPage: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    value: 0,
    shelterID: null,
    shelterName: '',
    helpMethod: 1,
    isValid: true,
  },
};

const shelterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GetShelters:
      return { ...state, ...action.payload };
    case ActionTypes.SetShelter:
      return { ...state, shelters: action.payload };
    case ActionTypes.FetchError:
      return { ...state, error: action.message };
    case ActionTypes.SetFirstName:
      return {
        ...state,
        formData: {
          ...state.formData,
          firstName: action.payload,
        },
      };
    case ActionTypes.SetLastName:
      return {
        ...state,
        formData: {
          ...state.formData,
          lastName: action.payload,
        },
      };
    case ActionTypes.SetEmail:
      return {
        ...state,
        formData: {
          ...state.formData,
          email: action.payload,
        },
      };
    case ActionTypes.SetPhoneNumber:
      return {
        ...state,
        formData: {
          ...state.formData,
          phone: action.payload,
        },
      };
    case ActionTypes.SetValue:
      return {
        ...state,
        formData: {
          ...state.formData,
          value: Number(action.payload),
        },
      };
    case ActionTypes.SetShelterId:
      return {
        ...state,
        formData: {
          ...state.formData,
          shelterID: Number(action.payload.id),
          shelterName: action.payload.name,
        },
      };
    case ActionTypes.NextPage:
      return {
        ...state,
        formData: {
          ...state.formData,
          currentPage: state.formData.currentPage + 1,
        },
      };
    case ActionTypes.PreviousPage:
      return {
        ...state,
        formData: {
          ...state.formData,
          currentPage: state.formData.currentPage - 1,
        },
      };
    case ActionTypes.SetFormState:
      return {
        ...state,
        formData: {
          ...state.formData,
          isValid: action.payload,
        },
      };
    case ActionTypes.SetHelpMethod:
      return {
        ...state,
        formData: {
          ...state.formData,
          helpMethod: Number(action.payload),
        },
      };
    default:
      return state;
  }
};

export default shelterReducer;
