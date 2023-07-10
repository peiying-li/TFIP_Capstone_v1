import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  /* display: flex; */
  align-items: center;
  /* justify-content: space-around; */
  flex: 1;
`;
const Title = styled.div`
  width: 50%;

  background-color: rgb(210, 180, 140);
  color: white;
  font-size: 40px;

  margin: auto;
  margin-top: 3%;

  padding: 1%;
`;
const FormContainer = styled.div`
  width: 80%;
  /* float: bottom; */

  margin: auto;
  margin-top: 3%;
  margin-bottom: 5%;
  border: solid;
`;

const InnerContainer = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 1%;
  padding-bottom: 20px;
`;

const ReturnButtonContainer = styled.span`
  float: left;
`;

const StyledReturnButton = styled(Button)``;

const InventoryForm = () => {
  const [itemName, setItemName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [catId, setCatId] = useState("");
  const [ageGrpId, setAgeGrpId] = useState("");
  const [itemData, setItemData] = useState("");

  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate("/profile");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = {
      itemName: itemName,
      brand: brand,
      description: description,
      catId: catId,
      ageGrpId: ageGrpId,
    };

    await axios
      .post("http://localhost:8080/addNewInventoryItem", itemData)
      .then(
        setItemName(""),
        setBrand(""),
        setDescription(""),
        setCatId(""),
        setAgeGrpId("")
      )
      .catch((error) => {
        console.log(error.response.data);
      });
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

  return (
    <Container>
      <Title>INVENTORY FORM</Title>

      <FormContainer>
        <InnerContainer>
          {" "}
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              label="Item Name"
              // defaultValue="Default Value"
              required
              variant="outlined"
              color="secondary"
              fullWidth
              margin="normal"
              onChange={(e) => setItemName(e.target.value)}
              value={itemName}

              // error={emailError}
            />
            <TextField
              label="Brand"
              required
              variant="outlined"
              color="secondary"
              fullWidth
              margin="normal"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
            />
            <TextField
              id="standard-multiline-static"
              label="Item Description"
              multiline
              rows={4}
              // defaultValue="Default Value"
              required
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
              required
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
              required
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
            <Button variant="outlined" color="secondary" type="submit">
              ADD / UPDATE
            </Button>
          </form>
          <ReturnButtonContainer>
            <StyledReturnButton variant="outlined" onClick={navigateProfile}>
              Go Back
            </StyledReturnButton>
          </ReturnButtonContainer>
        </InnerContainer>
      </FormContainer>
    </Container>
  );
};

export default InventoryForm;
