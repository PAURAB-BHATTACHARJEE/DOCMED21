import React from "react";
import { useState } from "react";
import { departments } from "../constants";


const Departments = () => {
    const [glow, setGlow] = useState(0);
        return (
            <section className="departments" id="departments">
            <br /><br /><br /><br /><br /><br /><br /><br />
                <h3 className="sub-heading"> Our Departments</h3>
            <h1 className="heading" style={{fontSize: '6rem'}}> Find your Department</h1>

            <br /><br />
            <div className="box-container">
                {departments.map((depart, index) => (
                    <div className="box">
                        <button onMouseEnter={() => setGlow(1)}
                        onMouseLeave={() => setGlow(0)}>
                            {/* {glow ? image = img[0]: img[1]} */}
                            <a href=""><img src={depart.img[glow]} alt="" />
                                <h3>{depart.title}</h3>
                            </a>
                        </button>
                        <br />
                    </div>
                ))} 
            </div>
 
        </section>
    ); 
};

export default Departments;
