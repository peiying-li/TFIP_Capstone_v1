import React from "react";
import { styled } from "styled-components";
import DonationProfileItem from "./DonationProfileItem";

const Container = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
`;

const DonationList = (props) => {
  return (
    <Container>
      {props.list.map((item) => (
        <DonationProfileItem item={item} key={item.itemId} />
      ))}
    </Container>
  );
};

export default DonationList;
