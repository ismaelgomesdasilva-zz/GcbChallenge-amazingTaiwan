import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";

describe("Button Test", () => {
  test("Title rendering", () => {
    const { getByText } = render(
      <Button title='Testing'/>
    );
    const button = getByText("Testing");
    expect(button).toBeInTheDocument();
  });
  test('Button redering',() => {
    render(<Button title='Testing'/>)
    expect(screen.getByRole('button')).not.toBeDisabled()
  })
});