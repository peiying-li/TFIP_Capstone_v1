import InfantHomeLogo from "../assets/infantHome.jpg";
import GirlHomeLogo from "../assets/girlHome.png";
import ToddlerHomeLogo from "../assets/toddlerHome.jpg";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const HeaderContainer = styled.div`
  text-align: center;
  width: 100%;
  background-color: bisque;
  margin-top: 2%;
`;
const Header = styled.h1`
  color: #e17314;
  font-weight: normal;
  font-family: "futura";
`;

const NavContainer = styled.div`
  /* position: absolute;
  /* display: flex; */
  width: 30%;
  height: 300px;
  left: 3%;
  top: 150px;
  background-color: white;
  align-content: center;
  align-items: center;
  float: left;
`;

const NavHeader = styled.h2`
  /* /* position: absolute; */
  /* top: 0; */
  width: 80%;
  height: 50px;
  background-color: rgb(234, 193, 138);
  color: white;
  text-align: center;
  padding-top: 5%;
  margin: auto;
`;
const UnOrderedList = styled.div`
  display: inline;
  list-style-type: none;
  text-align: center;
`;

const ListItem = styled.li`
  border-bottom: 1px solid black;
  width: 25%;
  padding: 20px;
  text-decoration: none;
  margin: auto;
`;
const StyledLink = styled(Link)`
  color: black;
`;

const AgeCategories = styled.div`
  display: flex;
  width: 100%;
  /* background-color: black; */
  justify-content: space-evenly;
  padding-top: 1%;
  text-align: center;

  /* height: 100px; */
`;

const SingleCategory = styled.span`
  /* flex: 1; */
  /* flex-direction: column; */
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

      <AgeCategories>
        <SingleCategory>
          <Link to="/Infant">
            <Image src={InfantHomeLogo} alt="infantHomeLogo" />
          </Link>
          <Link to="/Infant">
            <ImageText>Infant</ImageText>
          </Link>
        </SingleCategory>
        <SingleCategory>
          <Link to="/Toddler">
            <Image src={GirlHomeLogo} alt="girlHomeLogo" />
          </Link>
          <Link to="/Toddler">
            <ImageText>Toddler</ImageText>
          </Link>
        </SingleCategory>
        <SingleCategory>
          <Link to="/Preschool">
            <Image src={ToddlerHomeLogo} alt="toddlerHomeLogo" />
          </Link>
          <Link to="/Preschool">
            <ImageText>Preschool</ImageText>
          </Link>
        </SingleCategory>
      </AgeCategories>
    </Container>
    // Include slider pictures here
  );
}

export default Homepage;
