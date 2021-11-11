import { FC } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { HeaderSection, LayoutContainer, Text, SocialSection } from '../styles/styles';

const Header: FC = () => {
  return (
    <HeaderSection>
      <LayoutContainer>
        <Text>Nadácia GoodBoy</Text>
        <SocialSection>
          <a href="https://www.facebook.com/GoodRequestCom" target="_blank">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/goodrequest/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </SocialSection>
      </LayoutContainer>
    </HeaderSection>
  );
};

export default Header;
