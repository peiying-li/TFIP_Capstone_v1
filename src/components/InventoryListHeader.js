import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: beige;
  justify-content: space-evenly;
`;

const Title = styled.div`
  background-color: beige;
  text-align: left;
`;

const StyledSearch = styled(Autocomplete)`
  & .MuiInputBase-input & .MuiAutocomplete-listbox {
    height: fit-content;
    text-align: center;
    margin: auto;
    font-size: medium;
  }
`;

const ButtonContainer = styled.div`
  float: center;
`;
const StyledButton = styled(Button)`
  width: 66%;
`;

const InventoryListHeader = (props) => {
  const inventories = props.list;
  console.log(inventories);

  const navigate = useNavigate();
  const navigateForm = () => {
    navigate("/form");
  };

  return (
    <Container>
      <Title>INVENTORY LIST</Title>

      <StyledSearch
        disablePortal
        id="combo-box-demo"
        freeSolo
        options={inventories}
        getOptionLabel={(option) => option.itemName}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
      <ButtonContainer>
        <StyledButton variant="outlined" onClick={navigateForm}>
          Add
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default InventoryListHeader;
