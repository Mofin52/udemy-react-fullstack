import React, {useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import {useDispatch} from "react-redux";
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

import * as actions from '../actions';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchUser())
    }, []);

    return (
            <BrowserRouter>
                <div className={"container"}>
                    <Header />
                    <Route path={"/"} component={Landing} exact={true}/>
                    <Route path={"/surveys"} component={Dashboard} exact={true}/>
                    <Route path={"/surveys/new"} component={SurveyNew}/>
                </div>
            </BrowserRouter>
    )
}

export default App;