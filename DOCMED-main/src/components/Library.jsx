import React from "react";
import Doctors from "./Doctors";
import Reviews from "./Revies";

const Library = ()=>{
    return (
        <section className="library">
            <h3 className="sub-heading">Our Doctors</h3>
            <h1 className="heading">Best in their respective Fields</h1>
            <Doctors />
            <br /><br /><br /> <br />
            <h3 className="sub-heading">Reviews</h3>
            <h1 className="heading">What People Say about us</h1>
            <br /><br /><br /> <br />
            <Reviews />
            {/* <h3 className="sub-heading">PS4</h3>
            <h1 className="heading">Play station originals</h1>
            <PS4 />
            <br /><br /> */}





            
        </section>
    );
};

export default Library;