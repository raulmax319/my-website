import styled, { css } from 'styled-components';

export const MyButton = styled('a')<{ primary: boolean }>`
  width: 200px;
  height: 45px;
  display: inline-block;
  cursor: pointer;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  color: ${({ primary }) => (primary ? '#fff' : '#212529')};
  ${({ primary }) =>
    primary
      ? css`
          background-image: linear-gradient(45deg, #63aeff, #007bff);
        `
      : css`
          background-image: linear-gradient(45deg, #f1f2f3, #fff);
        `};
  vertical-align: middle;
  user-select: none;
  border: 1px solid ${({ primary }) => (primary ? '#007bff' : '#f1f2f3')};
  border-radius: 30px;
  line-height: 1.5rem;
  padding: 10px 30px;
  transition: background-image 350ms ease-in-out, border-color 350ms ease-in-out;

  & :hover {
    /* background: ${({ primary }) =>
      primary
        ? 'linear-gradient(45deg, #212529, black)'
        : 'linear-gradient(45deg, #c1c2c3, #fff)'}; */
    ${({ primary }) =>
      primary
        ? css`
            background-image: linear-gradient(45deg, #212529, black);
          `
        : css`
            background-image: linear-gradient(45deg, #c1c2c3, #fff);
          `}
    border-color: ${({ primary }) => (primary ? '#212529' : '#f1f2f3')};
  }
`;
