import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './extra.css';
import 'rsuite/styles/index.less';

import MainRouter from './MainRouter';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <MainRouter />
    , rootElement
);

