import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("Succesfully filtering the emoji list.", () => {
  render(<App />);
  const inputText = screen.getByText("100");
  expect(inputText).toBeInTheDocument("100");
});