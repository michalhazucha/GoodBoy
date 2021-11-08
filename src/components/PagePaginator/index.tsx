import React from 'react';
import styled from 'styled-components';
import { IPagePaginatorProps } from '../../interfaces';
const CurrentPage = styled.div`
  width: 60px;
  height: 8px;
  background: linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), #cd8b65;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 4px;
  margin: 2px;
  box-shadow: 3px 5px 4px var(--subtle);
  transition: width 0.5s;
`;
const Page = styled.div`
  width: 25px;
  height: 8px;
  background: #9f9f9f;
  border-radius: 4px;
  margin: 2px;
  box-shadow: 3px 5px 4px var(--subtle);
  transition: width 0.5s;
`;

const PagePaginator = ({ currentPage }: IPagePaginatorProps) => {
  const Wrapper = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: flex-start;
  `;

  return (
    <Wrapper>
      {currentPage === 1 ? <CurrentPage /> : <Page />}
      {currentPage === 2 ? <CurrentPage /> : <Page />}
      {currentPage === 3 ? <CurrentPage /> : <Page />}
    </Wrapper>
  );
};

export default PagePaginator;
