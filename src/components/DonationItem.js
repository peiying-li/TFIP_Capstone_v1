import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import outdoorsImg from "../assets/outdoors3Cat.jpg";
import clothingImg from "../assets/clothing2Cat.jpg";
import booksImg from "../assets/books2Cat.jpg";
import nurseryImg from "../assets/nursery1Cat.jpg";

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
  width: 80%;
  height: 15%;
  background-color: rgba(255, 228, 196, 0.839);
  margin: auto;
  position: absolute;
  top: 80%;
  left: 10%;
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
  const [catImage, setcatImage] = useState([]);

  // Function to change the image source
  const changeImageSrc = () => {
    if (item.catId == 1) {
      setcatImage(clothingImg);
    } else if (item.catId == 2) {
      setcatImage(outdoorsImg);
    }
    if (item.catId == 3) {
      setcatImage(nurseryImg);
    }
    if (item.catId == 4) {
      setcatImage(booksImg);
    }
  };

  useEffect(() => {
    changeImageSrc();
  }, []);

  return (
    <MainContainer>
      <Container>
        <Link to={link}>
          {/* Create link for this view button here</Link> */}
          <ViewButton>View Item</ViewButton>
        </Link>
        <Image src={catImage} alt="image" />
      </Container>
      <DetailsText>
        <DetailContainer>Item: {item.itemName}</DetailContainer>
        <DetailContainer>Brand: {item.brand}</DetailContainer>
        <DetailContainer>Condition: {item.itemCondition}</DetailContainer>
      </DetailsText>
    </MainContainer>
  );
};

export default DonationItem;
