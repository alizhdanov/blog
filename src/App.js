import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Home = () => {
  return <div>home</div>;
};

const About = () => {
  return <div>about</div>;
};

const Post = () => {
  let { id } = useParams();

  return <div>post {id}</div>;
};

function App() {
  return (
    <Router>
      <div>
        <header>header</header>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </nav>
        <Switch>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
