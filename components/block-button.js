import styled from 'styled-components';

const ButtonContainer = styled.div`
  border-radius: 5px;
  background: #5842df;
  width: 150px;
  height: 40px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  color: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.22);
  user-select: none;
  &:hover {
    background: #4936c0;
  }
  &:active {
    background: #4333a7;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  }
`;

const BlockButton = props => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export default BlockButton;
