import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import outdoorsImg from "../assets/outdoors3Cat.jpg";
import clothingImg from "../assets/clothing2Cat.jpg";
import booksImg from "../assets/books2Cat.jpg";
import nurseryImg from "../assets/nursery1Cat.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Container = styled.div`
  background-color: beige;
  margin: 1%;
  /* margin-left: 7%; */
  /* margin-right: 7%; */
  display: flex;
  width: 48%;
  /* justify-content: space-between; */
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

const ButtonsContainer = styled.div`
  width: 30%;
  float: right;
  background-color: beige;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-left: solid white 3px;
`;

const StyledButton = styled(Button)``;

const DonateContainer = styled.div`
  width: 20%;
  border-left: solid white 3px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const StyledDonateButton = styled(Button)`
  width: 100%;
`;

const ImageContainer = styled.div`
  float: left;
  width: 15%;
  border-right: solid white 3px;
`;
const CatImage = styled.img`
  width: 100%;
  height: 100%;
  border: solid 0.5px black;
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

const theme1 = createTheme({
  palette: {
    primary: {
      main: "#388E3C",
      darker: "#053e85",
    },
  },
});

// End of styled components

const InventoryItem = ({ item }) => {
  const [inventory, setInventory] = useState([]);
  const [catImage, setcatImage] = useState([clothingImg]);
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(
    item.itemCondition != null ? true : false
  );
  const navigate = useNavigate();
  const navigateForm = () => {
    navigate("/form");
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
        navigate(0);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  // Function to handle Donate button
  var link = "/donationform/" + item.itemId;

  const handleButton = () => {
    if (item.itemCondition != null) {
      setIsClicked(true);
    } else {
      navigate(link);
    }
  };

  // Function to handle update button
  var updateLink = "/updateform/" + item.itemId;

  return (
    <Container>
      {/* insert category image here based on catId of item */}
      <ImageContainer>
        <CatImage src={catImage} alt="Image" />
      </ImageContainer>

      <DetailContainer>
        <DetailsText>{item.itemName}</DetailsText>
        Brand:
        <DetailsText> {item.brand}</DetailsText>
        Category:
        <DetailsText>
          {item.catName}, {item.ageGrpName}
        </DetailsText>
        {/* add buttons here*/}
      </DetailContainer>
      <DonateContainer>
        <ThemeProvider theme={theme1}>
          {" "}
          <StyledDonateButton
            sx={{ fontSize: "110%" }}
            disabled={isClicked}
            onClick={(e) => {
              handleButton();
            }}
          >
            Donate
          </StyledDonateButton>
        </ThemeProvider>
      </DonateContainer>
      <ButtonsContainer>
        <ThemeProvider theme={theme}>
          <StyledButton onClick={(e) => navigate(updateLink)}>
            Edit
          </StyledButton>
          <StyledButton onClick={(e) => deleteItem(item.id, e)}>
            Delete
          </StyledButton>
        </ThemeProvider>
      </ButtonsContainer>
    </Container>
  );
};

export default InventoryItem;
