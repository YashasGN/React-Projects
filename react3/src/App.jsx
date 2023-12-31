import styled from "styled-components";
import { useState } from "react";

const BASE_URL = "http://localhost:5173/"



const App = () => {
  const { data, setData } = useState(null);
  const fetchFoodData = async () => {

    const response = await fetch(BASE_URL)
    const json = response.json();
    console.log(json)
  }

  fetchFoodData()



  return (<Container>
    <TopContainer>
      <div className="logo">
        <img src="/Foody Zone.svg" alt="logo" />
      </div>
      <div className="search">
        <input placeholder="Search Food" />
      </div>
    </TopContainer>
    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>
    <FoodCardContainer>

      <img src="/bg.png" />


      <FoodCards></FoodCards>
    </FoodCardContainer>
  </Container>
  );
};

export default App;
const Container = styled.div`
max-width:1200px;
margin: 0 auto;
`;
const TopContainer = styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;
.search{
  input{
    background-color: transparent;
    border: 1px solid red;
    color:white;
    border-radius:5px;
    height: 40px;
    font-size: 16px;
    padding:0 10px;
  }
}
`
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  
`

const Button = styled.button`
  background-color: #ff4343;  
  border-radius:5px;
  padding: 6px 12px;
  border: none;
  color: white;
`
const FoodCardContainer = styled.section`
  img{
    height:calc(100vh-210px);
 
     background-size: cover;
  }
`;
const FoodCards = styled.div`
`;