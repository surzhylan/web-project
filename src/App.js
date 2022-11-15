import React from 'react'; 
import './App.css';
import Navbar from './components/navbar/Navbar';
import Content from './components/courses/Content';
import Footer from './components/footer/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MainPages from './components/mainPages/MainPages';
import TeamPages from './components/teamPages/TeamPages';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/courses" element={<Content />} />
          <Route path="/aboutTeam" element={<TeamPages />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
