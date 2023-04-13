import styled from "styled-components";

export const StyledSideNav = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  padding: 1.5rem 0.8rem;
  width: fit-content;
  box-shadow: 4px 4px 8px -2px var(--color-gray-600);
  background: var(--fg-primary);
  border-radius: 20px;
  position: fixed;
  top: 50vh;
  left: 40px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    display: none;
  }

  li {
    list-style: none;
  }
  li:hover label {
    visibility: visible;
  }
  label {
    position: absolute;
    left: 150%;
    background: var(--bg-main);
    visibility: hidden;
    padding: 0.3rem 1rem;
    border-radius: 10px;
    font-size: smaller;
  }
`;
