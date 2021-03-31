import React, { ReactNode } from 'react';

import { MyButton } from './Button.styled';

interface ButtonProps {
  children: string | ReactNode;
  primary?: boolean;
  href: string;
  target?: string;
}

export function Button({ children, primary, href, target }: ButtonProps) {
  return (
    <MyButton href={href} primary={primary} target={target}>
      {children}
    </MyButton>
  );
}
