import { render, screen } from "@testing-library/react";
import {Headeresponsive} from '../components/Headeresponsive'

describe("Header Test", () => {
  test("Header rendering", () => {
    const { getByText } = render(
      <Headeresponsive/>
    );
    const header = getByText("Explore");
    expect(header).toBeInTheDocument();
  });
  
});