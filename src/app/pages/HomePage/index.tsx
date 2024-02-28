import { P } from 'app/components/NotFoundPage/P';
import { SettingToggle } from 'app/components/Phonenix/SettingToggle';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Phoenix React | ReactJS Dashboard & WebApp Template</title>
        <meta name="description" content="" />
      </Helmet>
      <Wrapper>
        <P>Home This is content page</P>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Wrapper>
      <SettingToggle />
    </>
  );
}

const Wrapper = styled.div`
  background-color: rgba(var(--bg-rgba-white), var(--opacity)) !important;
`;
