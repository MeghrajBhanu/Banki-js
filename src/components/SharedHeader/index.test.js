import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import SharedHeader from ".";

describe("SharedHeader", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<SharedHeader />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});