import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Navbar";
import "./App.css";
//import Header from './Header';
import SearchForm from './SearchForm';
// import PlanTable from './PlanTable';

function App() {
    return ( <div className = "app" >
        <Header/ >
        <SearchForm/ >
        {/* <PlanTable/ > */}
        </div>
    );
}

export default App;