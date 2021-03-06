import React from 'react';
import store from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { theme } from './styles/theme.styles';
import { GlobalStyles } from './styles/global.styles';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyProfile from './pages/MyProfile';
import EditProfile from './pages/EditProfile';
import EmergencyProfile from './pages/EmergencyProfile';
import DashboardLayout from './components/Layout/DashboardLayout';
import OnboardingLayout from './components/Layout/OnboardingLayout';


const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {/* <Route path="/emergency" component={EmergencyProfile} /> */}
          <DashboardLayout exact path="/" component={Home} />
          <DashboardLayout path="/my-profile" component={MyProfile} />

          <OnboardingLayout path="/login" component={Login} />
          <OnboardingLayout path="/register" component={Register} />
          <OnboardingLayout path="/edit-profile" component={EditProfile} />

          {/* Onboarding Routes */}
          {/* <OnboardingLayout path="/login" component={Login} />
          <OnboardingLayout path="/register" component={Register} /> */}
          <ToastContainer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
