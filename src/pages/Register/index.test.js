import {render,screen} from '@testing-library/react';
import store from "../../redux/store"
import { BrowserRouter} from 'react-router-dom';
import Register from './index';
import { Provider } from 'react-redux';
describe("Register Page",()=>{
    test("Register page initial render should show form",()=>{
        render(
        <Provider store={store}>
            <BrowserRouter> <Register /></BrowserRouter>
       
        </Provider>
        );
        const value=screen.getAllByText(/Register/i);
        expect(value[0]).toBeInTheDocument();
    })
})
