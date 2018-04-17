import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import { createStore } from "redux";



import MainComponent from "./component/MainComponent";
import allReducers from './reducers/combineAllReducers';

const reduxStore = createStore(allReducers);

const position = document.getElementById("reduxsample");

ReactDOM.render(
        <Provider store={reduxStore}>
        <div>
           <MainComponent />

        </div>
        </Provider>,
        position
)