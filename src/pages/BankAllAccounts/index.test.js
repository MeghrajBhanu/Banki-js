import { render, screen, waitFor} from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import BankAllAccounts from ".";
import userEvent from "@testing-library/user-event";
const user = userEvent.setup();


describe("BankAllAccounts", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<BankAllAccounts />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("initial screen should be rendered", () => {
    renderComponent(<BankAllAccounts />)
    const text=screen.findByText(/India/i)
    const text1=screen.findByText(/Hyderabad,Telangana/i)
    const accounts=screen.findByText(/Total Bank Accounts:2/i)
    waitFor(()=>{
      expect(text).toBeInTheDocument()
      expect(text1).toBeInTheDocument()
      expect(accounts).toBeInTheDocument()
    })
    
  });
  test("should render the table",()=>{
    
    const AccountNo=screen.findByText(/#Account No/i)
    const AccountType=screen.findByText(/Account Type/i)
    const Fixed_Deposits=screen.findByText(/Fixed Deposits/i)
    const Balance=screen.findByText(/#Account No/i)
    const fd=screen.findByText(/7/i)
    const Salary=screen.findByText(/Salary/i)
    const bal=screen.findByText(/30500/i)
    
    waitFor(()=>{
      expect(AccountNo).toBeInTheDocument();
      expect(AccountType).toBeInTheDocument();
      expect(Fixed_Deposits).toBeInTheDocument();
      expect(Balance).toBeInTheDocument();
      expect(fd).toBeInTheDocument();
      expect(Salary).toBeInTheDocument();
      expect(bal).toBeInTheDocument();

    })
  })
  test("store should have 2 accounts in data",()=>{
    let {store}=renderComponent(<BankAllAccounts />)
    waitFor(()=>{
      expect(store.getState().pan.data.length).toBe(2)
    })
    
  })
  test("should handle AddAccount",()=>{
    const button=screen.findByRole('button',{
      name:/Add Account/i
    })
    waitFor(()=>{
      expect(button).toBeInTheDocument()
      user.click(button)
      
      const checkbox = screen.findByRole("radio", { name: "Salary" });
      const checkbox2 = screen.findByRole("radio", { name: "Savings" });
      const Balance = screen.findByPlaceholderText("Balance");
      const FD = screen.findByPlaceholderText("FixedDeposits");
      expect(checkbox).toBeInTheDocument()
      expect(checkbox2).toBeInTheDocument()
      expect(Balance).toBeInTheDocument()
      expect(FD).toBeInTheDocument()
      
      
    })
    
  })
  test("should dispatch request",()=>{
    const button=screen.findByRole('button',{
      name:/Add Account/i
    })
    waitFor(()=>{
      expect(button).toBeInTheDocument()
      user.click(button)
      
      const checkbox = screen.findByRole("radio", { name: "Salary" });
      const checkbox2 = screen.findByRole("radio", { name: "Savings" });
      const Balance = screen.findByPlaceholderText("Balance");
      const FD = screen.findByPlaceholderText("FixedDeposits");
      const save=screen.findByRole("button",{name:"Save changes"})
      user.click(checkbox)
      user.type(Balance,2345)
      user.type(FD,2)

      //expect(checkbox).toBeInTheDocument()
      
      expect(Balance).toBe(2345)
      expect(FD).toBe(2)
      user.click(save)
      expect(screen.findByText("Account Created")).toBeInTheDocument()
      
    })
    
  })
  test("should validate invalid input",()=>{
    const button=screen.findByRole('button',{
      name:/Add Account/i
    })
    waitFor(()=>{
      expect(button).toBeInTheDocument()
      user.click(button)
      
      const checkbox = screen.findByRole("radio", { name: "Salary" });
      const checkbox2 = screen.findByRole("radio", { name: "Savings" });
      const Balance = screen.findByPlaceholderText("Balance");
      const FD = screen.findByPlaceholderText("FixedDeposits");
      const save=screen.findByRole("button",{name:"Save changes"})
      user.click(checkbox)
      user.type(Balance,5000)
      user.type(FD,10)

      //expect(checkbox).toBeInTheDocument()
      
      
      expect(screen.findByText("Balance should be less than 1000")).toBeInTheDocument()
      expect(screen.findByText("FixedDeposits should be less than 6")).toBeInTheDocument()

      
    })
    
  })
  
});