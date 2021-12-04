import React from 'react';
import GuideTable from './GuideTable';
import styled from 'styled-components';
import { H3Ctn } from '../../styles/management/guidelist.js';
import { BorderBtn } from '../../styles/common/index.js';

const H3 = styled.h3``;

export default function GuideLists() {
  return (
    <div>
      <H3Ctn>
        <H3>가이드 목록</H3>
        <BorderBtn palette='red'>+가이드 생성</BorderBtn>
      </H3Ctn>
      <GuideTable
        columns={['날짜', '가이드 명', ' ', '', '']}
        data={[{ date: '2021-08-08', title: '이태원의 숨겨진 화원' }]}
      />
    </div>
  );
}
