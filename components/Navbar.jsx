import React from "react";
import styled from "styled-components";
import { HiMenuAlt3 } from "react-icons/hi";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from "next/link";
import { Link as sLink } from "react-scroll";
import Image from "next/image";

const Nav = styled.nav`
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 60;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  } ;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ClickIcons = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;

  &:active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
const NavItems = styled.li`
  height: 60px;
  &:hover {
    border-bottom: 3px solid #01bf71;
  }
`;

const NavLinks = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;

  &:active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Link passHref href={"/"} className="p-1 bg-white">
              <Image
                src={"/icon.png"}
                width={50}
                height={50}
                layout="intrinsic"
                alt="logo"
                className="rounded-full"
              />
            </Link>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <HiMenuAlt3 />
          </MobileIcon>

          <NavMenu>
            <NavItems>
              <NavLinks to="about">About</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="services">Services</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItems>
          </NavMenu>
          <SocialIcons onClick={toggle}>
            <ClickIcons>
              <TiSocialLinkedin />
            </ClickIcons>
          </SocialIcons>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
