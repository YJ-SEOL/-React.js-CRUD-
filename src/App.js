import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import TutorialsList from "./components/tutorials-list.component";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/tutorials"} className="navbar-brand">
                        YJ-SEOL
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/tutorials"} className="nav-link">
                                Tutorials
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Add
                            </Link>
                        </li>
                    </div>
                </nav>

                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<TutorialsList />} />
                        <Route path="/tutorials" element={<TutorialsList />} />
                        <Route path="/add" element={<AddTutorial />} />
                        <Route path="/tutorials/:id" element={<Tutorial />} />
                    </Routes>
                </div>
            </div>
        );
    }
}
export default App;
