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