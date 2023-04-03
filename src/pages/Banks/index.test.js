import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent, renderComponentwithRouterPath } from "../../utils/test_helper";
import renderer from "react-test-renderer";
import Banks from ".";
import BankAllAccounts from "../BankAllAccounts";
import userEvent from "@testing-library/user-event";
const user=userEvent.setup()
describe("Banks", () => {
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<Banks />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("shoul render images",()=>{
    renderComponent(<Banks />)
    const heading=screen.getByRole('heading', {
      name: /welcome user !/i
    })
    const subhead=screen.getByText(/here are your bank accounts linked with/i)
    const imge=screen.getAllByRole('img',{name:/bank logo/i})
    expect(heading).toBeInTheDocument()
    expect(subhead).toBeInTheDocument()
    expect(imge[0]).toBeInTheDocument()
  })
  test("should redirect to proper bank pages",()=>{
    
    renderComponentwithRouterPath(<Banks />,'/login/banks',[{path:":bankname",element:<BankAllAccounts/>}])
    user.click(screen.getAllByRole('img',{name:/bank logo/i})[0])
    waitFor(()=>{
      
      expect(screen.getByText(/Total Bank Accounts:/i)).toBeInTheDocument();
    })
    
  })
});
