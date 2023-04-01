import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import Navigation from "./Navigation";

describe("Navigation", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<Navigation />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});