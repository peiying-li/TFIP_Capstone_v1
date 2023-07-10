import InfantHomeLogo from "../assets/infantHome.jpg";
import GirlHomeLogo from "../assets/girlHome.png";
import ToddlerHomeLogo from "../assets/toddlerHome.jpg";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Slider from "../components/Slider";

const Container = styled.div`
  position: relative;
`;
const HeaderContainer = styled.div`
  text-align: center;
  width: 95%;
  /* background-color: #fff2cc; */
  margin: auto;
  margin-top: 3%;
  margin-bottom: 4%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  border: solid 1px;
`;
const Header = styled.h1`
  color: rgb(210, 180, 140);
  font-weight: bold;
`;

const NavContainer = styled.div`
  /* position: absolute;
  /* display: flex; */
  width: 30%;
  height: 400px;
  left: 3%;
  top: 150px;
  margin-right: 1%;
  background-color: white;
  align-content: center;
  align-items: center;
  float: left;
`;

const NavHeader = styled.h2`
  /* /* position: absolute; */
  /* top: 0; */
  width: 80%;
  height: fit-content;
  background-color: rgb(210, 180, 140);
  color: white;
  text-align: center;
  padding: 3%;
  padding-top: 4%;
  padding-bottom: 4%;
  margin: auto;
  margin-left: 9%;
  margin-bottom: 3%;
`;
const UnOrderedList = styled.div`
  display: inline;
  list-style-type: none;
  text-align: center;
`;

const ListItem = styled.li`
  border-bottom: 1px solid black;
  width: 25%;
  padding: 15px;

  text-decoration: none;
  margin: auto;
`;
const StyledLink = styled(Link)`
  color: black;
  font-size: large;
  text-decoration: none;
`;

const AgeCategories = styled.div`
  display: flex;
  width: 100%;
  /* background-color: black; */
  justify-content: space-evenly;
  padding-top: 2%;
  text-align: center;

  /* height: 100px; */
`;

const SingleCategory = styled.span`
  width: 100%;
  padding: 2%;
`;

const Image = styled.img`
  width: 350px;
  height: 300px;
  padding: 1%;
  bottom: 10px;
`;

const ImageText = styled.span`
  /* display: flex; */
  padding: 15%;
  /*color: black; */
`;

function Homepage() {
  return (
    <Container>
      <HeaderContainer>
        <Header>MARKETPLACE FOR MOTHERS</Header>
      </HeaderContainer>

      <NavContainer>
        <NavHeader>Shop by category</NavHeader>
        <UnOrderedList>
          <ListItem>
            <StyledLink to="/Clothings">Clothings</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/Outdoors">Outdoors</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/Nursery">Nursery</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/Books">Books</StyledLink>
          </ListItem>
        </UnOrderedList>
      </NavContainer>

      <Slider />

      <AgeCategories>
        <SingleCategory>
          <Link to="/Infant">
            <Image src={InfantHomeLogo} alt="infantHomeLogo" />
          </Link>
          <StyledLink to="/Infant">
            <ImageText>Infant</ImageText>
          </StyledLink>
        </SingleCategory>
        <SingleCategory>
          <Link to="/Toddler">
            <Image src={GirlHomeLogo} alt="girlHomeLogo" />
          </Link>
          <StyledLink to="/Toddler">
            <ImageText>Toddler</ImageText>
          </StyledLink>
        </SingleCategory>
        <SingleCategory>
          <Link to="/Preschool">
            <Image src={ToddlerHomeLogo} alt="toddlerHomeLogo" />
          </Link>
          <StyledLink to="/Preschool">
            <ImageText>Preschool</ImageText>
          </StyledLink>
        </SingleCategory>
      </AgeCategories>
    </Container>
    // Include slider pictures here
  );
}

export default Homepage;
