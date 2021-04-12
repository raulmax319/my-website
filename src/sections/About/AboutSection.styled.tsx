import styled from 'styled-components';

export const About = styled.section`
  padding: 5rem 10rem;
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

  @media (max-width: 991px) {
    margin: auto 5rem;
  }
`;

export const H2 = styled.h2`
  color: #007bff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media (max-width: 991px) {
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Circle = styled.figure`
  position: relative;
  margin: 0 0 1rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 00px;
  margin-inline-end: 80px;

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

  @media (max-width: 991px), (max-width: 1136px) {
    padding: 0;
  }
`;

export const H3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 850px) {
    text-align: center;
  }
`;

export const P = styled('p')<{ blue?: boolean }>`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  text-align: left;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ blue }) => (blue ? '#007bff' : 'gray')};

  @media (max-width: 850px) {
    text-align: center;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0;
  margin-bottom: 2.25rem;
  padding-left: 0;
`;

export const ListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  text-align: -webkit-match-parent;
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  margin-left: 10rem;
  border-radius: 50%;
  border: 5px solid #313131;

  @media (max-width: 991px), (max-width: 1136px) {
    margin-left: 0;
  }
`;
