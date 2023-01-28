import styled from "styled-components";

export const StyledSideNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: fit-content;
  box-shadow: 7px 7px 17px 6px var(--color-black-200);
  background: var(--bg-main);
  border-radius: 4px;
  position: fixed;
  top: 50vh;
  left: 40px;

  li {
    list-style: none;
  }
`;
