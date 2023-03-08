import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helper";
import Register from ".";
import userEvent from "@testing-library/user-event";
import { mockRegisterData, mock_Invalid_RegisterData } from "./mockData";
const user = userEvent.setup();
describe("Register Page", () => {
  test("should show register heading", () => {
    render(renderComponent(<Register />));
    const value = screen.getAllByText(/Register/i);
    expect(value[0]).toBeInTheDocument();
  });

  test("should render the initial form", () => {
    render(renderComponent(<Register />));
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
    render(renderComponent(<Register />));
    const name = screen.getByRole("textbox", { name: "name" });
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const pancard = screen.getByRole("textbox", { name: "pancard" });
    await user.type(name, mockRegisterData.name);
    expect(name).toHaveValue(mockRegisterData.name);

    await user.type(email, mockRegisterData.email);
    expect(email).toHaveValue(mockRegisterData.email);

    await user.type(password, mockRegisterData.password);
    expect(password).toHaveAttribute("type", "password");
    expect(password).toHaveValue(mockRegisterData.password);

    await user.type(pancard, mockRegisterData.pancard);
    expect(pancard).toHaveValue(mockRegisterData.pancard);
  });
  test("should handle errors in input", async () => {
    render(renderComponent(<Register />));
    const name = screen.getByRole("textbox", { name: "name" });
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("Password");
    const pancard = screen.getByRole("textbox", { name: "pancard" });

    name.focus();
    await user.tab();
    expect(screen.getByText("Name is required")).toBeInTheDocument();

    email.focus();
    await user.tab();
    expect(screen.getByText("Email Address is required")).toBeInTheDocument();

    password.focus();
    await user.tab();
    expect(screen.getByText("Password Required")).toBeInTheDocument();

    pancard.focus();
    await user.tab();
    expect(screen.getByText("Pan Number is required")).toBeInTheDocument();

    await user.type(name, mock_Invalid_RegisterData.name);
    expect(screen.getByText("Invalid Name")).toBeInTheDocument();

    await user.type(email, mock_Invalid_RegisterData.email);
    expect(screen.getByText("Invalid Email Address")).toBeInTheDocument();

    await user.type(password, mock_Invalid_RegisterData.password);
    expect(screen.getByText("Invalid Password")).toBeInTheDocument();

    await user.type(pancard, mock_Invalid_RegisterData.pancard);
    expect(screen.getByText("Invalid Pan Number")).toBeInTheDocument();
  });
});
