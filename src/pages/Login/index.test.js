import { render, screen } from "@testing-library/react";
import { renderComponent,onlywrap } from "../../utils/test_helper";
import Login from ".";
import userEvent from "@testing-library/user-event";
import { mockLoginData, mock_Invalid_LoginData } from "./mockData";
import renderer from "react-test-renderer";
const user = userEvent.setup();
describe("Login Page", () => {
  test("should show Login heading", () => {
    renderComponent(<Login />);
    const value = screen.getAllByText(/Login/i);
    expect(value[0]).toBeInTheDocument();
  });

  test("should render the initial form", () => {
    renderComponent(<Login />);
    expect(screen.getByRole("textbox", { name: "email" })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "pancard" })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
  test("should handle input changes", async () => {
    renderComponent(<Login />);
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const pancard = screen.getByRole("textbox", { name: "pancard" });

    await user.type(email, mockLoginData.email);
    expect(email).toHaveValue(mockLoginData.email);

    await user.type(password, mockLoginData.password);
    expect(password).toHaveAttribute("type", "password");
    expect(password).toHaveValue(mockLoginData.password);

    await user.type(pancard, mockLoginData.pancard);
    expect(pancard).toHaveValue(mockLoginData.pancard);
  });
  test("should handle errors in input", async () => {
    renderComponent(<Login />);
    
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const pancard = screen.getByRole("textbox", { name: "pancard" });

    email.focus();
    await user.tab();
    expect(screen.getByText("Email Address is required")).toBeInTheDocument();

    password.focus();
    await user.tab();
    expect(screen.getByText("Password Required")).toBeInTheDocument();

    pancard.focus();
    await user.tab();
    expect(screen.getByText("Pan Number is required")).toBeInTheDocument();

    await user.type(email, mock_Invalid_LoginData.email);
    expect(screen.getByText("Invalid Email Address")).toBeInTheDocument();

    await user.type(password, mock_Invalid_LoginData.password);
    expect(screen.getByText("Invalid Password")).toBeInTheDocument();

    await user.type(pancard, mock_Invalid_LoginData.pancard);
    expect(screen.getByText("Invalid Pan Number")).toBeInTheDocument();
  });
  test("should handle unsucessfull login(email)",async()=>{
    let {store}=renderComponent(<Login/>);
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const pancard = screen.getByRole("textbox", { name: "pancard" });
    const login=screen.getByRole('button', { name: /login/i });
     
    await user.type(email, mockLoginData.email);
    await user.type(password, mockLoginData.password);
    await user.type(pancard, "POIYU1234L");
    await user.click(document.body);
    expect(login).toBeEnabled()
    await user.click(login);
    
    expect(store.getState().auth.token).toBe(null);  
  })
  test("should handle sucessfull Login",async()=>{
    
    let {store}=renderComponent(<Login />);
    screen.logTestingPlaygroundURL()
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const pancard = screen.getByRole("textbox", { name: "pancard" });
    const login=screen.getByRole('button', { name: /login/i });
    
    
    await user.type(email, mockLoginData.email);
    await user.type(password, mockLoginData.password);
    await user.type(pancard, mockLoginData.pancard);
    await user.click(document.body);
    expect(login).toBeEnabled()
    await user.click(login);
    
    expect(store.getState().auth.token).not.toBe(null);
    
    

  })
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<Login />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
