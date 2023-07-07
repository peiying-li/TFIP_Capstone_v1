import { styled } from "styled-components";

const Container = styled.div``;
const Title = styled.div`
  background-color: bisque;

  margin-left: 2%;
  margin-right: 2%;
  padding: 1%;
  text-align: left;
`;

const DonationListHeader = () => {
  return (
    <Container>
      <Title>YOUR DONATIONS</Title>
    </Container>
  );
};

export default DonationListHeader;
