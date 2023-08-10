import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {login, login2} from '../assets';
import './log.css'


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform sign-up logic here
        // You can make an API call to send the user data to the server

        // Clear the form after submission
        setUsername('');
        setEmail('');
        setPassword('');
    };
    const logStyle = {
        height: '100%',


    }

//     import React, { useState } from 'react';
// import { useHistory, Link } from 'react-router-dom';
// import axios from 'axios';
// import { login, login2 } from '../assets'; 
// import './log.css'; 

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory(); // hook for redirecting

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         axios.post('http://localhost:8000/api/user/login', {
//             email,
//             password
//         })
//         .then((response) => {
//             console.log(response);
//             // If login is successful, redirect to the home page
//             if (response.data.message === 'Authenticated successfully') {
//                 history.push('/DOCMED/home');
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//             // handle error here
//         });

//         // Clear the form after submission
//         setEmail('');
//         setPassword('');
//     };

//     const logStyle = {
//                 height: '100%',
        
        
//             }
    return (
        <section className="sign-up" id="sign-up">


            <div className="row">

                <div className="image " >
                    <img src={login2} alt="" />
                </div>

                <div className="form">
                <Link to="/DOCMED"><a class="logo"><i class="fa-solid fa-user-doctor"></i> DOCMED</a></Link>
                    <br /><br /><br />
                    <h3 className="sub-heading">Login to your account</h3>
                    <p>log in using social networks</p>
                    <div className="icons">
                        <a href="#" ><i class="fa-brands fa-facebook fa-2xl" style={{ color: '#3b5998' }}></i></a>
                        <a href="#" ><i class="fa-brands fa-google fa-2xl" style={{ color: '#0F9D58' }}></i></a>
                        <a href="#" ><i class="fa-brands fa-linkedin fa-2xl" style={{ color: '#0A66C2' }}></i></a>

                    </div>
                    <p class="or">OR</p>
                    <div className="input-form">

                        <form onSubmit={handleSubmit}>
                            {/* <label htmlFor="username" ></label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder='username'
                            /> */}
                
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='email'
                            />
                            <br />
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder='password'
                            />
                            <br /><br />

                            <button type="submit" className='btn'>login</button>
                        </form>
                    </div>
                    <p>New to DOCMED ? <a className='signUp'><Link to="/DOCMED/signup"> Join Now</Link></a></p>
                </div>

            </div>
        </section>
    );
};

export default LoginPage;

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { login, login2 } from '../assets'; // make sure to provide these assets
// import './log.css';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // Using useHistory hook for redirecting after successful login
//     const history = useHistory();

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         axios.post('http://localhost:8000/api/user/login', { // replace with your server's URL
//             email,
//             password
//         })
//         .then((response) => {
//             console.log(response);
//             if (response.data.message === 'Login successful') {
//                 history.push('/DOCMED/welcome'); // replace with your welcome route
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//         });

//         // Clear the form after submission
//         setEmail('');
//         setPassword('');
//     };

//     return (
//         <section className="sign-up" id="sign-up">
//             <div className="row">
//                 <div className="image">
//                     <img src={login2} alt="" />
//                 </div>
//                 <div className="form">
//                     <h3 className="sub-heading">Login to your account</h3>
//                     <div className="input-form">
//                         <form onSubmit={handleSubmit}>
//                             <label htmlFor="email"></label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 value={email}
//                                 onChange={handleEmailChange}
//                                 placeholder='email'
//                             />
//                             <br />
//                             <label htmlFor="password"></label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 value={password}
//                                 onChange={handlePasswordChange}
//                                 placeholder='password'
//                             />
//                             <br /><br />
//                             <button type="submit" className='btn'>login</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default LoginPage;
