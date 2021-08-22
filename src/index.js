import React from 'react';
import { render } from 'react-dom';
import AppRouter from './components/AppRouter';
import './styles/style.css';
import './styles/responsive.css';

render(<AppRouter />, document.querySelector('#main'));
