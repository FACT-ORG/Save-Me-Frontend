import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RapeIcon from '../assets/icons/rape.svg';
import PBIcon from '../assets/icons/police-brutality.svg';
import HRIcon from '../assets/icons/highway-robbery.svg';
import KidnappingIcon from '../assets/icons/kidnapping.svg';
import TerrorismIcon from '../assets/icons/terrorism.svg';


let Twilio = window.Twilio;
console.log(Twilio)
const accountSid = 'AC4ceb09a64408ac5ef3f855089a1cb350';
const authToken = 'e24a8819bb23940293347674e50b8ac5';
// const client = Twilio(accountSid, authToken);

const Home = () => {

    const data = localStorage.getItem('data');
    const [ values, setValues ] = useState({
        name: data.fullname,
        location: '',
        type: ''
    });

    useEffect(() => {
        console.log(process.env.API_KEY);
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.API_KEY}`)
                    .then ((res) => {
                        setValues({
                            ...values,
                            location: res.data.results[0],
                        })
                    })
            });
        } else {
            alert("Sorry, browser does not support geolocation!");
        }      
    }, [])

    const saveMe = (type) => {
        setValues({
            ...values,
            type: type
        })
        toast.success("We've sent the alert out to your family and friends!");
        // client.messages.create({
        //     body: 'Hello! Your emergency contact Femi at Andela Epic Tower is at a danger of getting beaten, Please get help by contacting 767',
        //     from: '+14152374350',
        //     to: '+2348060472707'
        // }).then(message => console.log(message.sid));
    }

    return (
        <StyledContainer>
            <h2>Hello, what is your emergency?</h2>
            <ul>
                <li>
                    <button onClick={() => saveMe('Rape')}>
                        <img className="rape" src={RapeIcon} alt="Rape Icon" />
                        <span>Rape</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => saveMe('Police Brutality')}>
                        <img src={PBIcon} alt="Police Brutality Icon" />
                        <span>Police Brutality</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => saveMe('Kidnapping')}>
                        <img className="smaller" src={KidnappingIcon} alt="Kidnapping Icon" />
                        <span>Kidnapping</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => saveMe('Gunmen')}>
                        <img src={HRIcon} alt="Gunmen Icon" />
                        <span>Gunmen</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => saveMe('Terrorism Attack')}>
                        <img src={TerrorismIcon} alt="Terrorism Attack Icon" />
                        <span>Terrorism Attack</span>
                    </button>
                </li>
            </ul>
        </StyledContainer>
    )
}

export default Home;


const StyledContainer = styled.div`
    max-width: 850px;
    margin: 0 auto;
    
    h2 {
        font-size: 6rem;
        margin-top: 8rem;

        @media (max-width: 650px) {
            font-size: 4rem;
            margin-top: 5rem;
        }
    }

    ul {
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 5rem;

        @media (max-width: 650px) {
            grid-template-columns: 1fr;
        }
    }

    li {
        button {
            border: none;
            outline: none;
            background: black;
            color: white;
            width: 100%;
            min-height: 100px;
            font-size: 2rem;
            text-align: left;
            padding: 2rem;
            position: relative;
            display: flex;
            align-items: center;

            &:before {
                background:#f0f0f0;
                background-image:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#D0D0D0), to(#f0f0f0));
                
                -webkit-border-radius:5px;
                -moz-border-radius:5px;
                border-radius:5px;
                
                -webkit-box-shadow:0 1px 2px rgba(0, 0, 0, .5) inset, 0 1px 0 #FFF; 
                -moz-box-shadow:0 1px 2px rgba(0, 0, 0, .5) inset, 0 1px 0 #FFF; 
                box-shadow:0 1px 2px rgba(0, 0, 0, .5) inset, 0 1px 0 #FFF;
                
                position: absolute;
                content: "";
                left: -6px; right: -6px;
                top: -6px; bottom: -6px;
                z-index: -1;
            }
            
            &:active {
                -webkit-box-shadow:0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset;
                top:5px;
            }
            &:active:before{
                top: -11px;
                bottom: -5px;
                content: "";
            }

            &:hover {
                background: #000000b0;
            }

            img {
                max-width: 40px;
                margin-right: 15px;

                &.smaller {
                    max-width: 30px;
                }

                &.rape {
                    max-width: 50px;
                    margin-right: 5px;
                }
            }
        }
    }
`

