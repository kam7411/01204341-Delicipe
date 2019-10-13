import React, { Component ,Fragment } from 'react';
import { BrowserRouter , Link , Route} from 'react-router-dom'
import { writeSync } from 'fs';

export default ({ writers }) =>
    <Fragment>
        <ul>
            {writers.map(writer =>
            <li>
                <Link to="">name</Link>
            </li>)}
        </ul>
    </Fragment>