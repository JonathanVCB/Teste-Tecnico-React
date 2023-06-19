import styled from "styled-components";

export const SectionModal = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const DivContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--Grey-3);
  padding: 1rem;
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1300px) {
    width: 45%;
  }
  @media (min-width: 1500px) {
    width: 40%;
  }
`;

export const HeaderModal = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Grey-2);
  padding: 0.7rem;

  > h6 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--Grey-0);
  }
  > button {
    background-color: var(--Grey-2);
    color: var(--Grey-1);
    border: none;
  }
  > button:hover {
    transform: scale(1.5);
    color: var(--Negative);
  }
`;

export const DivDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > p {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--Grey-0);
  }
`;
