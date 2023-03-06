import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { ClickMe, Default, Thanks, ThanksButton } from './App.stories';

describe('Button component', () => {
  it('renders a primary button', () => {
    const { getByText } = render(<Default {...Default.args} />);
    const buttonElement = getByText(Default.args.buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders with Thanks button and action', () => {
    const { getByText } = render(<ThanksButton {...ThanksButton.args} />);
    const button = getByText('thanks');
    expect(button).toBeInTheDocument();
  });

  it('renders a click me button', () => {
    const { getByText } = render(<ClickMe {...ClickMe.args} />);
    const buttonElement = getByText(ClickMe.args.buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick function when the button is clicked', () => {
    const handleClick = jest.fn();
    const buttonText = 'Click me!';
    const { getByText } = render(<Button onClick={handleClick} buttonText={buttonText} />);
    const buttonElement = getByText(buttonText);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});