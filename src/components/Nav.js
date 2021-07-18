import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HoverMenu from './HoverMenu';
import { useOutSideHover } from '../utils/useOutSideHover';
import { icons } from '../icons';
import styled from 'styled-components';

const Nav = () => {
  const [isTab, setIsTab] = useState(0);
  const [isHover, setIsHover] = useState(0);
  const [isTabActive, setIsTabActive] = useState(false);
  const { isActive, setIsActive, inputEl } = useOutSideHover();

  const selectMenu = (e) => {
    setIsTab(e.target.id);
  };

  const hoverMenu = (e) => {
    const isHoverActive = parseInt(e.target.id) === 1 ? true : false;
    setIsActive(isHoverActive);
    console.log(e.target);
  };

  console.log(isActive);
  return (
    <NavContainer>
      <NavWrap>
        <Logo>Wanted</Logo>
        <Menu>
          {MENU.map((list, idx) => {
            return (
              <MenuLi key={idx} ref={inputEl}>
                <MenuLink
                  to="/"
                  id={list.id}
                  selectTab={parseInt(isTab) === list.id}
                  onClick={(e) => selectMenu(e)}
                  onMouseEnter={(e) => hoverMenu(e)}
                >
                  {list.name}
                </MenuLink>
                {isActive && <HoverMenu />}
              </MenuLi>
            );
          })}
        </Menu>
        <SideMenu>
          <SideMenuLi>
            <SlideMenuButton>
              <img src={icons.searchIcon} />
            </SlideMenuButton>
          </SideMenuLi>
          <SideMenuLi>
            <SlideMenuButton>
              <img src={icons.bellIcon} />
            </SlideMenuButton>
          </SideMenuLi>
          <SideMenuLi>
            <SlideMenuButton>
              <ProfileImage>
                <img src="/image/mingki.jpeg" />
              </ProfileImage>
            </SlideMenuButton>
          </SideMenuLi>
          <SideMenuLi>
            <CompanyButton>기업 서비스</CompanyButton>
          </SideMenuLi>
        </SideMenu>
      </NavWrap>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  ${({ theme }) => theme.flexSet()};
  position: fixed;
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const NavWrap = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center')};
  width: 90%;
  max-width: 1060px;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.ul`
  ${({ theme }) => theme.flexSet('space-between')};
  min-width: 300px;
  width: 500px;
`;
const MenuLi = styled.li``;

const MenuLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  padding: 16px 0;
  cursor: pointer;
  border-bottom: 2px solid
    ${({ selectTab }) => (selectTab ? '#258bf7' : '#ffffff00')};

  &:hover {
    border-bottom-color: lightgray;
  }
`;

// (
const SideMenu = styled.ul`
  ${({ theme }) => theme.flexSet()};
`;

const SideMenuLi = styled.li`
  position: relative;
  &:nth-last-child(1) {
    ${({ theme }) => theme.flexSet()};
  }

  &:nth-last-child(1)::before {
    display: block;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: 0 22px;
  }
`;

const SlideMenuButton = styled.button`
  margin: 0 3px;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
`;

const ProfileImage = styled.div`
  width: 36px;
  height: 36px;
  border: 1px solid lightgray;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 1px solid white;
  }
`;

const CompanyButton = styled(SlideMenuButton)`
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid lightgray;
  border-radius: 30px;
`;

const MENU = [
  { id: 1, name: '탐색' },
  { id: 2, name: '커리어 성장' },
  { id: 3, name: '직군별 연봉' },
  { id: 4, name: '이력서' },
  { id: 5, name: '매치업' },
  { id: 6, name: '프리랜서' },
];
