import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <BreadcrumbContainer>
      <Link to='/'>Home</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={to}>
            <span> / </span>
            <Link to={to}>{value}</Link>
          </React.Fragment>
        );
      })}
    </BreadcrumbContainer>
  );
};

const BreadcrumbContainer = styled.div`
  margin: 1rem 0;
`;
