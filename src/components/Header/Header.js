import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon/Icon.js';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SmallNav>
          <Icon id='shopping-bag' />
          <Icon id='search' />
          <Button onClick={() => setShowMobileMenu(true)}><Icon id='menu' /></Button>
        </SmallNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray300);
  overflow-x: scroll;

  @media (max-width: ${p => p.theme.tablet}) {
    border-top: 4px solid var(--gray700);
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    8.6vw - 4rem,
    3rem
  );
  margin: 0px 48px;

  @media (max-width: ${p => p.theme.tablet}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media (max-width: ${p => p.theme.tablet}) {

    & :last-of-type {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }
`;

const SmallNav = styled.nav`
  display: none;
  @media (max-width: ${p => p.theme.tablet}) {
    display: flex;
    margin: 0;
    gap: 15px;
  }
`;

const Button = styled.button`
  all: unset;
`;

export default Header;
