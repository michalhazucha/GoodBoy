import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
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
import { AppBody, AppContainer, ImageSection } from './components/styles/styles';

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
  const dispatch = useDispatch();
  /*Init shelters */
  useEffect(() => {
    dispatch(fetchSheltersAction());
  }, []);
  const { shelters, formData } = useSelector((state: any) => state.state);
  const { currentPage } = useSelector((state: any) => state.state.formData);
  return (
    <AppBody>
      <Header />
      <AppContainer>
        <Form shelters={shelters} formData={formData} currentPage={currentPage} dispatch={dispatch} t={t} />
        <ImageSection>
          <img src={MainImage} alt="dog main image"></img>
        </ImageSection>{' '}
      </AppContainer>
      <Footer t={t} />
    </AppBody>
  );
}

export default App;
