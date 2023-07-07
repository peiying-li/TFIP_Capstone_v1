import styled from "styled-components";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  flex: 1;
`;

const Container = styled.div`
  margin: 5px;
  min-width: 280px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  border: 2px solid bisque;
`;

const ViewButton = styled.button`
  width: 90%;
  height: 15%;
  background-color: rgba(255, 228, 196, 0.839);
  position: absolute;
  top: 80%;
  left: 5%;
  text-align: center;
  font-size: 200%;
  opacity: 80%;
  cursor: pointer;
  border: 2px solid white;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Image = styled.img`
  position: absolute;
  height: 75%;
  width: 50%;
  top: 5%;
  z-index: 2;
`;
const DetailContainer = styled.div`
  padding-left: 1%;
`;

const DetailsText = styled.span``;

const DonationItem = ({ item }) => {
  var link = "/donationdetail/" + item.itemId;
  return (
    <MainContainer>
      <Container>
        <Link to={link}>
          {/* Create link for this view button here</Link> */}
          <ViewButton>View Item</ViewButton>
        </Link>
        <Image src={item.imageURL} alt="image" />
      </Container>
      <DetailsText>
        <DetailContainer>Item: {item.itemName}</DetailContainer>
        <DetailContainer>Brand: {item.brand}</DetailContainer>
        <DetailContainer>Condition: {item.itemCondition}</DetailContainer>
      </DetailsText>
      {/* <Routes>
        <Route
          path="/donations/:id"
          render={() => <DonationDetail donationItem={item} />}
        />
      </Routes> */}
    </MainContainer>
  );
};

export default DonationItem;
