import { render, screen } from "@testing-library/react";
import RestCard from "../RestCard";
import { MOCK_DATA } from "../mocks/resCardMock"; // Ensure the path is correct
import "@testing-library/jest-dom";

describe("RestCard Component", () => {
  beforeEach(() => {
    render(<RestCard resData={MOCK_DATA} />);
  });

  it("should render the restaurant name", () => {
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
  });

//   it("should render the restaurant locality", () => {
//     const locality = screen.getByText(MOCK_DATA.info.locality);
//     expect(locality).toBeInTheDocument();
//   });

//   it("should render the cost for two", () => {
//     const costForTwo = screen.getByText(MOCK_DATA.info.costForTwo);
//     expect(costForTwo).toBeInTheDocument();
//   });

//   it("should render the average rating", () => {
//     const avgRating = screen.getByText(MOCK_DATA.info.avgRating.toString());
//     expect(avgRating).toBeInTheDocument();
//   });
});
