import React from "react";
import Container from "../Components/Container/Container";
import Hero from "../Components/Hero/Hero";
import Fresher from "../Components/Fresher/Fresher";
import Experienced from "../Components/Experienced/Experienced";
import Category from "../Components/Category/Category";

const HomePage = () => {
  return (
    <>
      <Container>
        {/* <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Is Our Home Page  😃</div>
      <p className='font-bold text-center'>Hello .....</p> */}

        <Hero></Hero>
        <Fresher></Fresher>
        <Experienced></Experienced>
        <Category></Category>
      </Container>
    </>
  );
};
export default HomePage;
