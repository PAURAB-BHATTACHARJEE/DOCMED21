import { eye } from "../assets";


const Getappointment = () => {
    return (
        <section className="about" id="about">

            <h3 className="sub-heading"> Best Health care !! </h3>
            <h1 className="heading" style={{ fontSize: "3rem" }}>Eye Care with Top Professionals
                and In Budget. </h1>

            <div className="row">

                <div className="image" >
                    <img className="about-image" src={eye} style={{ height: "50rem"}} alt="" />
                </div>

                <div className="content">
                    <p style={{fontSize:"2rem"}}>We've built a healthcare system that puts your needs first.
                        For us, there is nothing more important than the health of
                        you and your loved ones.</p>

                    <a href="#" className="btn">Book  A  appointment</a>
                    <br /><br /><br /><br /><br /><br />


                    <p> </p>
                </div>

            </div>
        </section>
    );
};

export default Getappointment;