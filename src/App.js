import NavBar from './components/NavBar/NavBarDetails.js'
import Header from './components/classBase.js';
import Body from './components/functionalBase.js';
import CollegeList from './components/NavBar/collegeList.js';
import SchoolList from './components/NavBar/schoolList.js';
import { Routes, Route} from 'react-router-dom';


// import { withRouter } from 'react-router';
import './App.css';


function App(props) {
  return (
    <div className="App">
      <div className='App-header'>
      <Routes>
        <Route path="/" exact element={ <NavBar/> } />
        <Route path="/home" element={ <Header/> } />
        <Route path="/collegeList" exact element={<CollegeList />} />
        <Route path="/schoolList" exact element={<SchoolList />} />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
        {/* <NavBar /> */}
      </div>
    </div>
  );
}

export default (App);
