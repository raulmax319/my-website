import React, { ReactNode } from 'react';

import { MyButton } from './Button.styled';

interface ButtonProps {
  children: string | ReactNode;
  primary?: boolean;
  href: string;
}

export function Button({ children, primary, href }: ButtonProps) {
  return (
    <MyButton href={href} primary={primary}>
      {children}
    </MyButton>
  );
}
