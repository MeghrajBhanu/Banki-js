import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import Flagged from ".";

describe("Flagged", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<Flagged />)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render the  shared header anf filter button", () => {
    renderComponent(<Flagged />);
    const welcome = screen.findByText(/welcome/i);

    waitFor(() => {
      expect(welcome).toBeInTheDocument();
    });
  });
  test("data in form ofcards should be rendered", () => {
    renderComponent(<Flagged />);

    const AccountType = screen.findByText(/salary/i);
    const bankName = screen.findByText(/Bank3/i);
    const view = screen.findByRole("button", {
      name: /UnFlag/i,
    });
    waitFor(() => {
      expect(AccountType).not.toBeInTheDocument();
      expect(bankName).not.toBeInTheDocument();
      expect(view).not.toBeInTheDocument();
    });
  });
  test("redux store should recieve data", () => {
    let { store } = renderComponent(<Flagged />);
    expect(store.getState().pan.data.length === 0);
  });
  test("shouldhandle case were no flagged accounts are found", () => {
    renderComponent(<Flagged />);
    screen.logTestingPlaygroundURL();
    const oops = screen.findByRole("heading", {
      name: /oops!!/i,
    });
    const noaccounts = screen.findByRole("heading", {
      name: /there are no flagged accounts/i,
    });
    waitFor(() => {
      expect(noaccounts).toBeInTheDocument();
      expect(oops).toBeInTheDocument();
    });
  });
});
