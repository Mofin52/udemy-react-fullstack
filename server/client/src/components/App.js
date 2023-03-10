import React, {useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import {useDispatch} from "react-redux";

import * as actions from '../actions';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchUser())
    }, []);

    return (
        <div className={"container"}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path={"/"} component={Landing} exact={true}/>
                    <Route path={"/surveys"} component={Dashboard} exact={true}/>
                    <Route path={"/surveys/new"} component={SurveyNew}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;