import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid var(--yellow);

  img {
    width: 150px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      & + li {
        margin-left: 10px;
      }

      a {
        color: var(--yellow);
        font-size: 20px;
        text-decoration: none;
        position: relative;
        transition: filter all 0.2s;

        &:after {
          width: 100%;
          height: 2px;
          border: 1px solid var(--yellow);
          border-radius: 50%;
          content: '';
          position: absolute;
          bottom: -2px;
          background: var(--yellow);
          left: 0;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
