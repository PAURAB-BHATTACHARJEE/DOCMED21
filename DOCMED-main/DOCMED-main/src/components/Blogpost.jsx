import React from "react";
import { blogpost } from "../constants";

const Blogpost = () => {
    return (
        <section className="library">
            <h3 className="sub-heading">Recent Blogpost</h3>
            <h1 className="heading">Updates related to health and lifestyle</h1>
            <div className="box-container">
                {blogpost.map((blog, index) => (
                    <div className="box">
                        <div className="image">
                            <img src={blog.img} alt="" />
                        </div>
                        <div className="content">
                            <h3>{blog.id}</h3>
                            <p style={{ color: '#47a3d4' }}>{blog.date} <br /> </p>
                            <p >{blog.info}</p>
                            <br />
                            <p> </p>
                            <a href="" className="btn"> View more...</a>
                        </div>
                    </div>
                ))}
            </div>






        </section>
    );
};

export default Blogpost;