import styled from 'styled-components';

export const BlockContainer = styled.div`
  background: ${props => props.backgroundColor || 'none'};
  flex: 1;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
`;
