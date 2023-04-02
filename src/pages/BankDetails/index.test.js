import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent ,renderComponentwithRouterPath} from "../../utils/test_helper";
import renderer from "react-test-renderer";
import BankDetails from ".";
import userEvent from "@testing-library/user-event";
import Modal from "../../components/Modal/Modal";
const user = userEvent.setup();
describe("BankDetails", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<BankDetails />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should render the bank logo",()=>{
    renderComponent(<BankDetails />)
    const logo=screen.getByRole('img', {
      name: /banklogo/i
    });
    expect(logo).toBeInTheDocument()
  })
  test("should render all details of the bank account",()=>{
    renderComponent(<BankDetails />)
    const heding=screen.getByRole('heading', {
      name: /your details associated with/i
    })
    const name=screen.getByRole('heading', {
      name: /registerd name:/i
    })
    const email=screen.getByText(/email:/i)
    const fd=screen.getByText(/fixeddeposits:/i)
    const balance=screen.getByText(/total balance:/i)
    const accounttype=screen.getByText(/accounttype:/i)
    const accno=screen.getByText(/accountnumber:/i)
    const pan=screen.getByRole('heading', {
      name: /pancard:/i
    })
    const back=screen.getByRole('button', {
      name: /return/i
    })
    const not_your_account=screen.getByRole('button', {
      name: /not your account\?/i
    })
    expect(heding).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(fd).toBeInTheDocument()
    expect(balance).toBeInTheDocument()
    expect(accounttype).toBeInTheDocument()
    expect(accno).toBeInTheDocument()
    expect(pan).toBeInTheDocument()
    expect(back).toBeInTheDocument()
    expect(not_your_account).toBeInTheDocument()

  })
  test("should handle modal on not your account  user click",()=>{
    renderComponent(<BankDetails />)
    const not_your_account=screen.getByRole('button', {
      name: /not your account\?/i
    })
    expect(not_your_account).toBeInTheDocument()
    user.click(not_your_account)
    waitFor(()=>{
      expect(screen.getByText(/are you sure you want to flag this account\?/i)).toBeInTheDocument()
      expect(screen.getByText(/×/i)).toBeInTheDocument()
      expect(getByRole('button', { name: /no/i, hidden: true })).toBeInTheDocument()
    })

  })
  test("should redirect to Modal component",()=>{
    renderComponentwithRouterPath(<BankDetails />,"/login/landing/:id",[{ path: '/success', element: <Modal/> }])
    const not_your_account=screen.getByRole('button', {
      name: /not your account\?/i
    })
    expect(not_your_account).toBeInTheDocument()
    user.click(not_your_account)
    const yes=screen.getByRole('button', { name: /yes/i, hidden: true })
    user.click(yes)
    waitFor(()=>{
      expect(screen.getByText(/successfull!/i).toBeInTheDocument())
    })

  })
  test("should redirect to Landing component",()=>{
    renderComponentwithRouterPath(<BankDetails />,"/login/landing/:id",[{ path: '/login/landing', element: <Modal/> }])
    const ret=screen.getByRole('button', {
      name: /return/i
    })
    expect(ret).toBeInTheDocument()
    user.click(ret)
    waitFor(()=>{
      expect(screen.getByText(/welcome/i).toBeInTheDocument())
    })

  })


});
