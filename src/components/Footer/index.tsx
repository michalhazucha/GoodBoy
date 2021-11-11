import React, { FC, Fragment } from 'react';
import logo from '../../assets/logo/Goodboy_logo.png';
/**styles */
import { FooterLayoutContainer, Image, FooterLinks, FooterLinksList, FooterLinksHeading, FooterLink, FooterText } from '../styles/styles';
interface IFooter {
  t: Function;
}
const Footer = ({ t }: any) => {
  return (
    <Fragment>
      <FooterLayoutContainer>
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
      </FooterLayoutContainer>
    </Fragment>
  );
};

export default Footer;
