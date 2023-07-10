import styled from "styled-components";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const Container = styled.div`
  border: solid 1px;
  margin: auto;
  margin-top: 10%;
  padding: 3%;
  width: 80%;
  /* background-color: pink; */
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
  width: 80%;
  /* float: bottom; */

  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  /* border: solid 1px; */
`;

const InnerContainer = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 4%;
  padding-bottom: 2px;
`;

const ReturnButtonContainer = styled.div``;
const StyledReturnButton = styled(Button)``;
// Styling for MUI colour palette
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9800",
      darker: "#b26a00",
    },
  },
});
const theme1 = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      darker: "#b26a00",
    },
  },
});
const UpdateForm = ({ item }) => {
  const params = useParams();

  const [description, setDescription] = useState("");
  const [catId, setCatId] = useState("");
  const [ageGrpId, setAgeGrpId] = useState("");

  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate("../profile");
  };

  const categories = [
    {
      catId: 1,
      catName: "Clothings",
    },
    {
      catId: 2,
      catName: "Outdoors",
    },
    {
      catId: 3,
      catName: "Nursery",
    },
    {
      catId: 4,
      catName: "Books",
    },
  ];

  const ageGroups = [
    {
      ageGrpId: 1,
      ageGrpName: "Infant",
    },
    {
      ageGrpId: 2,
      ageGrpName: "Toddler",
    },
    {
      ageGrpId: 3,
      ageGrpName: "Preschool",
    },
  ];

  // Function to get inventory object based on item id and set remaining values not part of form
  const updateItem = async () => {
    await axios
      .put(`http://localhost:8080/updateInventoryItem`, null, {
        params: {
          id: params.itemId,
          description: description,
          catId: catId,
          ageGrpId: ageGrpId,
        },
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <Container>
      <Title>UPDATE INVENTORY FORM</Title>

      <FormContainer>
        <InnerContainer>
          {" "}
          <form autoComplete="off" onSubmit={updateItem}>
            <TextField
              id="standard-multiline-static"
              label="Item Description"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <TextField
              id="type-category-dropdown"
              select
              label="Category"
              fullWidth
              margin="normal"
              helperText="Please select a category for your item"
              value={catId}
              onChange={(e) => setCatId(e.target.value)}
            >
              {categories.map((option) => (
                <MenuItem key={option.catId} value={option.catId}>
                  {option.catName}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="age-category-dropdown"
              select
              label="Most suitable age group"
              fullWidth
              margin="normal"
              helperText="Please select the most suitable age group"
              value={ageGrpId}
              onChange={(e) => setAgeGrpId(e.target.value)}
            >
              {ageGroups.map((option) => (
                <MenuItem key={option.ageGrpId} value={option.ageGrpId}>
                  {option.ageGrpName}
                </MenuItem>
              ))}
            </TextField>
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                disableElevation
                color="primary"
                type="submit"
              >
                UPDATE
              </Button>
            </ThemeProvider>
          </form>
        </InnerContainer>
      </FormContainer>
      <ReturnButtonContainer>
        <ThemeProvider theme={theme1}>
          <StyledReturnButton
            variant="outlined"
            onClick={(e) => {
              navigateProfile();
            }}
          >
            Return
          </StyledReturnButton>
        </ThemeProvider>
      </ReturnButtonContainer>
    </Container>
  );
};

export default UpdateForm;
