import React from "react";
import styled from 'styled-components';


const MyProfile = () => {

    const saveMe = () => {

    }

    return (
        <StyledContainer>
            <h2>Edit Profile</h2>
        </StyledContainer>
    )
}

export default MyProfile;


const StyledContainer = styled.div`
    max-width: 850px;
    margin: 0 auto;
    
    h2 {
        font-size: 3rem;
        margin-top: 8rem;

        @media (max-width: 650px) {
            font-size: 4rem;
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
            padding: 3rem;
            position: relative;

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
        }
    }
`

