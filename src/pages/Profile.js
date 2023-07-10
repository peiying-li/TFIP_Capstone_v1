import { styled } from "styled-components";
import InventoryListHeader from "../components/InventoryListHeader";
import InventoryList from "../components/InventoryList";
import DonationListHeader from "../components/DonationListHeader";
import DonationList from "../components/DonationList";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import InventoryItem from "../components/InventoryItem";

const Container = styled.div``;
const InventoryListContainer = styled.div`
  display: flex;
  margin-top: 2%;
  margin-bottom: 2%;
  justify-content: space-between;
`;

const Header = styled.div`
  text-align: center;

  font-weight: bold;
  font-size: 150%;
  color: rgb(210, 180, 140);
  padding: 2%;
  border: solid 1px;
  height: fit-content;
  /* margin-top: 2.5%; */
  /* background-color: rgba(255, 228, 196, 0.839); */
`;
const Profile = () => {
  const [inventory, setInventoryItems] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [filteredList, setFilteredList] = useState([inventory]);
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    setLoading(true);
    getInventoryList();
    getDonationList();
  }, []);

  const getInventoryList = async () => {
    await axios
      .get(`http://localhost:8080/allItems`)
      .then((response) => {
        setInventoryItems(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  const getDonationList = async () => {
    await axios
      .get(`http://localhost:8080/allDonations`)
      .then((response) => {
        setDonations(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  //Filter for searched result
  let filteredList = inventory;
  if (searchResult != "") {
    filteredList = filteredList.filter((item) => {
      return item.itemName === searchResult;
    });
  }

  return (
    <Container>
      <Header>MARKETPLACE FOR MOTHERS</Header>
      <InventoryListContainer>
        <InventoryListHeader list={inventory} onSearch={setSearchResult} />
      </InventoryListContainer>

      <InventoryList list={filteredList} />
      <DonationListHeader list={donations} />
      <DonationList list={donations} />
    </Container>
  );
};

export default Profile;
