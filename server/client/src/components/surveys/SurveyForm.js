import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from "./SurveyField";
import _ from 'lodash';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const SurveyForm = (props) => {

    const renderFields = () => {
        return _.map(formFields, field => {
            return <Field key={field.name} component={SurveyField} type={'text'} {...field} />
        })
    }

    return (
        <div>
            <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
                {renderFields()}
                <Link to={'/surveys'} type={"submit"} className={"red btn-flat left white-text"}>
                    Cancel
                </Link>
                <button type={"submit"} className={"teal btn-flat right white-text"}>
                    Next
                    <i className={"material-icons right"}>done</i>
                </button>
            </form>
        </div>
    )
}

function validate (values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {
        if(!values[name]) {
            errors[name] = `You must provide ${name}`
        }
    })


    return errors;
}

export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount: false,
})(SurveyForm);