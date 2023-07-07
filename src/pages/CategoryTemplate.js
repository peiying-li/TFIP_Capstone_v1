import { useParams } from "react-router-dom";
import styled from "styled-components";
import Donations from "../components/Donations";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
  background-color: bisque;
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

  let catName = params.categoryname;

  //get axios here for catID of passed in catName
  const headers = {
    "Cache-Control": "no-cache",
    "Accept-Language": "en",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With, Origin",
  };

  let config = {
    headers,
  };
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
  }, []);

  const getCatId = async () => {
    await axios
      .get(`http://localhost:8080/catIdFromCatName/${catName}`, config)
      .then((response) => {
        setcatId(response.data);
        getlist(response.data);
      });
  };

  const getlist = async (data) => {
    console.log(data);
    try {
      await axios
        .get(`http://localhost:8080/donationsByTypeCat/${data}`, config)
        .then((response) => {
          setDonations(response.data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  /* For AgeGroup Category */
  const getAgeGrpId = async () => {
    await axios
      .get(`http://localhost:8080/ageGrpIdFromAgeGrpName/${catName}`, config)
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
        .get(`http://localhost:8080/donationsByAgeGrp/${ageGrpId}`, config)
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
