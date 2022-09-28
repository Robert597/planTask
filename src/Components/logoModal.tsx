import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { FiMenu } from 'react-icons/fi';

const LogoModal = () => {
    const LogoModal = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  .MenuController{
    font-size: 28px;
    cursor: pointer;
  }
  `
    return (
        <LogoModal>
        <Logo/>
        <FiMenu className="MenuController"/>
      </LogoModal>
    )
}

export default LogoModal;