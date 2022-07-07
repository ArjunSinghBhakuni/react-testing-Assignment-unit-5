import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import App from "../App";

describe("Button Tests", () => {
  it("should have button in dom", () => {
    render(<Button>Click Me</Button>); //virtually
    let button = screen.getByText("Click Me"); //document.getElementById()
    expect(button).toBeInTheDocument();
  });

  it("should have button with text Click me in App.js", () => {
    render(<App></App>); //virtually
    let button = screen.getByTestId("cButton");
    expect(button).toBeInTheDocument();
  });

  it("should render empty button", () => {
    render(<Button></Button>);

    let button = screen.getByTestId("cButton");
    expect(button).toBeEmptyDOMElement();
  });

  it("should change theme", () => {
    render(<App></App>);

    let h3 = screen.getByText("Current Theme is light");
    expect(h3).toHaveTextContent("light");

    let themeButton = screen.getByText("Change Theme");
    fireEvent.click(themeButton);
    expect(h3).toHaveTextContent("dark");
  });

  it("should call the given function", () => {
    const mockfn = jest.fn(); // what this function is, what is the logic that this function works with

    render(<Button onClick={mockfn}>Click me</Button>);

    const btn = screen.getByTestId("cButton");
    fireEvent.click(btn);
    fireEvent.click(btn);

    // expect(mockfn).toBeCalled();
    expect(mockfn).toBeCalledTimes(2);
  });
});

//If our function is getting called or not?
// 1. We should get our button
//2. We should mimic the click event behavior
// 3. We should check if the function was triggered.

//<div></div>

//1. We wanted to access a button with text Click me inside App.js
//2. But the button is actually using the text "Change theme"
//3. So, by default the test should have failed.

//Expectations -> Actual Results

//Delete App.test.js
