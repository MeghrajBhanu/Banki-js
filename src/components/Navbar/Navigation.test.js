import { render, screen, waitFor } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import { useDispatch} from "react-redux";
import renderer from "react-test-renderer";
import Navigation from "./Navigation";
import { LOGIN_REQUEST } from "../../redux/actions/actiontypes";

describe("Navigation", () => {
  
  test("snapshot test", () => {
    const tree = renderer.create(onlywrap(<Navigation />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("store testing",()=>{
    let {store}=renderComponent(<Navigation />)
    
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
  })
});