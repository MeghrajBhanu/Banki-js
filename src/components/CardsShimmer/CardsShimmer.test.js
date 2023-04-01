import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import CardsShimmer from "./CardsShimmer";

describe("CardsShimmer", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<CardsShimmer />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});