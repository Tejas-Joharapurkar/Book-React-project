import React from 'react'
import about from '../images/about.webp';
const About = () => {
    return (
        <div className="about-container">
            <img src={about} alt="" className="img" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, recusandae provident assumenda illum hic molestiae omnis in exercitationem neque impedit doloribus error sint, amet consequatur asperiores esse commodi quam? Vero?</p>
        </div>
    );
}

export default About;