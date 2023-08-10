import React from "react";
import { doctors } from "../constants";

const Doctors =()=>{
    return (
        <div className="box-container">
            {doctors.map((doc, index)=>(
                <div className="box">
                    <div className="image">
                        <img src={doc.img} alt="" />
                    </div>
                    <div className="content">
                        <h3>{doc.id}</h3>
                        <p style={{color: '#47a3d4'}}>{doc.work} <br /> </p>
                        <p >{doc.loc} <br /> {doc.exp} </p>
                        <br />
                        <p> </p>
                        <a href="" className="btn"> View Profile</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Doctors;