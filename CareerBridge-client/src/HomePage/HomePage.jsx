import React from "react";
import Container from "../Components/Container/Container";
import Hero from "../Components/Hero/Hero";
import Fresher from "../Components/Fresher/Fresher";
import Experienced from "../Components/Experienced/Experienced";
import Category from "../Components/Category/Category";
import CareerQuest from "../Components/CareerQuest/CareerQuest";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blogs from "../Components/Blogs/Blogs";
import Pricing from "../Components/Pricing/Pricing";
import Stats from "../Components/Stats/Stats";
import Subscribe from "../Components/Subscribe/Subscribe";

const HomePage = () => {
  return (
    <>
      <Container>
        {/* <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Is Our Home Page  😃</div>
      <p className='font-bold text-center'>Hello .....</p> */}

        <Hero></Hero>
        <Fresher></Fresher>
        <Experienced></Experienced>
        <CareerQuest></CareerQuest>
        <Category></Category>
        <Testimonial></Testimonial>
        <Blogs></Blogs>
        <Pricing></Pricing>
        <Stats></Stats>
        <Subscribe></Subscribe>
      </Container>
    </>
  );
};
export default HomePage;
