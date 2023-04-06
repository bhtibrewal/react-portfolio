import styled from "styled-components";
import { Project } from "../../interface";

export const StyledProject = styled.div`
  margin-bottom: 8rem;

  &:nth-child(even) {
    article {
      flex-direction: row-reverse;
    }
    .project {
      &__details {
        align-items: flex-start;
      }
      &__para {
        margin-right: -2rem;
        margin-left: 0;
      }
    }
  }

  article {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5em;
    color: var(--color-red-100);
  }

  .project {
    &__para {
      margin-bottom: 1rem;
      margin-left: -2rem;
      z-index: 1;
      border-radius: 6px;
      color: var(--fg-primary);
      background: linear-gradient(
        to top left,
        var(--color-red),
        var(--color-red-100)
      );
      padding: 2rem;
      box-shadow: inset 0 -23px 25px 0 rgb(50 50 50 / 17%),
        inset 0 -36px 30px 0 rgb(50 50 50 / 15%),
        inset 0 -79px 40px 0 rgb(50 50 50 / 10%), 0 2px 1px rgb(50 50 50 / 6%),
        0 4px 2px rgb(50 50 50 / 9%), 0 8px 4px rgb(50 50 50 / 9%),
        0 16px 8px rgb(50 50 50 / 9%), 0 32px 16px rgb(50 50 50 / 9%);
    }

    &__details {
      height: 100%;
      align-items: flex-end;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__tech {
      font-size: 1.5em;
    }

    &__links {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-flow: row wrap;

      a {
        font-size: 1.4rem;
        padding: 0.5rem 2rem 0.6rem;
        /* color: var(--color-red-100); */
        position: relative;
        transition: all 0.3s linear;
        background-color: transparent;
        /* text-decoration: underline; */

        &:hover {
          text-decoration: none;
        }

        &:first-child {
          margin-right: 2rem;
        }

        &:nth-child(2) {
          margin-right: auto;
        }
      }

      button {
        padding: 0.7rem 1.8rem 0.9rem;
        font-size: 1.4rem;
        cursor: pointer;
      }

      a,
      button {
        margin-bottom: 2rem;
      }
    }

    &__figures {
      width: 100%;
      position: relative;
      border-radius: 6px;
      overflow: hidden;
    }

    &__btn__bg {
      background: #00000087;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      display: none;
    }

    &__figures:hover .project__btn__bg {
      display: flex;
    }

    &__review {
      transition: all 0.3s linear;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 0;
      opacity: 0;

      &.show {
        height: 70%;
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 420px) {
    article {
      flex-wrap: wrap;
    }
    .project__para {
      margin-left: 0;
      margin-right: 0;
    }
    &:nth-child(even){
      .project__para {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`;
