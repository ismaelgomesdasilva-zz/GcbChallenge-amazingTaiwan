import { render } from "@testing-library/react";
import { CardsDestination } from "../components/CardsDestination";

describe("Cars test", () => {
  test("Title rendering", () => {
    const { getByText } = render(
      <CardsDestination src='/destination1.svg' width={277} height={408}/>
    );
    const Cards = getByText("Destinations");
    expect(Cards).toBeInTheDocument();
  });
  
  })
