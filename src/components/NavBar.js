import { NavLink, Link } from "react-router-dom";
// import "../styles/NavBar.css";
import { styled } from "styled-components";

import { useLocation } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  background-color: rgba(255, 228, 196, 0.839);
`;
const LinkContainer = styled.div`
  width: 40%;
  font-size: 150%;
  font-weight: bold;
  margin: auto;
  padding: 0.8%;
`;
const StyledLink = styled(Link)`
  /* color: white; */
  color: rgb(210, 180, 140);
  padding: 1%;
  text-decoration: none;

  &:hover {
    color: whitesmoke;
  }
`;
const ListContainer = styled.div``;

const StyledNavLink = styled(NavLink)`
  color: rgb(210, 180, 140);
  padding: 3%;
  text-decoration: none;
  font-size: 120%;
  &:hover {
    color: whitesmoke;
  }
`;

const NavBar = () => {
  // const location = useLocation();
  // if (
  //   location.pathname === "/homepage"
  //   // location.pathname === "/profile" ||
  //   // location.pathname === "/form" ||
  //   // location.pathname === "/donationform" ||
  //   // location.pathname === "/updateform/:itemId"
  // ) {
  //   return null;
  // }
  return (
    <Container>
      <LinkContainer>
        <StyledLink to="/homepage">MARKETPLACE FOR MOTHERS</StyledLink>
      </LinkContainer>
      <ListContainer>
        <ul>
          <StyledNavLink to="/Clothings">Clothings</StyledNavLink>
          <StyledNavLink to="/Outdoors">Outdoors</StyledNavLink>
          <StyledNavLink to="/Nursery">Nursery</StyledNavLink>
          <StyledNavLink to="/Books">Books</StyledNavLink>
        </ul>
      </ListContainer>
    </Container>
  );
};

// return (
//     <nav className="navBar">
//       <div>
//         <Link to="/homepage">MARKETPLACE FOR MOTHERS</Link>
//       </div>

//       <ul>
//         <NavLink to="/Clothings">Clothings</NavLink>
//         <NavLink to="/Outdoors">Outdoors</NavLink>
//         <NavLink to="/Nursery">Nursery</NavLink>
//         <NavLink to="/Books">Books</NavLink>
//       </ul>
//     </nav>
//   );
// };

export default NavBar;
