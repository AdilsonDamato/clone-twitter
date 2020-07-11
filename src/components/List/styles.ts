import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 14px;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
  color: var(--white);
`;

export const Item = styled.div`
  padding: 10px 16px;
  transition: background 0.2s;
  cursor: pointer;

  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    padding-top: 13px;
    cursor: default;

    &:hover {
      background: transparent;
    }
  }

  &:last-child {
    padding-bottom: 17px;

    &:hover {
      border-radius: 0 0 14px 14px;
    }
  }

  &:hover {
    /* background-color: var(--outline); */
    background-color: rgba(255, 255, 255, 0.03);
  }
`;
