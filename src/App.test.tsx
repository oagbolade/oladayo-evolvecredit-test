import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Button from "./Components/Button";

test("renders react app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Button/i);
  expect(linkElement).toBeInTheDocument();
});

test("Expect button component to render", () => {
  render(<Button>Hello Button</Button>);
  const buttonComponent = screen.getAllByTestId("button");
  waitFor(() => expect(buttonComponent).toBeInTheDocument());
});

test("I expect this test to fail :)", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello77 Button22/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<Button>Click Me</Button>);
  const buttonComponent = screen.getAllByTestId("button");
  waitFor(() => expect(buttonComponent).toHaveTextContent(/Click Me/i));
});

test("Renders with a className equivalent to the color variant", () => {
  const { container } = render(<Button color="secondary">Hello Button</Button>);
  expect(
    container.getElementsByClassName("bg-grey-500 hover:bg-grey-400").length
  ).toBe(1);
});
