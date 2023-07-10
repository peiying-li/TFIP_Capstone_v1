import styled from "styled-components";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import NavBar from "../components/NavBar";

import outdoorsImg from "../assets/outdoors3Cat.jpg";
import nurseryImg from "../assets/nursery1Cat.jpg";
import booksImg from "../assets/books2Cat.jpg";
import clothingImg from "../assets/clothing2Cat.jpg";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  /* flex: 1; */
  border: solid 0.5px;
  width: 40%;
  height: 450px;
`;
const Image = styled.img`
  width: 100%;

  /* height: 50vh; */
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  width: 40%;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Brand = styled.div``;
const Condition = styled.div``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const ButtonContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 5%;
  /* display: flex; */
  /* align-items: center; */
  justify-content: space-between;
`;
const StyledButton = styled(Button)`
  /* padding: 15px; */
  /* border: 2px solid white; */
  /* background-color: bisque; */
  /* cursor: pointer; */
  /* font-weight: 500; */
  &:hover {
    background-color: #f8f4f4;
  }
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

const DonationDetail = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  const [catImage, setcatImage] = useState([]);
  const [catId, setcatId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(
    item.isReserved == 1 ? true : false
  );
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getItem();
    changeImageSrc();
  }, [catId]);

  // Function to show specific item
  const getItem = async () => {
    await axios
      .get(`http://localhost:8080/itemsById/${params.itemId}`)
      .then((response) => {
        setItem(response.data);
        setLoading(false);
        setcatId(item.catId);

        console.log(item.catId);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // Function to change the image source
  const changeImageSrc = () => {
    if (catId == 1) {
      setcatImage(clothingImg);
    } else if (catId == 2) {
      setcatImage(outdoorsImg);
    }
    if (catId == 3) {
      setcatImage(nurseryImg);
    }
    if (catId == 4) {
      setcatImage(booksImg);
    }
  };

  // Function to reserve
  const reserveItem = async () => {
    await axios
      .put(`http://localhost:8080/reserveDonation/${params.itemId}`, null)
      .then(handleButton())
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleButton = () => {
    if (item.isReserved == 1) {
      setIsClicked(true);
    }
    navigate(-1);
  };

  return (
    <Container>
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image src={catImage} alt="image" />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.itemName}</Title>
          <Brand>Brand: {item.brand}</Brand>
          <Condition>Item Condition: {item.itemCondition}</Condition>
          <Desc>{item.description}</Desc>
          <ButtonContainer>
            <ThemeProvider theme={theme}>
              <StyledButton
                variant="contained"
                sx={{ fontSize: 20 }}
                disabled={isClicked}
                onClick={(e) => {
                  reserveItem(e);
                  alert("Reserved");
                }}
              >
                RESERVE
              </StyledButton>
            </ThemeProvider>
          </ButtonContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default DonationDetail;
