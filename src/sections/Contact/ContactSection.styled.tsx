import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  cursor: pointer;

  @media (max-width: 400px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Sub = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
`;
