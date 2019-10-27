import React from "react";
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/saveme-logo.png';


const DashboardLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            <StyledContainer>
                <nav>
                    <div className="site-logo">
                        <Link to="/"><img src={logo} alt="Refugee Stories Logo" /></Link>
                    </div>

                    <p><Link to="/my-profile">My Profile</Link></p>
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
        align-items: center;

        .site-logo {
            max-width: 60px;
        }

        a {
            font-size: 1.7rem;
            color: rgba(0,0,0,.4);
        }
    }
`
