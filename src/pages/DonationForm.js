import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const Container = styled.div`
  border: solid 2px;
  margin: auto;
  margin-top: 10%;
  padding: 3%;
  width: 80%;
  /* display: flex;
  justify-content: space-evenly; */
`;

const Title = styled.div`
  width: 60%;
  background-color: bisque;
  color: white;
  font-size: 30px;

  margin: auto;
  margin-top: 3%;
  margin-bottom: 2%;

  padding: 1%;
`;

const FormContainer = styled.div`
  /* background-color: bisque; */
`;

const ButtonContainer = styled.div`
  background-color: white;
  float: right;
  width: max-content;
`;

const StyledSubmitButton = styled(Button)``;

// Styling for MUI colour palette
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9800",
      darker: "#b26a00",
    },
  },
});

const DonationForm = ({ item }) => {
  const params = useParams();
  const [itemConditionId, setitemConditionId] = useState("");
  const navigate = useNavigate();

  // Function to Donate
  const donateItem = async (itemConditionId) => {
    await axios
      .put(`http://localhost:8080/moveItemToDonations`, null, {
        params: {
          id: params.itemId,
          itemConditionId: itemConditionId,
        },
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleChange = (e) => {
    setitemConditionId(e.target.value);
  };

  const navigateProfile = () => {
    navigate("/profile");
  };

  return (
    <Container>
      <Title>CONDITION</Title>
      <FormContainer>
        <FormControl>
          {/* <FormLabel id="demo-radio-buttons-group-label">Condition</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="1"
            name="radio-buttons-group"
            value={itemConditionId}
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Brand New, Never Used"
              onChange={handleChange}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Barely Used"
              onChange={handleChange}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Used"
              onChange={handleChange}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="Poor"
              onChange={handleChange}
            />
          </RadioGroup>
          <ButtonContainer>
            <ThemeProvider theme={theme}>
              <StyledSubmitButton
                variant="outlined"
                onClick={(e) => {
                  donateItem(itemConditionId, e);
                  alert("Donated");
                  navigateProfile();
                }}
              >
                Submit
              </StyledSubmitButton>
            </ThemeProvider>
          </ButtonContainer>
        </FormControl>
      </FormContainer>
    </Container>
  );
};

export default DonationForm;
