import App from '../src/App.jsx';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { build, fake } from 'test-data-bot';
import '@testing-library/jest-dom/extend-expect'


describe('App', () => {
  it('should display initial count', () => {
    const { getByTestId } = render(<App initialCount={0}/>);
    expect(getByTestId('counter')).toHaveTextContent(0);
  })
});