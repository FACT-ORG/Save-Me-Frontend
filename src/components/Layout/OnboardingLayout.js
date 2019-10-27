import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import logo from '../../assets/images/saveme-logo.png';
import onboardingBG from '../../assets/images/onboarding.jpg';


const OnboardingLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            <StyledContainer>
                <div className="hero-background">
                    <img src={onboardingBG} alt="Onboarding Background" />
                </div>
                <div className="main-content">
                    <div>
                        <div className="site-logo">
                            <img src={logo} alt="Refugee Stories Logo" />
                        </div>
                        <Component {...props} />
                    </div>
                </div>
            </StyledContainer>
        )}/>
    )
};

export default OnboardingLayout;

const StyledContainer = styled.div`
    height: 100vh;
    overflow-y: hidden;
    display: flex;

    @media (max-width: 768px) {
        overflow-y: auto;
        display: block;
    }

    & > * {
        width: 50%;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .hero-background {
        position: relative;
        
        @media (max-width: 768px) {
            display: none;
        }

        &:before {
            content: '';
            background: rgba(0, 0, 0, .7);
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2;
        }
    }

    .main-content {
        height: 100%;
        padding: 2rem;

        & > div {
            max-width: 450px;
            margin: 0 auto;
            width: 100%;
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .site-logo {
            max-width: 60px;
            position: absolute;
            top: 3rem;
            left: 0
        }
    }
`