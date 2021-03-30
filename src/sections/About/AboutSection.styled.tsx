import styled from 'styled-components';

export const About = styled.section`
  padding: 5rem 0;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Div = styled.div`
  margin: auto 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H2 = styled.h2`
  color: #007bff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Circle = styled.figure`
  position: relative;
  margin: 0 0 1rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;

  &::after {
    width: 300px;
    height: 300px;
    content: '';
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    bottom: -90px;
    right: -90px;
    background: #f8f9fa;
  }
`;

export const Content = styled.div`
  margin-left: auto;
  padding: 0 4rem;
`;

export const H3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const P = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  text-align: left;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: gray;
`;

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 2.25rem;
  padding-left: 0;
  list-style: none;
`;

export const ListItem = styled('li')<{ icon: string }>`
  position: relative;
  padding-left: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  display: list-item;
  text-align: -webkit-match-parent;

  &::before {
    left: 0;
    font-size: 1.3rem;
    content: ${({ icon }) => String(icon) ?? '☕'};
    color: #71bc42;
    top: -0.3rem;
    position: absolute;
  }
`;
