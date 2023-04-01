import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import Modal from "./Modal";

describe("Modal", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<Modal />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});