import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Donations from "../components/Donations";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../components/NavBar";

const Container = styled.div`
  position: relative;
`;
const CategoryHeader = styled.div`
  position: relative;
  width: 40%;
  align-items: center;
  left: 30%;
`;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
  background-color: rgb(210, 180, 140);
  height: 50px;
  padding-top: 12px;
  color: white;
`;

const CategoryTemplate = () => {
  const params = useParams();
  const [catId, setcatId] = useState([]);
  const [ageGrpId, setAgeGrpId] = useState([]);
  const [donations, setDonations] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  let catName = params.categoryname;

  //get axios here for catID of passed in catName

  useEffect(() => {
    setLoading(true);
    if (
      catName === "Clothings" ||
      catName === "Outdoors" ||
      catName === "Nursery" ||
      catName === "Books"
    ) {
      console.log("test if go into catID");
      getCatId();
    } else {
      console.log("test if go into agegrpID");
      getAgeGrpId();
    }
  }, [params]);

  const getCatId = async () => {
    await axios
      .get(`http://localhost:8080/catIdFromCatName/${catName}`)
      .then((response) => {
        setcatId(response.data);
        getlist(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getlist = async (data) => {
    console.log(data);

    await axios
      .get(`http://localhost:8080/donationsByTypeCat/${data}`)
      .then((response) => {
        setDonations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });

    // navigate(0);
  };

  /* For AgeGroup Category */
  const getAgeGrpId = async () => {
    await axios
      .get(`http://localhost:8080/ageGrpIdFromAgeGrpName/${catName}`)
      .then((response) => {
        console.log("ageGrpId: " + ageGrpId);
        setAgeGrpId(response.data);
        getAgeGrplist(response.data);
      });
  };

  const getAgeGrplist = async (ageGrpId) => {
    console.log("ageGrpId: " + ageGrpId);
    try {
      await axios
        .get(`http://localhost:8080/donationsByAgeGrp/${ageGrpId}`)
        .then((response) => {
          setDonations(response.data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Container>
          <NavBar />
          {/* Add image container component */}

          <CategoryHeader>
            <Title>{params.categoryname}</Title>
          </CategoryHeader>
          {/* Add image container component */}
          <Donations list={donations} />
        </Container>
      )}
    </>
    //
  );
};

export default CategoryTemplate;
