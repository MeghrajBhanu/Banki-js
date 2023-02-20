import {render,screen} from '@testing-library/react';
import {renderComponent} from "../../utils/test_helper"
import Login from '.';
import userEvent from '@testing-library/user-event';
import { mockLoginData,mock_Invalid_LoginData } from './mockData';
const user = userEvent.setup();
describe("Login Page",()=>{
    test("should show Login heading",()=>{
        render(
        renderComponent(<Login />)
        );
        const value=screen.getAllByText(/Login/i);
        expect(value[0]).toBeInTheDocument();
    })

    test("should render the initial form",()=>{
        render(renderComponent(<Login />))
        expect(screen.getByRole('textbox',{name:"email"})).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'pancard' })).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    })
    test('should handle input changes', async () => {
        render(renderComponent(<Login />));
        const email = screen.getByRole('textbox', { name: 'email' });
        const password = screen.getByPlaceholderText('Password');
        const pancard=screen.getByRole('textbox', { name: 'pancard' });
        
        await user.type(email, mockLoginData.email);
        expect(email).toHaveValue(mockLoginData.email);

        await user.type(password, mockLoginData.password);
        expect(password).toHaveAttribute('type', 'password');
        expect(password).toHaveValue(mockLoginData.password);
    
        await user.type(pancard, mockLoginData.pancard);
        expect(pancard).toHaveValue(mockLoginData.pancard);
    
       
      });
    test('should handle errors in input', async () => {
        render(renderComponent(<Login />));

        const email = screen.getByRole('textbox', { name: 'email' });
        const password = screen.getByPlaceholderText('Password');
        const pancard=screen.getByRole('textbox', { name: 'pancard' });
        
        email.focus();
        await user.tab();
        expect(screen.getByText('Email Address is required')).toBeInTheDocument();
        
        password.focus();
        await user.tab();
        expect(screen.getByText('Password Required')).toBeInTheDocument();

        pancard.focus();
        await user.tab();
        expect(screen.getByText('Pan Number is required')).toBeInTheDocument();

        await user.type(email, mock_Invalid_LoginData.email);
        expect(screen.getByText('Invalid Email Address')).toBeInTheDocument();

        await user.type(password, mock_Invalid_LoginData.password);
        expect(screen.getByText('Invalid Password')).toBeInTheDocument();
        
        await user.type(pancard, mock_Invalid_LoginData.pancard);
        expect(screen.getByText('Invalid Pan Number')).toBeInTheDocument();
       
      });
})
