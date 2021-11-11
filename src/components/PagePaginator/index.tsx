import React from 'react';
import styled from 'styled-components';
import { IPagePaginatorProps } from '../../interfaces';
/**styles */
import { CurrentPage, Page } from '../styles/styles';

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
