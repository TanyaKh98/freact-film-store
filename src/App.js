import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Favorite from "./Pages/Favorite/Favorite";
import Search from "./Pages/Search/Search";

import Footer from "./components/Footer/Footer";
import Signup from "./components/authentication/Signup/Signup";
import Login from "./components/authentication/Login/Login";
import ForgotPassword from "./components/authentication/ForgotPassword/ForgotPassword";
import { AuthProvider } from "./components/context/AuthContext";
import SimpleBottomNavigation from "./components/MainNav/MainNav";
import Trending from "./Pages/Trending/Trending";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Container>
          <AuthProvider>
            <Switch>
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} exact />
              <Route path="/series" component={Series} />
              <Route path="/favorite" component={Favorite} exact />
              <Route path="/search" component={Search} exact />

              <Route path="/signup" component={Signup} exact />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Container>
      </div>
      <Footer />
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
