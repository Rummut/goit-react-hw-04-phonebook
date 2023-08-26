import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 50px 0;
  background-color: #ffffff;
  margin: auto;
  width: 350px;
  border-radius: 8px;
  gap: 15px;
  margin-top: 5px;
`;

export const Item = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  border: 1px solid grey;
  box-shadow: 5px 5px 5px grey;
  width: 100%;
  padding: 20px;
  justify-content: space-around;
    border-radius: 8px;
`;

export const Button = styled.button`
  background: #e7ecf2;
  border-width: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-block;
  font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  &:hover,
  &:active {
    background-color: initial;
  background-position: 0 0;
  color: #FF4742;
  opacity: .5;
  }
`;