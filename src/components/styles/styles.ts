import styled from 'styled-components';
import { IBtn, ISelectBox } from '../../interfaces';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Form = styled.div`
  padding-top: 56px;
  max-width: 558px;
`;
export const AppContainer = styled.div`
  margin: auto;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  padding: 130px 0 240px 0;
  @media only screen and (max-width: 680px) {
    padding: 70px 0 140px 0;
  }
`;
export const AppBody = styled.div`
  background: #e5e5e5;
`;
export const ImageSection = styled.div`
  margin-left: 43px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  & img {
    max-width: 364px;
    width: 100%;
  }
`;
export const DonateAmmountBtn = styled.button<IBtn>`
  /* input label */
  display: flex;
  flex-direction: row;
  justify-content: center;
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
    width: 85px;
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
export const ButtonGroup = styled.div`
  position: relative;
  width: 100%;
  max-width: 558px;
  display: inline-flex;
  vertical-align: middle;
  border-radius: 24px;
  border: 1px solid #cd8b65;
`;
export const ButtonSwitch = styled.button<IBtn>`
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
  width: 50%;
  height: 186px;
  color: #585757;
  border-right: 1px solid #cd8b65;
  text-align: left;
  @media only screen and (max-width: 680px) {
    height: 250px;
  }
  @media only screen and (max-width: 480px) {
    width: 50%;
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
export const Label = styled.label`
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

export const SelectBox = styled.div<ISelectBox>`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 40px;
  padding: 15px 24px;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  border-radius: 8px;
  box-sizing: border-box;
  border: ${(props) => (props.focused ? '1px solid #cd8b65' : '')};
`;
export const SelectLabel = styled.label`
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
export const Error = styled.label`
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
export const SelectMenu = styled.select`
  width: 100%;
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 21px;
  color: #9f9f9f;
`;
export const HeadingSmall = styled.h5`
  font-family: 'Public-sans', sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #2f2f2f;
  font-weight: 800;
  text-align: left;
`;

export const FormDataHeading = styled.h3`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #2f2f2f;
`;
export const FormDataContent = styled.p`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2f2f2f;
`;
export const CheckboxButton = styled.input`
  background: #ffffff;
  border: 1px solid #f3e2d9;
  box-sizing: border-box;
  border-radius: 8px;
`;
export const CheckboxLabel = styled.label`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #2f2f2f;
  opacity: 0.8;
  padding-left: 16px;
`;
export const InputContainer = styled.div`
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
export const ErrorMessage = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #cd8a64;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const Subheading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
`;
export const Heading = styled.h3`
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 46px;
  line-height: 52px;
  letter-spacing: 0.01em;
  color: #000000;
  font-weight: 700;
  padding-block: 28px;
  @media only screen and (max-width: 480px) {
    font-size: 36px;
    line-height: 40px;
  }
`;
export const FormContainer = styled.div`
  padding-left: 100px;
  @media only screen and (max-width: 1140px) {
    padding-right: 55px;
  }
  @media only screen and (max-width: 640px) {
    padding-inline: 20px;
  }
`;
export const FormElement = styled.form`
  max-width: 558px;
`;
export const ButtonNext = styled.button`
  display: flex;
  padding: 20px 24px;
  height: 59px;
  background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 100px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  &:disabled {
    background: #9f9f9f;
  }
  @media only screen and (max-width: 680px) {
    margin-inline: auto;
  }
`;
export const ButtonPrevious = styled.button`
  display: flex;
  padding: 20px 24px;
  height: 59px;
  background: #f3e2d9;
  border-radius: 100px;
  font-family: 'Public Sans', sans-serif;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #2f2f2f;
  border: none;
`;
export const ActionButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row-reverse;
  border: none;
  padding-top: 72px;
`;
export const HeaderSection = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fefefe; ;
`;
export const Text = styled.span`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #9f9f9f;
  display: flex;
  align-items: center;
`;
export const LayoutContainer = styled.div`
  margin: auto;
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 1140px) {
    padding-inline: 10px;
  }
`;
export const SocialSection = styled.div`
  width: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & a {
    i {
      color: #9f9f9f;
      font-size: 16px;
      margin-right: 8px;
      &:hover {
        text-decoration: none;
        color: #bf7245;
      }
    }
  }
`;
export const CurrentPage = styled.div`
  width: 43px;
  height: 8px;
  background: linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), #cd8b65;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 4px;
  margin: 2px;
  box-shadow: 3px 5px 4px var(--subtle);
  transition: width 0.5s;
`;
export const Page = styled.div`
  width: 20px;
  height: 8px;
  background: #9f9f9f;
  border-radius: 4px;
  margin: 2px;
  box-shadow: 3px 5px 4px var(--subtle);
  transition: width 0.5s;
`;
export const FooterLayoutContainer = styled.div`
  margin: auto;
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 80px;
  @media only screen and (max-width: 980px) {
    max-width: 500px;
    flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: fit-content;
  max-width: 220px;
  @media only screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    padding-bottom: 20px;
  }
`;
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 752px;
  @media only screen and (max-width: 680px) {
    flex-direction: column;
    max-width: 500px;
  }
`;
export const FooterLinksHeading = styled.h3`
  font-family: 'Public Sans', sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;
  margin-bottom: 24px;
  color: #2f2f2f;
`;
export const FooterLinksList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 170px;
  @media only screen and (max-width: 680px) {
    width: 170px;
    padding-bottom: 20px;
    margin-inline: auto;
  }
`;
export const FooterLink = styled.a`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  line-height: 200%;
  color: #585757;
  text-decoration: none;
  &:hover {
    color: #bf7245;
    cursor: pointer;
  }
`;
export const FooterText = styled.p`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: #585757;
`;
