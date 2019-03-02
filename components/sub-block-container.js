import styled from 'styled-components';
import { BlockContainer } from './block-container';

export const SubBlockContainer = styled(BlockContainer)`
  @media (max-width: 1000px) {
    flex-direction: column;
    min-height: 100vh;
  }
`;
