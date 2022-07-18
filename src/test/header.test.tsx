import { render, screen } from "@testing-library/react";
import {Header} from '../components/Header'

describe("Header Test", () => {
  test("Header rendering", () => {
    const { getByText } = render(
      <Header/>
    );
    const header = getByText("Explore");
    expect(header).toBeInTheDocument();
  });
  
});