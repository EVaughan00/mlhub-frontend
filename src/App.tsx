import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Dashboard from "./views/Dashboard/Dashboard";
import UploadView from './views/UploadModal/UploadView';

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/upload" component={UploadView}/>
            <Route path="/" component={Dashboard}/>
        </Switch>
      </Router>
  );
}

export default App;
