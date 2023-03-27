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
        margin: auto;
      }
    }

    &__header {
      &-main {
        margin-bottom: 4rem;
        text-align: left;
        display: flex;
        align-items: center;
        gap: 1rem;
        &-count {
          color: red;
        }
        &-head {
          position: relative;
          width: max-content;
          margin-bottom: 1rem;

          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 50%;
            left: 100%;
            height: 1px;
            min-width: 100%;
            opacity: 50%;
            max-width: 300px;
            margin-left: 10px;
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
  .experience_details {
    margin-left: 2rem;
    li {
      margin-top: 1rem;
      opacity: 0.8;
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
