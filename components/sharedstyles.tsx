import styled from "styled-components";

const Container = styled.div`
  padding: 0 0.5rem;
  background-color: #f4f4f4;
  min-height: 100vh;
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  color: black;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
`;

const ListContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  place-items: center;
  background-color: #fcf0ac;
  width: 50vw;
  min-width: 350px;
  max-width: 500px;
  margin-inline: auto;
  border-radius: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.2rem;

  a {
    border-radius: 10px;
    padding: 1rem 0.5rem;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;
    margin-inline: auto;

    :hover {
      background-color: white;
    }
  }
`;

const Heading2 = styled.h2`
  text-align: center;
`;

const Data = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: space-evenly;
`;

const SignupDate = styled.span`
  font-weight: 500;
  font-size: 0.7rem;
`;

export {
  Container,
  Main,
  Title,
  List,
  Heading2,
  Data,
  SignupDate,
  ListContainer
};
