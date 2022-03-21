import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 50px 0;
`;

export const StyledInput = styled.input`
  margin-top: 10px;
  margin-right: 10px;
  line-height: 2;
  font-size: 16px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border: none;
  border-radius: 2px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #eee;
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  font-family: inherit;
  border: 1px solid #ff0000;
  background-color: #cc0000;
  cursor: pointer;
  padding: 8px 10px;
  color: #eee;
  border-radius: 3px;

  &:hover:not(:disabled) {
    border-color: #cc0000;
    background-color: #8a0000;
  }

  &:active:not(:disabled) {
    border-color: #cc0000;
    background-color: #8a0000;
  }

  &:active:not(:disabled) {
    border-color: #cc0000;
    background-color: #8a0000;
  }

  &:disabled {
    border-color: #dc9494;
    background-color: #f16161;
    cursor: unset;
  }
`;

export const StyledDataViewWrapper = styled.div`
  height: 400px;
  width: 400px;
  margin: auto;
  overflow: auto;
  background-color: #eee;
  border-radius: 4px;
  padding: 10px;
  position: relative;
`;
