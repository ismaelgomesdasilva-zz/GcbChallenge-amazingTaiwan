import { render } from "@testing-library/react";
import { Button } from "../components/Button";

describe("Checkbox Test", () => {
  test("Testing button exist", () => {
    const { getByText } = render(
      <Button color="#FFF" title="Button" />
    );
    const button = getByText("Botão");
    expect(button).toBeTruthy();
  });
});