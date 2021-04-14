import React from 'react';
import styled from 'styled-components';
import * as SiIcons from 'react-icons/si';

interface IconProps {
  name: string;
}

export function Icon({ name }: IconProps) {
  const MyIcon = styled(SiIcons[name])`
    color: #414141;
    font-size: 2rem;
  `;

  return <MyIcon />;
}
