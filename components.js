import styled from 'styled-components';
export const Container = styled.div`
  background: #fff;
  color: #000;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
`;

export const BlockContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Hero = styled.div`
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20pt;
    margin: 0px;
  }
  p {
    font-size: 20pt;
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    padding: 0 5rem;
    h1 {
      font-size: 20pt;
      margin: 0px;
    }
    p {
      font-size: 15pt;
    }
  }
  @media (max-width: 1200px) {
    padding: 0 1rem;
    h1 {
      font-size: 20pt;
      margin: 0px;
    }
    p {
      font-size: 15pt;
    }
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
    h1 {
      font-size: 15pt;
      margin: 0px;
    }
    p {
      font-size: 10pt;
    }
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 10pt;
      margin: 0px;
    }
    p {
      font-size: 10pt;
    }
  }
`;

export const Highlight = styled.span`
  color: red;
  font-weight: bold;
`;
