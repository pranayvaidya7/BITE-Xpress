import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header componenet with a Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbtn = screen.getByRole("button", { name: "LogIn" });

  expect(loginbtn).toBeInTheDocument();
});

it("Should load Header componenet with a Cart Item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});

it("Should change LogIn button to LogOut", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logInBtn = screen.getByRole("button", { name: "LogIn" });
  fireEvent.click(logInBtn);
  const logOutBtn = screen.getByRole("button", { name: "LogOut" });
  expect(logOutBtn).toBeInTheDocument();
});
