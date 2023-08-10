// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { login, login2 } from '../assets'; // make sure to provide these assets
// import './sign.css'; // make sure the path to the css file is correct

// const SignupPage = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         axios.post('http://localhost:8000/api/user/signup', {
//             username,
//             email,
//             password
//         })
//         .then(function (response) {
//             console.log(response);
//             // handle success here
//             // maybe redirect the user to the login page or a welcome page
//         })
//         .catch(function (error) {
//             console.log(error);
//             // handle error here
//         });

//         // Clear the form after submission
//         setUsername('');
//         setEmail('');
//         setPassword('');
//     };



// import React, { useState } from 'react';
// import { useHistory, Link } from 'react-router-dom';
// import axios from 'axios';
// import { login, login2 } from '../assets';
// import './sign.css';

// const SignupPage = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const history = useHistory();

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         axios.post('http://localhost:8000/api/user/signup', {
//             username,
//             email,
//             password
//         })
//         .then(function (response) {
//             console.log(response);
//             if (response.data.message === 'User registered successfully') {
//                 history.push('/DOCMED/login');
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

//         setUsername('');
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
//                     <Link to="/DOCMED">
//                         <a class="logo"><i class="fa-solid fa-user-doctor"></i> DOCMED</a>
//                     </Link>
//                     <br /><br /><br />
//                     <h3 className="sub-heading">Create a new account</h3>
//                     <p>sign up using social networks</p>
//                     <div className="icons">
//                         <a href="#"><i class="fa-brands fa-facebook fa-2xl" style={{ color: '#3b5998' }}></i></a>
//                         <a href="#"><i class="fa-brands fa-google fa-2xl" style={{ color: '#0F9D58' }}></i></a>
//                         <a href="#"><i class="fa-brands fa-linkedin fa-2xl" style={{ color: '#0A66C2' }}></i></a>
//                     </div>
//                     <p class="or">OR</p>
//                     <div className="input-form">
//                         <form onSubmit={handleSubmit}>
//                             <label htmlFor="username"></label>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 value={username}
//                                 onChange={handleUsernameChange}
//                                 placeholder='username'
//                             />

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

//                             <button type="submit" className='btn'>SignUp</button>
//                         </form>
//                     </div>
//                     <p className='login'>Already have a docmed account ? <a className='signUp'><Link to="/DOCMED/login"> Sign in</Link></a></p>
//                     {/* <p className=''>Joining as doctor ? <a href="" className='signUp'> Click Here</a></p> */}
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default SignupPage;

// import React, { useState } from 'react';
// import { useHistory, Link } from 'react-router-dom';
// import axios from 'axios';
// import { login, login2 } from '../assets';
// import './sign.css';

// const SignupPage = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const history = useHistory();

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         axios.post('http://localhost:8000/api/user/signup', {
//             username,
//             email,
//             password
//         })
//         .then(function (response) {
//             console.log(response);
//             if (response.data.message === 'User registered successfully') {
//                 history.push('/DOCMED/login');
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

//         setUsername('');
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
//                     <Link to="/DOCMED">
//                         <a class="logo"><i class="fa-solid fa-user-doctor"></i> DOCMED</a>
//                     </Link>
//                     <br /><br /><br />
//                     <h3 className="sub-heading">Create a new account</h3>
//                     <p>sign up using social networks</p>
//                     <div className="icons">
//                         <a href="#"><i class="fa-brands fa-facebook fa-2xl" style={{ color: '#3b5998' }}></i></a>
//                         <a href="#"><i class="fa-brands fa-google fa-2xl" style={{ color: '#0F9D58' }}></i></a>
//                         <a href="#"><i class="fa-brands fa-linkedin fa-2xl" style={{ color: '#0A66C2' }}></i></a>
//                     </div>
//                     <p class="or">OR</p>
//                     <div className="input-form">
//                         <form onSubmit={handleSubmit}>
//                             <label htmlFor="username"></label>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 value={username}
//                                 onChange={handleUsernameChange}
//                                 placeholder='username'
//                             />

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

//                             <button type="submit" className='btn'>SignUp</button>
//                         </form>
//                     </div>
//                     <p className='login'>Already have a docmed account ? <a className='signUp'><Link to="/DOCMED/login"> Sign in</Link></a></p>
//                     {/* <p className=''>Joining as doctor ? <a href="" className='signUp'> Click Here</a></p> */}
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default SignupPage;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { login, login2 } from '../assets';
import './sign.css';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

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

        axios.post('http://localhost:8000/api/user/signup', {
            username,
            email,
            password
        })
        .then(function (response) {
            console.log(response);
            if (response.data.message === 'User registered successfully') {
                navigate('/DOCMED/login');
            }
        })
        .catch(function (error) {
            console.log(error);
        });

        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <section className="sign-up" id="sign-up">
            <div className="row">
                <div className="image">
                    <img src={login2} alt="" />
                </div>

                <div className="form">
                    <Link to="/DOCMED">
                        <a className="logo"><i className="fa-solid fa-user-doctor"></i> DOCMED</a>
                    </Link>
                    <br /><br /><br />
                    <h3 className="sub-heading">Create a new account</h3>
                    <p>sign up using social networks</p>
                    <div className="icons">
                        <a href="#"><i className="fa-brands fa-facebook fa-2xl" style={{ color: '#3b5998' }}></i></a>
                        <a href="#"><i className="fa-brands fa-google fa-2xl" style={{ color: '#0F9D58' }}></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: '#0A66C2' }}></i></a>
                    </div>
                    <p className="or">OR</p>
                    <div className="input-form">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username"></label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder='username'
                            />

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

                            <button type="submit" className='btn'>SignUp</button>
                        </form>
                    </div>
                    <p className='login'>Already have a docmed account ? <a className='signUp'><Link to="/DOCMED/login"> Sign in</Link></a></p>
                    {/* <p className=''>Joining as doctor ? <a href="" className='signUp'> Click Here</a></p> */}
                </div>

            </div>
        </section>
    );
};

export default SignupPage;
