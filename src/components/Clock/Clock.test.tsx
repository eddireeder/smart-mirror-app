import React from "react";
import { render, screen } from "@testing-library/react";
import Clock from "./Clock";

test('renders the time', () => {
  jest.spyOn(Date.prototype, "getHours").mockReturnValue(16);
  jest.spyOn(Date.prototype, "getMinutes").mockReturnValue(38);
  render(<Clock />);
  const textElement = screen.getByText('16:38');
  expect(textElement).toBeInTheDocument();
});

test('renders preceding 0 for hours < 10', () => {
  jest.spyOn(Date.prototype, "getHours").mockReturnValue(9);
  jest.spyOn(Date.prototype, "getMinutes").mockReturnValue(26);
  render(<Clock />);
  const textElement = screen.getByText('09:26');
  expect(textElement).toBeInTheDocument();
});

test('renders preceding 0 for minutes < 10', () => {
  jest.spyOn(Date.prototype, "getHours").mockReturnValue(12);
  jest.spyOn(Date.prototype, "getMinutes").mockReturnValue(3);
  render(<Clock />);
  const textElement = screen.getByText('12:03');
  expect(textElement).toBeInTheDocument();
});