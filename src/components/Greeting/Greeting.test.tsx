import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders `Good morning` in the morning', () => {
  Date.prototype.getHours = jest.fn(() => 4);   // 4am
  render(<Greeting name="Eddie"/>);
  const textElement = screen.getByText('Good morning Eddie');
  expect(textElement).toBeInTheDocument();
});

test('renders `Good afternoon` in the afternoon', () => {
  Date.prototype.getHours = jest.fn(() => 13);   // 1pm
  render(<Greeting name="Eddie"/>);
  const textElement = screen.getByText('Good afternoon Eddie');
  expect(textElement).toBeInTheDocument();
});

test('renders `Good evening` in the evening', () => {
  Date.prototype.getHours = jest.fn(() => 19);   // 7pm
  render(<Greeting name="Eddie"/>);
  const textElement = screen.getByText('Good evening Eddie');
  expect(textElement).toBeInTheDocument();
});
