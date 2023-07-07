import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import outdoorsImg from "../assets/outdoors3Cat.jpg";
import nurseryImg from "../assets/clothing2Cat.jpg";
import booksImg from "../assets/books2Cat.jpg";
import clothingImg from "../assets/nursery1Cat.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Button from "@mui/material/Button";

const Container = styled.div`
  background-color: beige;
  margin: 2.5%;
  display: flex;
  justify-content: space-between;
`;

const DetailContainer = styled.div`
  width: 60%;
  border-left: solid beige 5px;
`;

const DetailsText = styled.div`
  /* padding: 1%; */
  margin: 1%;
  color: brown;
`;

const ButtonsContainer = styled.div`
  width: 40%;
  float: right;
  background-color: beige;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-left: solid white 3px;
`;

const StyledButton = styled(Button)``;

const DonateContainer = styled.div`
  border-left: solid white 3px;
  display: flex;
  justify-content: space-around;
`;

const StyledDonateButton = styled(Button)`
  width: 33%;
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

  // const imageSrc = item.catImage;
  // console.log(imageSrc);

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
  // Function to handle Donate button
  var link = "/donationform/" + item.itemId;
  // const initial_state = () => {
  //   if (item.itemCondition != null) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const handleButton = () => {
    if (item.itemCondition != null) {
      setIsClicked(true);
    } else {
      navigate(link);
    }
  };

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
        <StyledDonateButton
          disabled={isClicked}
          onClick={(e) => {
            handleButton();
          }}
        >
          Donate
        </StyledDonateButton>
      </DonateContainer>
      <ButtonsContainer>
        <StyledButton onClick={navigateForm}>Edit</StyledButton>

        <StyledButton onClick={(e) => deleteItem(item.id, e)}>
          Delete
        </StyledButton>
      </ButtonsContainer>
    </Container>
  );
};

export default InventoryItem;
