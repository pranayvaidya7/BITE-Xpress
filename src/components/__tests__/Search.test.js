import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search the restaurant List for the input burger", async () => {

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(8);

  const srchBtn = screen.getByRole("button", { name: "Search" });

  const srchInput = screen.getByTestId("searchInput");

  fireEvent.change(srchInput, { target: { value: "burger" } });

  fireEvent.click(srchBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(2);
});

it("Should filter the top rated restaurant ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(1);
});
