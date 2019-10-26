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
                    <div className="site-logo">
                        <img src={logo} alt="Refugee Stories Logo" />
                    </div>
                    <Component {...props} />
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

    & > * {
        width: 50%;
    }

    .hero-background {
        position: relative;

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
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .site-logo {
            max-width: 60px;
            position: absolute;
            top: 4rem;
            left: calc((100% - 470px) / 2);
        }
    }
`