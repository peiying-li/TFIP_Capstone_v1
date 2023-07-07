import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const Container = styled.div`
  border: solid;
  margin: 2%;
  padding: 3%;
  width: 80%;
  /* display: flex;
  justify-content: space-evenly; */
`;

const FormContainer = styled.div`
  background-color: bisque;
`;

const ButtonContainer = styled.div`
  background-color: beige;
  float: right;
  width: max-content;
`;

const StyledSubmitButton = styled(Button)``;

const DonationForm = ({ item }) => {
  const params = useParams();
  const [itemConditionId, setitemConditionId] = useState("");
  const navigate = useNavigate();

  // Function to Donate
  const donateItem = async (itemConditionId) => {
    await axios.put(`http://localhost:8080/moveItemToDonations`, null, {
      params: {
        id: params.itemId,
        itemConditionId: itemConditionId,
      },
    });
    //   .then((response) => {
    //     // setitemConditionId(itemConditionId);
    //   });
  };

  const handleChange = (e) => {
    setitemConditionId(e.target.value);
  };

  const navigateProfile = () => {
    navigate("/profile");
  };

  return (
    <Container>
      <FormContainer>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Condition</FormLabel>
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
            <StyledSubmitButton
              variant="outlined"
              onClick={(e) => {
                donateItem(itemConditionId, e);
                alert("Donated");
                navigateProfile();
              }}
            >
              Donate
            </StyledSubmitButton>
          </ButtonContainer>
        </FormControl>
      </FormContainer>
    </Container>
  );
};

export default DonationForm;
