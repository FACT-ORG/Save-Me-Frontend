import React from "react";
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/saveme-logo.png';


const DashboardLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            <StyledContainer>
                <nav>
                    <div className="site-logo">
                        <img src={logo} alt="Refugee Stories Logo" />
                    </div>

                    <div className="site-logo">
                        <img src={logo} alt="Refugee Stories Logo" />
                    </div>
                </nav>
                <Component {...props} />
            </StyledContainer>
        )}/>
    )
};

export default DashboardLayout;

const StyledContainer = styled.div`
    height: 100vh;
    overflow: hidden;
    padding: 0 2rem 3rem;

    @media (max-width: 650px) {
        overflow: auto;
    }

    nav {
        display: flex;
        max-width: ${props => props.theme.largeMaxWidth};
        margin: 0 auto;
        padding: 2rem 0;
        justify-content: space-between;

        .site-logo {
            max-width: 40px;
        }
    }
`
