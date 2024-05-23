import React, { useEffect, useState } from 'react';
import Style from './CategoriesSlider.module.css';
import Slider from "react-slick";
import axios from 'axios';



export default function CategoriesSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay:true,
    speed:1000,
  };
  const [categories, setCategories] = useState([]);

  function getCategories() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    .then( ({data})=>{
      setCategories(data.data)
    })
    .catch( (error)=>{

    })
  }
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
      getCategories()
    } , []);
  return <>
    <div className='p-5 mx-5'>
      <Slider {...settings}>
    {categories.map( (category)=> <div>
      <img className='category-image w-full'  src={category.image} alt="" />
      <h3>{category.name}</h3>
    </div>)}
    </Slider>
    </div>
  </>
}
