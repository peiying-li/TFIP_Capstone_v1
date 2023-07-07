import styled from "styled-components";
// import ImageLogo from "../assets/BabyBouncer1.jpg";
// import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.div`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Brand = styled.div``;
const Condition = styled.div``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid white;
  background-color: bisque;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const DonationDetail = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getItem();
  }, []);

  const getItem = async () => {
    try {
      await axios
        .get(`http://localhost:8080/itemsById/${params.itemId}`)
        .then((response) => {
          setItem(response.data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={params.imageURL} alt="image" />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.itemName}</Title>
          <Brand>Brand: {item.brand}</Brand>
          <Condition>Item Condition: {item.itemCondition}</Condition>
          <Desc>{item.description}</Desc>
          <AddContainer>
            <Button>RESERVE</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default DonationDetail;
