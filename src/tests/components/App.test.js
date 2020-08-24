import '@testing-library/jest-dom'; 
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../../components/App';

test('show something', () => {
  render(<App></App>)
});
