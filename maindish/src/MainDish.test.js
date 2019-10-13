import React from 'react';
import ReactDOM from 'react-dom';
import MainDish from './MainDish';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainDish />, div);
});
