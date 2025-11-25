import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Courses from './Courses.jsx';
import Phishingattack from './Phishingattack.jsx';
import questionsData from './questionsData.jsx';
import Game from './Game.jsx';
import Sgame from './Sgame.jsx';
import Socialdata from './Socialdata.jsx';
import QuishGame from './QuishGame.jsx';
import Love from './Love.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/phishingattack" element={<Phishingattack />} />
          <Route path="/questionsData" element={<questionsData />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Sgame" element={<Sgame />} />
          <Route path="/QuishGame" element={<QuishGame />} />
          <Route path="/" element={<Love />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
