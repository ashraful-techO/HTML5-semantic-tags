// src/components/Button.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("renders button and clicks", () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);

  const btn = screen.getByText("Click Me");
  fireEvent.click(btn);

  expect(btn).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
