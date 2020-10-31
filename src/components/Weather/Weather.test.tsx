import React from "react";
import { render } from "@testing-library/react";
import Weather from "./Weather";
import Axios from "axios";

test('makes axios request', () => {
  const spy = jest.spyOn(Axios, "get");
  render(<Weather />);
  expect(spy).toBeCalled();
});