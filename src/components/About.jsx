import React from 'react'
import AboutCard from './AboutCard';
import food_1 from './../img/food_1.jpg';
import food_2 from './../img/food_2.jpg';
import food_3 from './../img/food_3.jpg';
import food_4 from './../img/food_4.jpg';


const About = () => {
    return (
        <div>
            <div className="container">
                 <div className="row text-center pb-5" id="about">
                     <h6 className="fw-bold mb-5">About Us</h6>
                     <p className="fs-2 fw-light">
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, magni earum dicta fuga
                          itaque assumenda illum animi cumque nisi  rem alias voluptatem ea, repudiandae consequuntur,
                           architecto neque. Unde, tempore omnis.
                     </p>
                     <div className="row">
                     <AboutCard img={food_1} /> 
                     <AboutCard img={food_2} /> 
                     <AboutCard img={food_3} /> 
                     <AboutCard img={food_4} /> 
                     </div>


                 </div>
            </div>
            
        </div>
    )
}

export default About
