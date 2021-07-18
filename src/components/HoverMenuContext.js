import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { icons } from '../icons';

export default function HoverMenuContext() {
  return (
    <>
      {MENU_CONTEXT.map((data, idx) => {
        return (
          <UL>
            <li>
              <Title>{data.title}</Title>
              <Arrow />
            </li>
            {MENU_CONTEXT[idx].context.map((list) => {
              return (
                <li>
                  <MenuLink>{list}</MenuLink>
                </li>
              );
            })}
            <li>
              <More>더보기</More>
              <Arrow />
            </li>
          </UL>
        );
      })}
      <UL>
        <li>
          <Title>엔지니어링 • 설계</Title>
          <Arrow />
        </li>
        <li>
          <Title>물류 • 무역</Title>
          <Arrow />
        </li>
        <li>
          <Title>제조 • 생산</Title>
          <Arrow />
        </li>
        <li>
          <Title>의료 • 제약 • 바이오</Title>
          <Arrow />
        </li>
        <li>
          <Title>교육</Title>
          <Arrow />
        </li>
        <li>
          <Title>법률 • 법집행기과</Title>
          <Arrow />
        </li>
        <li>
          <Title>식 • 음료</Title>
          <Arrow />
        </li>
        <li>
          <Title>건설 • 시설</Title>
          <Arrow />
        </li>
        <li>
          <Title>공공 • 복지</Title>
          <Arrow />
        </li>
      </UL>
    </>
  );
}

const UL = styled.ul`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'column')};
  height: 270px;
  li {
    ${({ theme }) => theme.flexSet('space-between', 'flex-start')};
    width: 100%;
    min-width: 138px;
    margin: 5px 0;
  }
`;

const Arrow = styled.img.attrs({
  src: icons.arrowIcon,
})`
  width: 10px;
  height: 10px;
`;

const Title = styled.div`
  font-size: 17px;
  color: #333;
  margin-bottom: 5px;
  padding-right: 20px;
  padding-bottom: 10px;
  white-space: nowrap;
`;
const MenuLink = styled(Link)`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #999;
  padding: 2px 0;
`;
const More = styled(MenuLink)``;

const MENU_CONTEXT = [
  {
    id: 1,
    title: '영업',
    context: [
      '기업영업',
      '외부영업',
      '영업 관리자',
      '기술영업',
      '주요고객사 담당자',
      '솔루션 컨설턴트',
      '해외영업',
    ],
  },
  {
    id: 2,
    title: '미디어',
    context: [
      '콘텐츠 크리에이터',
      'PD',
      '영상 편집가',
      '에디터',
      '비디오 제작',
      '작가',
      '출판 기획자',
    ],
  },
  {
    id: 3,
    title: '인사',
    context: [
      '인사담당',
      '리크루터',
      '조직문화',
      '평가 보상',
      '헤드헌터',
      'HRD',
      'HRBP',
    ],
  },
  {
    id: 4,
    title: '게임 제작',
    context: [
      '게임 기획자',
      '게임 그래픽 디자이너',
      '모바일 게임 개발자',
      '게임 클라이언트 개발자',
      '게임 아티스트',
      '유니티 개발자',
      '게임 서버 개발자',
    ],
  },
  {
    id: 5,
    title: '금융',
    context: [
      '회계담당',
      '제무 담당자',
      'IR',
      '투자 • 증권',
      '재무 분석가',
      '애널리스트',
      '내부통제 담당자',
    ],
  },
];
