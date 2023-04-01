import { render } from '@testing-library/react';
import store from '../redux/store'
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';

export const renderComponent=(component)=>{
    return {
        ...render(
            <Provider store={store}>
                <BrowserRouter>{component}</BrowserRouter>
            </Provider>
        ),
        store,
      };
}
export const onlywrap=(component)=>{
    return(
        <Provider store={store}>
            <BrowserRouter>{component}</BrowserRouter>
       
        </Provider>
    )
}
export const renderComponentwithRouterPath=(component)=>{
    return(
        <Provider store={store}>
            <BrowserRouter>{component}</BrowserRouter>
       
        </Provider>
    )
}