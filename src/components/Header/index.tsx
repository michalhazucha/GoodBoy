import React, { FC } from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const HeaderSection = styled.header`
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
const Text = styled.span`
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #9f9f9f;
  display: flex;
  align-items: center;
`;
const LayoutContainer = styled.div`
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
const SocialSection = styled.div`
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

const Header: FC = () => {
  return (
    <HeaderSection>
      <LayoutContainer>
        <Text>Nadácia GoodBoy</Text>
        <SocialSection>
          <a href="https://www.facebook.com/GoodRequestCom">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/goodrequest/">
            <i className="fa fa-instagram"></i>
          </a>
        </SocialSection>
      </LayoutContainer>
    </HeaderSection>
  );
};

export default Header;
