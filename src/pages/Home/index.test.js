import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helper";
import Home from ".";
describe("Home Page", () => {
  test("should show Home heading", () => {
    render(renderComponent(<Home />));
    const value = screen.getAllByText(
      /We are a services group focused on providing you/i
    );
    expect(value[0]).toBeInTheDocument();
  });
});
