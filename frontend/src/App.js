import React from "react";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";

const App = () =>  {
  return (
      <Router>
          <div>
              <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
              <ul className="header">
                  <li><Link to= "/">Home</Link></li>
                  <li><Link to= "/SEPractice">Select the Practice</Link></li>
                  <li><Link to= "/SubmitArticle">Submit an Article</Link></li>
              </ul>
              <div className="content">
              </div>
          </div>
      </Router>

  );
}

export default App;
