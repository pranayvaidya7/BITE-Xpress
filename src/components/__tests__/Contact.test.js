import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

it("Should load button name inside contact us component", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

describe("Contact us Page Test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });
  
  it("Should load input name inside contact us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load length of input boxes on the contact us component", () => {
    render(<Contact />);

    // quering
    const inputBx = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBx.length).toBe(2);
  });

  it("Should load 2 input boxes on the contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });

  it("Should load 2 input boxes on the contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(10);
  });
});

it("Should check if input boxes are rendered in the contact us component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  inputBoxes.forEach((input) => {
    expect(input).toBeInTheDocument();
  });
});
