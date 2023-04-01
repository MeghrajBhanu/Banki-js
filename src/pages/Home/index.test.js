import { render, screen } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from 'react-test-renderer';

import Home from ".";

describe("Home Page", () => {
  test("should show Home heading", () => {
    renderComponent(<Home />);
    const value = screen.getAllByText(
      /We are a services group focused on providing you/i
    );
    expect(value[0]).toBeInTheDocument();
  });
  test("snapshot test",()=>{
    const tree = renderer.create(onlywrap(<Home />)).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
