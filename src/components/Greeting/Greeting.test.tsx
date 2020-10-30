import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders `Good morning` in the morning', () => {
  jest.spyOn(Date.prototype, "getHours").mockReturnValue(4);  // 4am
  render(<Greeting name="Eddie"/>);
  const textElement = screen.getByText('Good morning, Eddie');
  expect(textElement).toBeInTheDocument();
});

test('renders `Good afternoon` in the afternoon', () => {
  jest.spyOn(Date.prototype, "getHours").mockReturnValue(13);  // 1pm
  render(<Greeting name="Eddie"/>);
  const textElement = screen.getByText('Good afternoon, Eddie');
  expect(textElement).toBeInTheDocument();
});

test('renders `Good evening` in the evening', () => {
  jest.spyOn(Date.prototype, "getHours").mockReturnValue(19);  // 7pm
  render(<Greeting name="Eddie"/>);
  const textElement = screen.getByText('Good evening, Eddie');
  expect(textElement).toBeInTheDocument();
});
