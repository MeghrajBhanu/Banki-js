import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helper";
import Register from ".";
import userEvent from "@testing-library/user-event";
import { mockRegisterData, mock_Invalid_RegisterData } from "./mockData";

const user = userEvent.setup();
describe("Register Page", () => {
  test("should show register heading", () => {
    renderComponent(<Register />);
    const value = screen.getAllByText(/Register/i);
    expect(value[0]).toBeInTheDocument();
  });

  test("should render the initial form", () => {
    renderComponent(<Register />);
    expect(screen.getByRole("textbox", { name: "name" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "email" })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "pancard" })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });
  test("should handle input changes", async () => {
    renderComponent(<Register />);
    
    const name = screen.getByRole("textbox", { name: "name" });
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const confirmpassword=screen.getByPlaceholderText("Confirm Password")
    const pancard = screen.getByRole("textbox", { name: "pancard" });
    await user.type(name, mockRegisterData.name);
    expect(name).toHaveValue(mockRegisterData.name);

    await user.type(email, mockRegisterData.email);
    expect(email).toHaveValue(mockRegisterData.email);

    await user.type(password, mockRegisterData.password);
    expect(password).toHaveValue(mockRegisterData.password);

    await user.type(confirmpassword, mockRegisterData.confirmpassword);
    expect(confirmpassword).toHaveValue(mockRegisterData.confirmpassword);

    await user.type(pancard, mockRegisterData.pancard);
    expect(pancard).toHaveValue(mockRegisterData.pancard);
  });
  test("should handle errors in input", async () => {
    renderComponent(<Register />);
    
    const name = screen.getByRole("textbox", { name: "name" });
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const confirmpassword=screen.getByPlaceholderText("Confirm Password")
    const pancard = screen.getByRole("textbox", { name: "pancard" });
    
    name.focus();
    await user.tab();
    expect(screen.getByText("Name is required")).toBeInTheDocument();

    email.focus();
    await user.tab();
    expect(screen.getByText("Email Address is required")).toBeInTheDocument();

    password.focus();
    await user.tab();
    expect(screen.getAllByText("Password Required")[0]).toBeInTheDocument();

    pancard.focus();
    await user.tab();
    expect(screen.getByText("Pan Number is required")).toBeInTheDocument();

    confirmpassword.focus();
    await user.tab();
    expect(screen.getAllByText("Password Required")).toHaveLength(2);

    await user.type(name, mock_Invalid_RegisterData.name);
    expect(screen.getByText("Invalid Name")).toBeInTheDocument();

    await user.type(email, mock_Invalid_RegisterData.email);
    expect(screen.getByText("Invalid Email Address")).toBeInTheDocument();

    await user.type(password, mock_Invalid_RegisterData.password);
    expect(screen.getByText("Invalid Password")).toBeInTheDocument();

    await user.type(confirmpassword, mock_Invalid_RegisterData.confirmpassword);
    expect(screen.getByText("Password Doesnt Match")).toBeInTheDocument();

    await user.type(pancard, mock_Invalid_RegisterData.pancard);
    expect(screen.getByText("Invalid Pan Number")).toBeInTheDocument();
  });
  test("should handle sucessfull registration",async()=>{
    
    let {store}=renderComponent(<Register />);
    const name = screen.getByRole("textbox", { name: "name" });
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const pancard = screen.getByRole("textbox", { name: "pancard" });
    const register=screen.getByRole('button', { name: /register/i });
    const confirmpassword=screen.getByPlaceholderText("Confirm Password")
    
    await user.type(name,mockRegisterData.name);
    await user.type(email, mockRegisterData.email);
    await user.type(password, mockRegisterData.password);
    await user.type(confirmpassword, mockRegisterData.confirmpassword);
    await user.type(pancard, mockRegisterData.pancard);
    await user.click(document.body);
    expect(register).toBeEnabled()
    await user.click(register);
    
    expect(store.getState().auth.success).toBe(true)
    
    

  })
  test("should handle unsucessfull registration(email)",async()=>{
    
    let {store}=renderComponent(<Register />);
    const name = screen.getByRole("textbox", { name: "name" });
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const pancard = screen.getByRole("textbox", { name: "pancard" });
    const register=screen.getByRole('button', { name: /register/i });
    const confirmpassword=screen.getByPlaceholderText("Confirm Password")
    
    await user.type(name,mockRegisterData.name);
    await user.type(email, "bhanum@gmail.com");
    await user.type(password, mockRegisterData.password);
    await user.type(confirmpassword, mockRegisterData.confirmpassword);
    await user.type(pancard, mockRegisterData.pancard);
    await user.click(document.body);
    expect(register).toBeEnabled()
    await user.click(register);
    
    expect(store.getState().auth.success).toBe(false)
    
    

  })
  
});
