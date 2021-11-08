import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next, Translation, useTranslation } from 'react-i18next';
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchSheltersAction } from './redux/actions/actiionCreators/shelterActionCreator';
import MainImage from './assets/img/main_image.png';
import './App.scss';
import styled from 'styled-components';
import TranslationSK from './lang/sk';
import TranslationCZ from './lang/cz';
import TranslationEN from './lang/en';

const LayoutContainer = styled.div`
  margin: auto;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  padding: 130px 0 240px 0;
`;
const Page = styled.div`
  background: #e5e5e5;
`;
const ImageSection = styled.div`
  & img {
    max-width: 364px;
    width: 100%;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      sk: { translation: TranslationSK },
      cz: { translation: TranslationCZ },
      en: { translation: TranslationEN },
    },
    lng: 'sk',
    fallbackLng: 'sk',
    interpolation: { escapeValue: false },
  });

function App() {
  const { t } = useTranslation();
  const [value, setValue] = useState();
  const getValue = (e: ChangeEvent<HTMLInputElement> | any) => {
    e.preventDefault();
    console.log(e);
    setValue(e.target.textContent);
  };
  const dispatch = useDispatch();
  /*Init shelters */
  useEffect(() => {
    dispatch(fetchSheltersAction());
  }, []);
  const { shelters, formData } = useSelector((state: any) => state.state);
  const { currentPage } = useSelector((state: any) => state.state.formData);
  return (
    <Page>
      <Header />
      <LayoutContainer>
        <Form shelters={shelters} formData={formData} currentPage={currentPage} />
        <ImageSection>
          <img src={MainImage} alt="dog main image"></img>
        </ImageSection>{' '}
      </LayoutContainer>
      <Footer />
    </Page>
  );
}

export default App;
