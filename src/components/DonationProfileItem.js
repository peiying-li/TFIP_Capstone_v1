import styled from "styled-components";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import outdoorsImg from "../assets/outdoors3Cat.jpg";
import nurseryImg from "../assets/clothing2Cat.jpg";
import booksImg from "../assets/books2Cat.jpg";
import clothingImg from "../assets/nursery1Cat.jpg";

const Container = styled.div`
  background-color: beige;
  margin: 1%;

  display: flex;
  width: 48%;
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
  width: 50%;
  border-left: solid beige 5px;
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
const InnerStatusContainer = styled.div`
  margin: auto;
`;
const StyledReservedStatus = styled(Button)`
  color: white;
`;

const ButtonsContainer = styled.div`
  width: 30%;
  float: right;
  background-color: beige;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-left: solid white 3px;
`;

const StyledButton = styled(Button)`
  height: fit-content;
`;

// Styling for MUI colour palette
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(218,165,32)",
      darker: "#053e85",
    },
  },
});

// End of styled components

const DonationProfileItem = ({ item }) => {
  const [inventory, setInventory] = useState([]);
  const [catImage, setcatImage] = useState([clothingImg]);
  const [loading, setLoading] = useState(true);
  const [reservationStatus, setreservationStatus] = useState([]);

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
    statusHandler();
  }, []);

  // Function to Delete Inventory Items
  const deleteItem = async (id) => {
    id = item.itemId;
    console.log(id);
    await axios
      .put(`http://localhost:8080/removeDonation/${id}`, null)
      .then((response) => {
        setInventory(response.data);
        setLoading(false);
        navigate(0);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // Function to handle status of reservation
  const statusHandler = () => {
    if (item.isReserved == 1) {
      setreservationStatus("Reserved");
    } else {
      setreservationStatus("Available");
    }
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

      <StatusContainer>
        <InnerStatusContainer>
          <StyledReservedStatus disabled="true">
            {reservationStatus}
          </StyledReservedStatus>
        </InnerStatusContainer>
      </StatusContainer>
      <ThemeProvider theme={theme}>
        {" "}
        <ButtonsContainer>
          <StyledButton onClick={navigateDonationForm}>
            Update Condition
          </StyledButton>
          <StyledButton onClick={(e) => deleteItem(item.id, e)}>
            Delete
          </StyledButton>
        </ButtonsContainer>
      </ThemeProvider>
    </Container>
  );
};

export default DonationProfileItem;
