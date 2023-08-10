import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, LoginPage, SignupPage} from "./pages";

const App = ()=>(
  <div>
    <Router>
      <Routes>
        <Route index path="/DOCMED" element={<Home />} />
        
        <Route  path="/DOCMED/login" element={<LoginPage />} />
        <Route  path="/DOCMED/signup" element={<SignupPage />} />

      </Routes>

    </Router>

  </div>
)

export default App;