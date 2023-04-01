import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import Banks from ".";

describe("Banks", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<Banks />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
