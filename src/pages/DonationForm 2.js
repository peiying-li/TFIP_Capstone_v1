import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  border: solid;
  margin: 2%;
  padding: 3%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSubmitButton = styled(Button)``;

const DonationForm = ({ item }) => {
  const [itemConditionId, setitemConditionId] = useState("");

  // Function to Donate
  const donateItem = async () => {
    let id = item.itemId;

    await axios
      .put(`http://localhost:8080/moveItemToDonations`, {
        params: {
          id,
          itemConditionId,
        },
      })
      .then((response) => {
        setitemConditionId(response.data);
      });
  };

  return (
    <Container>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="1"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Brand New, Never Used"
          />
          <FormControlLabel value="2" control={<Radio />} label="Barely Used" />
          <FormControlLabel value="3" control={<Radio />} label="Used" />
          <FormControlLabel value="4" control={<Radio />} label="Poor" />
        </RadioGroup>
      </FormControl>
      <StyledSubmitButton variant="outlined">Donate</StyledSubmitButton>
    </Container>
  );
};

export default DonationForm;
