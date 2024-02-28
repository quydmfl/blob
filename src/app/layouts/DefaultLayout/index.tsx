import * as React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

export function DefaultLayout() {
  return (
    <Div className="relative">
      <Outlet />
    </Div>
  );
}

const Div = styled.div``;
