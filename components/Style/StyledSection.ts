import styled from "styled-components";

export const StyledSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  scroll-margin-top: 8rem;

  .section {
    &__content {
      display: grid;
      grid-template-columns: 1fr;

      &-about {
        max-width: 46rem;

        button {
          margin-top: 2rem;
        }
      }

      &-skills {
      }
    }

    &__header {
      &-main {
        margin-bottom: 5.4rem;
        text-align: center;

        &-head {
          position: relative;
          width: max-content;
          margin: 0 auto 1rem;

          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: -0.2rem;
            left: 0;
            right: 0;
            height: 0.1rem;
            width: 45%;
            margin-right: auto;
            margin-left: auto;
            background-color: red;
          }
        }

        p {
          font-size: 1.5rem;
          color: var(--color-gray-600);
          max-width: 70rem;
          margin-right: auto;
          margin-left: auto;
        }
      }
    }

    &__project {
      &-others {
        /* background-color: #f555; */
        max-width: 53rem;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  @media screen and (min-width: 481px) {
    .section {
      &__content {
      }
    }
  }

  @media screen and (min-width: 769px) {
    .section {
      &__content {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
      }
      &__project {
        &-others {
          max-width: 85rem;
        }
      }
    }
  }
`;