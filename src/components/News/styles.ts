import styled from 'styled-components';

import { Rocketseat } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;

  > div {
    display: flex;
    flex-direction: column;

    > span {
      color: var(--gray);
      margin-bottom: 3px;
    }
  }
`;

export const Image = styled(Rocketseat)`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--gray);
`;
