import React from 'react';

import { MyButton } from './Button.styled';

interface ButtonProps {
  primary?: boolean;
}

export function Button({ primary }: ButtonProps) {
  return <MyButton primary={primary}>Contact me</MyButton>;
}
