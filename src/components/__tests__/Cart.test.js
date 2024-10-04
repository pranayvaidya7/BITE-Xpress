import RestMenu from "../RestMenu";
import { render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMocks.json";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";
import appStore from "../../utils/appStore";
import { fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianH = screen.getByText("Monsoon Combos (4)");
  fireEvent.click(accordianH);

  const val = screen.getAllByTestId("foodItems");
  expect(val.length).toBe(4);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);

  const val2 = screen.getByText("Cart -(1 items)");
  expect(val2).toBeInTheDocument();
  fireEvent.click(addBtn[1]);

  const val3 = screen.getByText("Cart -(2 items)");
  expect(val3).toBeInTheDocument();
  expect(val.length).toBe(4);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(4);

  expect(
    screen.getByText("Cart is Empty. Please Add Items to your Cart.🍀")
  ).toBeInTheDocument();
});
