import { styled } from "styled-components";
import InventoryItem from "./InventoryItem";

const Container = styled.div`
  text-align: left;
`;

const Title = styled.div``;

const InventoryList = (props) => {
  return (
    <Container>
      {props.list.map((item) => (
        <InventoryItem item={item} key={item.itemId} />
      ))}
    </Container>
  );
};

export default InventoryList;
