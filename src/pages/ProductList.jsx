import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "space-around" })} 
`;

const Filter = styled.div`
    margin: 20px;
     ${mobile({ width: "0px 20px", margin: "0px 20px" })} 
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "10px", fontSize: "18px" })}
`;

const Select = styled.select`
   padding: 10px;
   margin-right: 20px;
   ${mobile({ marginRight: "10px", padding: "2px" })}
`;

const Option = styled.option`
     ${mobile({ marginRight: "10px", padding: "2px" })}
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White </Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected >Newest</Option>
            <Option>Price (asc) </Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
