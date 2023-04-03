import { screen, waitFor } from "@testing-library/react";
import { renderComponent, onlywrap } from "../../utils/test_helper";
import Landing from ".";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
const user = userEvent.setup();
describe("Landing Page", () => {
  test("snapshot", () => {
    const tree = renderer.create(onlywrap(<Landing />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should render the  shared header anf filter button", () => {
    renderComponent(<Landing />);
    const welcome = screen.findByText(/welcome/i);
    const filter = screen.findByRole("button", {
      name: /filter by/i,
    });
    waitFor(() => {
      expect(welcome).toBeInTheDocument();
      expect(filter).toBeInTheDocument();
    });
  });
  test("data in form ofcards should be rendered", () => {
    renderComponent(<Landing />);

    const AccountType = screen.findByText(/salary/i);
    const bankName = screen.findByText(/Bank3/i);
    const view = screen.findByRole("button", {
      name: /view more/i,
    });
    waitFor(() => {
      expect(AccountType).toBeInTheDocument();
      expect(bankName).toBeInTheDocument();
      expect(view).toBeInTheDocument();
    });
  });
  test("redux store should recieve data", () => {
    let { store } = renderComponent(<Landing />);
    expect(store.getState().pan.data.length >= 1);
  });
  test("pagination", () => {
    renderComponent(<Landing />);
    waitFor(() => {
      expect(screen.getByText(/◀/i)).toBeInTheDocument();
    });
  });
  test("Should handler filterrequests", () => {
    const { store } = renderComponent(<Landing />);
    const filter = screen.findByRole("button", {
      name: /filter by/i,
    });
    const fixed_deposits = screen.findByText("fixed_deposits");

    waitFor(() => {
      user.change(filter, { target: { value: "fixed_deposits" } });
      expect(fixed_deposits).toBeInTheDocument();
    
      expect(store.getState().pan.data.length ).toBe(0);
    });
  });
  test("check navbar",()=>{
    renderComponent(<Landing />)
    const landing=screen.findByText(/Landing/i)
    const flagged=screen.findByText(/Flagged/i)
    waitFor(()=>{
      expect(landing).toBeInTheDocument()
      expect(flagged).toBeInTheDocument()
    })
    
  })
});
