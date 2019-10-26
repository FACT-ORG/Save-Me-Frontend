import React from 'react';
import store from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme.styles';
import { GlobalStyles } from './styles/global.styles';
import { ThemeProvider } from 'styled-components';

import Login from './pages/Login';
import Register from './pages/Register';
import EditProfile from './pages/EditProfile';
import OnboardingLayout from './components/Layout/OnboardingLayout';
// import WebsiteRouter from './components/Router/WebsiteRouter';
// import DashboardRouter from './components/Router/DashboardRouter';


const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          
          {/* Onboarding Routes */}
          <OnboardingLayout path="/login" component={Login} />
          <OnboardingLayout path="/register" component={Register} />
          <OnboardingLayout path="/edit-profile" component={EditProfile} />

          {/* Onboarding Routes */}
          {/* <OnboardingLayout path="/login" component={Login} />
          <OnboardingLayout path="/register" component={Register} /> */}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
