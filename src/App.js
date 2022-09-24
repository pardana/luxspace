import "assets/css/app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories/:idc" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/congratulation" component={Congratulation} />
      </Router>
    </div>
  );
}

export default App;
