import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Roller from '../components/LoadingIndicator/roller';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = (props) => {

    const [ values, setValues ] = useState({});
    const [ visibility, setVisibility ] = useState(false);
	const [ isLoading, setLoading ] = useState(false);

    const handleChange = (event) => {
		event.persist();
		setValues(values => ({ 
			...values, 
			[event.target.id]: event.target.value 
		}));
	};

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setLoading(true);
		axios.post('', values)
            .then(res => {       
                localStorage.setItem('token', res.data.token);
                stopLoading();
                props.history.push('/edit-profile');
            })
            .catch(err => {
                toast.error("Please provide valid Email and Password!")
                stopLoading();
                resetForm();
            })
    };
    
    const resetForm = () => setValues({});
	const stopLoading = () => setLoading(false);
	const toggleVisibility = () => {
		if(values.password) setVisibility(!visibility)
	}
    

    const { fullname, email, password } = values;

    return (
        <StyledContainer>
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">
                    <span>Full Name</span>
                    <input id="fullname" type="text" value={fullname || ''} onChange={handleChange} required />
                </label>

                <label htmlFor="email">
                    <span>Email</span>
                    <input id="email" type="email" value={email || ''} onChange={handleChange} required />
                </label>

                <label htmlFor="password">
                    <span className="password-label">
                        <span>Password</span>
                        <button type="button" onClick={toggleVisibility}>{visibility ? 'Hide password' : 'Show password'}</button>
                    </span>
                    <input id="password" type={visibility ? 'text' : 'password'} value={password || ''} onChange={handleChange} required />               
                </label>

                <button type="submit" className="submit-btn">
                    {isLoading ? <Roller /> : 'Register'}
                </button>

                <p className="text-link">Already a member? <Link to="/login">Login here</Link></p>
            </form>
        </StyledContainer>
    )
}

export default Register;

const StyledContainer = styled.div`
    position: relative;
    max-width: 450px;
    width: 100%;
    margin: 0 auto;

    h2 {
        font-size: 2.4rem;
        margin-bottom: 3rem;
    }

    form {

        label {
            display: flex;
            flex-direction: column;
            width: 100%; 
            margin-bottom: 3rem;   

            & > span {
                font-size: 1.5rem;
                margin-bottom: .75rem;
                font-weight: 600;
                color: ${props => props.theme.black};
                &.password-label {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    button {
                        color: #000;
                        font-size: 1rem;
                        background: transparent;
                        margin: 0;
                        padding: 0;
                        font-weight: 600;
                        border: none;
                        outline: none;
                    }
                }
            }
            input {
                outline: none;
                border: 1px solid #ddd;
                padding: 0 1rem;
                min-height: 40px;
                border-radius: 5px;
                font-size: 1.4rem;
                background: transparent;
                &:-webkit-autofill { 
                    -webkit-box-shadow:200px 200px 100px white inset; 
                    box-shadow:200px 200px 100px white inset; 
                }
                &:valid { border-color: #419BA0; }
                & + .input-requirements {
                    overflow: hidden;
                    max-height: 0;
                    transition: max-height .25s ease-out;  
                }
                
                &:focus + .input-requirements {
                    max-height: 1000px; /* any large number (bigger then the .input-requirements list) */
                    transition: max-height 1s ease-in;
                }
                
            }
            .error-msg {
                margin-top: .5rem;
                color: red;
            }
        }

        .text-link {
            margin-top: 3rem;
            font-size: 1.3rem;
            color: rgba(0,0,0,.4);  
            a {
                text-decoration: none;
                color: ${props => props.theme.primaryColor};
                font-weight: 600;
            }
        }

        button.submit-btn {
            outline: 0;
            border: none;
            background: ${props => props.theme.primaryColor} none;
            color: #fff;
            font-weight: 700;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
            user-select: none;
            transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
            -webkit-tap-highlight-color: transparent;
            padding: .5rem 2rem;
            min-height: 40px;
            min-width: 150px;
            font-size: 1.5rem; 
            margin-top: 1.5rem;
            &:hover {
                opacity: .8;
                background-image: none;
                -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                color: rgba(255, 255, 255, .8);
            }
        }
    }
`