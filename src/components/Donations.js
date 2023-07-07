import { styled } from "styled-components";
import DonationItem from "./DonationItem";
import DonationProfileItem from "./DonationProfileItem";

const Container = styled.div``;

const Donations = (props) => {
  return (
    <Container>
      {props.list.map((item) => (
        <DonationItem item={item} key={item.itemId} />
      ))}
    </Container>
  );
};

export default Donations;

//
