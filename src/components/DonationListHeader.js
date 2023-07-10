import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: beige;
  /* justify-content: space-between; */
  /* padding: 1%; */
  width: 100%;
  margin: 5%;
  margin-left: 0;
`;
const Title = styled.div`
  margin: auto;
  padding: 1%;
  /* width: 60%; */
  text-align: left;
  font-weight: bold;
  font-size: 170%;
  color: rgb(210, 180, 140);
  /* color: rgb(234, 189, 74); */
`;

const DonationListHeader = () => {
  return (
    <Container>
      <Title>YOUR DONATIONS</Title>
    </Container>
  );
};

export default DonationListHeader;
