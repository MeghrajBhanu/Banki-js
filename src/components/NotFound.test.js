import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../utils/test_helper";
import renderer from "react-test-renderer";
import NotFound from "./NotFound";

describe("NotFound", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<NotFound />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});