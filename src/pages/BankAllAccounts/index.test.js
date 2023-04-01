import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import BankAllAccounts from ".";

describe("BankAllAccounts", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<BankAllAccounts />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});