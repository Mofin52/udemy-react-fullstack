import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import formFields from './formFields';
import _ from 'lodash';
import { submitSurvey } from '../../actions';
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, history }) => {
    const formValues = useSelector(state => state.form.surveyForm.values);
    const dispatch = useDispatch();

    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    })

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className={'yellow darken-3 white-text btn-flat'} onClick={onCancel}>
                Back
            </button>
            <button className={'green white-text btn-flat right'} onClick={() => dispatch(submitSurvey(formValues, history))}>
                Send Survey
                <i className={'material-icons right'}>email</i>
            </button>
        </div>
    )
}

export default withRouter(SurveyFormReview);