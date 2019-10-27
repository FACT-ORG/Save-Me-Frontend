import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Roller from '../components/LoadingIndicator/roller';
import MultipleValueTextInput from 'react-multivalue-text-input';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = (props) => {

    const [ values, setValues ] = useState({});
    const [ contacts, setContacts ] = useState([])
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
		const data = JSON.parse(localStorage.getItem('data'));
        setLoading(true);

        if(data) {
            setTimeout(() => { 
                const userData = Object.assign(data.user, values);
                resetForm();
                localStorage.setItem('data', JSON.stringify(userData))
                setLoading(false);
                props.history.push('/');
            }, 2000);
        }

		// axios.post('', values)
        //     .then(res => {       
        //         localStorage.setItem('token', res.data.token);
        //         setLoading(false);
        //         props.history.push('/');
        //     })
        //     .catch(err => {
        //         toast.error("Please provide valid Email and Password!")
        //         setLoading(false);
        //         resetForm();
        //     })
    };

    const handleAddContacts = (item) => {
        if(contacts.length <= 5) {
            setContacts([...contacts, item])
        } else {
            toast.error("You can only add 5 emergency contacts!")
        }
    };
    const handleDeleteContacts = (item) => setContacts(contacts.filter((contact) => contact !== item));
    const resetForm = () => setValues({});
    const stopLoading = () => setLoading(false);
    
    useEffect(() => {
        if(contacts.length > 0) {
            setValues(values => ({ 
                ...values, 
                emergency: contacts
            }));
        }
    }, [contacts])
    
    const { phonenumber, address } = values;

    return (
        <StyledContainer>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="phonenumber">
                    <span>Phone Number</span>
                    <input id="phonenumber" type="tel" value={phonenumber || ''} onChange={handleChange} required />
                </label>

                <label htmlFor="address">
                    <span>Address</span>
                    <input id="address" type="text" value={address || ''} onChange={handleChange} required />
                </label>

                <MultipleValueTextInput
                    id="emergency"
                    onItemAdded={(item, allItems) => handleAddContacts(item)}
                    onItemDeleted={(item, allItems) => handleDeleteContacts(item)}
                    charcodes={[13, 44]}
                    name="emergency"
                    label="Emergency Contacts"
                    placeholder="Add up to 5 emergency contacts"
                    deleteButton={<span>X</span>}
                />

                <button type="submit" className="submit-btn">
                    {isLoading ? <Roller /> : 'Submit'}
                </button>
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
                &:valid { border-color: ${props => props.theme.primaryColor}; }
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

        .multiple-value-text-input {
            label {
                font-size: 1.5rem;
                font-weight: 600;
                color: ${props => props.theme.black};
            }

            input {
                margin-top: .75rem;
            }

            .multiple-value-text-input-item {
                display: inline-flex;
                justify-content: space-between;
                align-items: center;
                min-width: 130px;
                font-size: 1.5rem;
                padding: .5rem 1.2rem;
                border-radius: 2px;
                margin: .5rem .75rem .5rem 0;
                background: ${props => props.theme.primaryGrey}
            }

            .multiple-value-text-input-item-delete-button {
                background: red;
                color: white;
                padding: 2px 6px;
                border-radius: 50%;
                font-size: .9rem;
                height: fit-content;
            }
        }
    }
`