import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  /* display: flex; */

  /* padding: 0.5%; */
  width: 100%;
  margin: auto;
  margin-right: 1%;

  /* flex-direction: column; */
`;
const TitleContainer = styled.div`
  width: 100%;
  float: center;
  /* background-color: rgba(255, 228, 196, 0.839); */
  background-color: beige;
  text-align: left;
  display: flex;
  justify-content: space-evenly;
  padding: 1%;
  margin: auto;
`;

const Title = styled.div`
  margin: auto;
  /* padding: 2%; */

  font-weight: bold;
  font-size: 170%;
  color: rgb(210, 180, 140);
`;

const StyledSearch = styled(Autocomplete)`
  & .MuiInputBase-input & .MuiAutocomplete-listbox {
    /* height: fit-content; */
    text-align: center;
    /* display: flex; */
  }
`;

const ButtonContainer = styled.div`
  margin: auto;
  /* /* margin-left: 2%; */
  margin-top: 2%;
`;
const StyledButton = styled(Button)`
  /* width: 66%; */
`;

// Styling for MUI colour palette
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(240,215,0)",
      darker: "#053e85",
    },
  },
});

// End of styled components
const InventoryListHeader = (props) => {
  const inventories = props.list;
  const onSearch = props.onSearch;

  // Function to handle search input
  const handleInput = (e) => {
    console.log(e.target.value);
    onSearch(e.target.value);
  };

  console.log(inventories);

  const navigate = useNavigate();
  const navigateForm = () => {
    navigate("/form");
  };

  return (
    <Container>
      <TitleContainer>
        {" "}
        <Title>INVENTORY LIST</Title>
      </TitleContainer>
      <ButtonContainer>
        <ThemeProvider theme={theme}>
          <StyledButton
            variant="contained"
            disableElevation
            sx={{ fontSize: 22 }}
            onClick={navigateForm}
          >
            Add Inventory Item
          </StyledButton>
        </ThemeProvider>
      </ButtonContainer>
      <StyledSearch
        disablePortal
        id="combo-box-demo"
        freeSolo
        options={inventories}
        getOptionLabel={(option) => option.itemName}
        sx={{ width: "30%", paddingTop: "1%" }}
        renderInput={(params) => <TextField {...params} label="Search" />}
        onSelect={handleInput}
      />
    </Container>
  );
};

export default InventoryListHeader;
