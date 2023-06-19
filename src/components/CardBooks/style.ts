import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Grey-4);
  padding: 1rem;
  cursor: pointer;
  > h5 {
    font-size: 0.938rem;
    font-weight: 700;
    color: var(--Grey-0);
  }
`;

export const DivDelete = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    font-size: 0.761rem;
    font-weight: 400;
    color: var(--Grey-1);
  }
  > img {
    object-fit: contain;
    cursor: pointer;
    transition: 0.7s;
  }
  > img:hover {
    transform: scale(1.5);
  }
  > img {
    width: 15px;
  }

  @media (min-width: 500px) {
    width: 30%;
  }
  @media (min-width: 800px) {
    width: 15%;
  }
  @media (min-width: 1024px) {
    width: 22%;
  }
  @media (min-width: 1300px) {
    width: 15%;
  }
`;
