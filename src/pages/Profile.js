import { styled } from "styled-components";
import InventoryListHeader from "../components/InventoryListHeader";
import InventoryList from "../components/InventoryList";
import DonationListHeader from "../components/DonationListHeader";
import DonationList from "../components/DonationList";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import InventoryItem from "../components/InventoryItem";

const Container = styled.div`
  background-color: white;
`;

const Profile = () => {
  const [inventory, setInventoryItems] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getInventoryList();
    getDonationList();
  }, []);

  const getInventoryList = async () => {
    await axios.get(`http://localhost:8080/allItems`).then((response) => {
      setInventoryItems(response.data);
    });
  };

  const getDonationList = async () => {
    await axios.get(`http://localhost:8080/allDonations`).then((response) => {
      setDonations(response.data);
    });
  };
  return (
    <Container>
      <InventoryListHeader list={inventory} />
      <InventoryList list={inventory} />
      <DonationListHeader list={donations} />
      <DonationList list={donations} />
    </Container>
  );
};

export default Profile;
