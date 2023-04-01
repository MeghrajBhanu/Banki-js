import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../utils/test_helper";
import renderer from "react-test-renderer";
import BankAccountsMap from "./BankAccountsMap";

describe("BankAccountsMap", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<BankAccountsMap />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});