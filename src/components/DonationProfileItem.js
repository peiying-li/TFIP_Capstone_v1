import styled from "styled-components";
import Button from "@mui/material/Button";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import outdoorsImg from "../assets/outdoors3Cat.jpg";
import nurseryImg from "../assets/clothing2Cat.jpg";
import booksImg from "../assets/books2Cat.jpg";
import clothingImg from "../assets/nursery1Cat.jpg";

const Container = styled.div`
  background-color: bisque;
  margin: 2.5%;
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  float: left;
  width: 15%;
  border-right: solid white 3px;
  /* display: flex;
  justify-content: space-around; */
`;
const CatImage = styled.img`
  width: 100%;
  height: 100%;
  border: solid 0.5px black;
`;

const DetailContainer = styled.div`
  width: 60%;
  border-left: solid bisque 5px;
`;

const DetailsText = styled.div`
  /* padding: 1%; */
  margin: 1%;
  color: brown;
`;
const StatusContainer = styled.div`
  border-left: solid white 3px;
  display: flex;
  justify-content: space-around;
`;
const StyledReservedStatus = styled(Button)``;

const ButtonsContainer = styled.div`
  width: 40%;
  float: right;
  background-color: bisque;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-left: solid white 3px;
`;

const StyledButton = styled(Button)`
  height: fit-content;
`;

const DonationProfileItem = ({ item }) => {
  const [inventory, setInventory] = useState([]);
  const [catImage, setcatImage] = useState([clothingImg]);
  const [loading, setLoading] = useState(true);
  const [reservationStatus, setreservationStatus] = useState(true);

  const navigate = useNavigate();
  var link = "/donationform/" + item.itemId;
  const navigateDonationForm = () => {
    navigate(link);
  };

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

  // Function to Delete Inventory Items
  const deleteItem = async (id) => {
    id = item.itemId;
    console.log(id);
    await axios
      .delete(`http://localhost:8080/deleteInventoryItem/${id}`)
      .then((response) => {
        setInventory(response.data);
        setLoading(false);
      });
  };

  return (
    <Container>
      <ImageContainer>
        <CatImage src={catImage} alt="Image" />
      </ImageContainer>

      <DetailContainer>
        Item:
        <DetailsText> {item.itemName}</DetailsText>
        Brand:
        <DetailsText> {item.brand}</DetailsText>
        Condition:
        <DetailsText> {item.itemCondition}</DetailsText>
      </DetailContainer>
      {/* TODO: FIX THIS */}
      <StatusContainer>
        <StyledReservedStatus variant="standard" disabled="true">
          STATUS{item.isReserved}
        </StyledReservedStatus>
      </StatusContainer>
      <ButtonsContainer>
        <StyledButton onClick={navigateDonationForm}>Edit</StyledButton>
        <StyledButton onClick={(e) => deleteItem(item.id, e)}>
          Delete
        </StyledButton>
      </ButtonsContainer>
    </Container>
  );
};

export default DonationProfileItem;
