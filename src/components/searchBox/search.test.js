import React from "react";
import renderer from "react-test-renderer";

import { SearchBox } from ".";

import { render, fireEvent, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

const setup = () => {
  const utils = render(
    <SearchBox handleChange={(value) => console.log(value)} />
  );
  const input = screen.getByLabelText("SearchInput");
  return {
    input,
    ...utils,
  };
};
test("It should  set input value", () => {
  let mockFn = jest.fn();
  SearchBox.handleChange = mockFn();
  const { input } = setup();
  fireEvent.change(input, { target: { value: "dob" } });
  expect(input.value).toBe("dob");
  expect(mockFn).toHaveBeenCalled();
});

test("search snapshot testing", () => {
  const element = renderer
    .create(<SearchBox handleChange={(value) => console.log(value)} />)
    .toJSON();
  expect(element).toMatchSnapshot();
});
