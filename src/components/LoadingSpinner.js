import React from 'react';
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";

const LoadingSpinner = () => (
    <div>
        <FontAwesomeIcon icon={faSpinner} spin />
        <i className="fa fa-spinner fa-spin" /> Loading...
    </div>
);

export default LoadingSpinner;