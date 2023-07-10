import styled from "styled-components";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import { orange } from "@mui/material/colors";

import bgImg from "../assets/stock4.jpg";
const Container = styled.div`
  background-image: url(${bgImg});
  /* background-color: rgba(255, 228, 196, 0.839); */
  background-size: cover;
  background-position: 50% 50%;
  opacity: 0.9;
`;
const InnerContainer = styled.div`
  display: flex;
  /* background-color: bisque; */
`;
const Title = styled.div`
  width: 50%;

  background-color: white;

  color: rgb(210, 180, 140);
  font-size: 40px;

  margin: auto;
  /* margin-top: 5%; */

  padding: 1%;
  border: solid 5px;
`;
const FormContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;

  margin: auto;
  margin-top: 10%;
  margin-bottom: 25%;
  border: solid rgb(210, 180, 140) 5px;

  background-color: white;

  /* color: bisque; */
`;

const ButtonContainer = styled.div`
  margin: 20%;
`;

// Styling for MUI colour palette
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(210, 180, 140)",
      darker: "#053e85",
    },
  },
});

const User = () => {
  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate("/profile");
  };
  const navigateHomepage = () => {
    navigate("/homepage");
  };

  return (
    <Container>
      <Title>ACCOUNT TYPE</Title>
      <InnerContainer>
        {" "}
        <FormContainer>
          <ButtonContainer>
            {" "}
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                // disableElevation
                sx={{ fontSize: 40 }}
                onClick={navigateProfile}
              >
                DONOR
              </Button>
            </ThemeProvider>
          </ButtonContainer>
        </FormContainer>
        <FormContainer>
          <ButtonContainer>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                // disableElevation
                sx={{ fontSize: 40 }}
                onClick={navigateHomepage}
              >
                SHOPPER
              </Button>
            </ThemeProvider>
          </ButtonContainer>
        </FormContainer>
      </InnerContainer>
    </Container>
  );
};

export default User;
