import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import BankDetails from ".";

describe("BankDetails", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<BankDetails />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
