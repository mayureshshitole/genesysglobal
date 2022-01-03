import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from "next/link";

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;

  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icons = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 80px);
  } ;
`;

const SocialIcons = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const ClickIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icons onClick={toggle}>
        <CloseIcon />
      </Icons>
      <SidebarWrapper>
        <SidebarMenu>
          <Link passHref href="/#about">
            <SidebarLinks onClick={toggle} to="about">
              About
            </SidebarLinks>
          </Link>
          <Link passHref href="/#services">
            <SidebarLinks onClick={toggle} to="services">
              Services
            </SidebarLinks>
          </Link>
          <Link passHref href="/#contactus">
            <SidebarLinks onClick={toggle} to="contact">
              Contact
            </SidebarLinks>
          </Link>
        </SidebarMenu>
        <SocialIcons onClick={toggle}>
          <ClickIcons>
            <TiSocialLinkedin />
          </ClickIcons>
          <ClickIcons>
            <TiSocialLinkedin />
          </ClickIcons>
          <ClickIcons>
            <TiSocialLinkedin />
          </ClickIcons>
        </SocialIcons>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
