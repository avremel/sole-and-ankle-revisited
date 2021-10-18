/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay
      onDismiss={onDismiss}
      isOpen={isOpen}
    >
      <Content
      >
        <Close>
          <UnstyledButton onClick={onDismiss}>
            <Icon id='close'/>
            <VisuallyHidden>Close</VisuallyHidden>
          </UnstyledButton>
        </Close>
        <Side />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <NavLink href="/terms">Terms and Conditions</NavLink>
          <NavLink href="/privacy">Privacy Policy</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
`;

const NavLink = styled.a`
  color: var(--gray900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  
  &:first-of-type {
    color: var(--secondary);
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Side = styled.div`
  flex: 1;
`;

export default MobileMenu;
