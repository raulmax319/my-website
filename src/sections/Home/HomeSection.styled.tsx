import styled from 'styled-components';

export const Home = styled.section``;

export const BannerArea = styled.div`
  min-height: calc(100vh);
  position: relative;
  z-index: 1;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('images/background.jpg') no-repeat scroll center 0 / cover;
    z-index: 0;
  }
`;

export const Container = styled.div``;

export const BannerContent = styled.div`
  color: #fff;
  position: relative;
  bottom: -30vh;

  h5 {
    font-size: 1.25rem;
    margin: 0;
    font-weight: 400;
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  h4 {
    font-size: 1.5rem;
    letter-spacing: 0;
    padding: 10px 0 10px;
  }
`;

export const H2 = styled.h2`
  margin: 0.625rem 0;
  font-size: 3.5rem;
  font-weight: bold;
`;

export const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 2rem;

  li {
    display: inline-block;
    margin: 0 5px;
  }

  li,
  a {
    font-size: 1rem;
    width: 2.75rem;
    line-height: 2.813rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: inline-block;
    color: #fff;
    transition: all 300ms linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  li a:hover {
    background: #fff;
    color: #000;
  }
`;
