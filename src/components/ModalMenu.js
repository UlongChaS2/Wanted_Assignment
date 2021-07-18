import React from 'react';
import { icons } from '../icons';
import styled from 'styled-components';

export default function ModalMenu({ setIsMenuModal }) {
  const handleClose = () => {
    setIsMenuModal(false);
  };
  return (
    <Container>
      <Box>
        <Logo>Wanted</Logo>
        <CloseButton src={icons.closeIcon} onClick={handleClose} />
      </Box>
      <Box2>
        <Context>MY 원티드</Context>
        <Profile>
          <img src="/image/mingki.jpeg" />
        </Profile>
      </Box2>
      <Context>이력서</Context>
      <Bar></Bar>
      <Context>매치업</Context>
      <Context>추천</Context>
      <Context>지원 현황</Context>
      <Context>프리랜서</Context>
      <Bar></Bar>
      <Context>직군별 연봉</Context>
      <Context>커리어 성장</Context>
      <Bar></Bar>
      <Context>기업 서비스</Context>
      <Ligout>로그아웃</Ligout>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  padding: 20px;
  background-color: white;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
const CloseButton = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;
const Box = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center')};
  margin-bottom: 50px;
`;
const Box2 = styled(Box)`
  margin: 0px;
`;
const Context = styled.div`
  padding: 15px 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
`;
const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;
const Bar = styled.div`
  padding-top: 15px;
  border-top: 1px solid #eee;
  margin-top: 15px;
`;
const Ligout = styled(Context)`
  color: gray;
`;
