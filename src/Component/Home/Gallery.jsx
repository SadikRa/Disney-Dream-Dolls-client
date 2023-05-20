// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {


  useEffect(() => {
    AOS.init();
  }, []);
  

    return (
        <div>
           
        <h1 className="text-5xl text-center my-7">Disney Dream Dolls Picture Gallery</h1>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
  <div data-aos="fade-up">
    <img className="w-96 h-96 rounded " src="https://i.ibb.co/7G6CqPR/img2.jpg" alt="Drink" />
  </div> 
  <div data-aos="fade-up">
    <img className="w-96 h-96 rounded" src="https://i.ibb.co/ZxHyTXz/img3.jpg" alt="Drink" />
  </div> 
  <div data-aos="fade-up">
    <img className="w-96 h-96 rounded" src="https://i.ibb.co/m88qykS/img4.jpg" alt="Drink" />
  </div> 
  <div data-aos="fade-up">
    <img className="w-96 h-96 rounded" src="https://i.ibb.co/WHkfHY1/img6.jpg" alt="Drink" />
  </div> 
  <div data-aos="fade-up">
    <img className="w-96 h-96 rounded" src="https://i.ibb.co/wMW0MzB/img7.jpg" alt="Drink" />
  </div> 
  <div data-aos="fade-up">
    <img className="w-96 h-96 rounded" src="https://i.ibb.co/PNWX6H7/img8.jpg" alt="Drink" />
  </div> 
  <div data-aos="fade-up">
    <img className="w-96 h-96 rounded" src="https://i.ibb.co/GCpzc5W/img10.jpg" alt="Drink" />
  </div>
  <div data-aos="fade-up">
    <img className="w-96 h-96 rounded" src="https://i.ibb.co/HtCZ9bx/istockphoto-458562501-612x612.jpg" alt="Drink" />
  </div>
</div>
        </div>
    );
};

export default Gallery;