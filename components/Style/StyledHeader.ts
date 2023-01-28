import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 75vh;
  background-image: linear-gradient(0deg, var(--home-bg), var(--home-bg-sec));
  padding-top: 8rem;
  padding-bottom: 8rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  justify-content: center;

  h1,
  p, .header__links {
    max-width: 50rem;
  }

  a {
    width: max-content;
  }

  .header {
    &__content {
      text-align: center;
    }

    &__greeting,
    &__name {
      display: block;
    }

    &__greeting {
      font-size: 1.5rem;
      margin-bottom: calc(-0.5rem - 0.4vw);
      color: var(--color-gray-800);
    }

    &__name {
      font-size: calc(3rem + 4vw);
      font-size: clamp(2rem, 12vw, 9rem);
      line-height: 1.2;
      margin-top: 0.1rem;
      margin-bottom: 0.3rem;
      font-family: var(--font-secondary);
    }

    &__intro {
      font-size: 1.6rem;
      color: var(--color-gray-800);
    }

    &__svg {
      display: none;
    }

    &__links {
      margin-top: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;

      a {
        &:first-child {
          margin-right: 2rem;
        }
      }
    }
  }

  @media screen and (min-width: 481px) {
  }

  @media screen and (min-width: 769px) {
    min-height: 100vh;
    display: flex;
    padding: 0;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 0;
      padding-bottom: 0;
    }

    .header {
      &__content {
        flex: 3;
      }
      &__svg {
        flex: 2;
        display: block;
        width: 100%;
        max-width: 40rem;
      }
    }
    .image {
      transform: scale(2);
      transition: transform 0.2s ease-in;
    }

    .image__foreground {
      transform-origin: 50% 50%;
      transform: translateY(4px) scale(1, 1);
      transition: transform 0.2s ease-in;
    }

    .image:hover {
      transform: scale(2.15);
    }
    .image:hover .image__foreground {
      transform: translateY(-3px) scale(1.04);
    }
  }
`;

export const MainPage = styled.main`
  margin-top: 5rem;

  @media screen and (min-width: 481px) {
  }
`;

export const StyledSubSection = styled.section`
  margin-bottom: 5rem;

  h3 {
    text-align: left;
    font-size: 2.1rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    opacity: 0.8;
  }
`;
