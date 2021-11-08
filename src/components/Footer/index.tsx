import React, { Fragment } from 'react';
import logo from '../../assets/logo/Goodboy_logo.png';
import { useTranslation } from 'react-i18next';
/**styles */
import styled from 'styled-components';
const LayoutContainer = styled.div`
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
const Image = styled.img`
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
const FooterLinks = styled.div`
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
const FooterLinksHeading = styled.h3`
  font-family: 'Public Sans', sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;
  margin-bottom: 24px;
  color: #2f2f2f;
`;
const FooterLinksList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 170px;
  @media only screen and (max-width: 680px) {
    padding-bottom: 20px;
    padding-inline: 20px;
  }
`;
const FooterLink = styled.a`
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
const FooterText = styled.p`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: #585757;
`;

const Footer = ({ t }: any) => {
  return (
    <Fragment>
      <LayoutContainer>
        <Image src={logo} alt="imageLogo" />
        <FooterLinks>
          <FooterLinksList>
            <FooterLinksHeading>{t('Footer_col_1_heading')}</FooterLinksHeading>
            <FooterLink>{t('Footer_col_1_link_one')}</FooterLink>
            <FooterLink>{t('Footer_col_1_link_two')}</FooterLink>
            <FooterLink>{t('Footer_col_1_link_three')} </FooterLink>
          </FooterLinksList>
          <FooterLinksList>
            <FooterLinksHeading>{t('Footer_col_2_heading')}</FooterLinksHeading>
            <FooterText>{t('Footer_col_2_text')}</FooterText>
          </FooterLinksList>
          <FooterLinksList>
            <FooterLinksHeading>{t('Footer_col_3_heading')}</FooterLinksHeading>
            <FooterText>{t('Footer_col_3_text')}</FooterText>
          </FooterLinksList>
        </FooterLinks>
      </LayoutContainer>
    </Fragment>
  );
};

export default Footer;
