import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import Modal1 from "./Modal1";

describe("Modal1", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<Modal1 />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});