import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Favorite from "./Pages/Favorite/Favorite";
import Search from "./Pages/Search/Search";
import { Cart } from "./Pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} exact />
            <Route path="/series" component={Series} />
            <Route path="/favorite" component={Favorite} exact />
            <Route path="/search" component={Search} exact />
            <Route path="/cart" component={Cart} exact />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
