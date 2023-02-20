import store from '../redux/store'
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';

export const renderComponent=(component)=>{
    return(
        <Provider store={store}>
            <BrowserRouter>{component}</BrowserRouter>
       
        </Provider>
    )
}