export interface IState {
  shelters: IShelter[];
  formData: IFormData;
}

export interface IFormData {
  currentPage: any;
  firstName: '';
  lastName: '';
  email: '';
  phone: '';
  value: 0;
  shelterID: null | Number;
  shelterName: '';
  helpMethod: Number;
  isValid: boolean;
}
export interface IShelter {
  id: Number;
  name: String;
}
export interface IBtn {
  active?: boolean;
}
export interface IPagePaginatorProps {
  currentPage: Number;
}
export interface IFormProps {
  shelters: [IShelter];
  formData: IFormData;
  currentPage: number;
}
