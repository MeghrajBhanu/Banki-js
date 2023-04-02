import { render } from '@testing-library/react';
import store from '../redux/store'
import { BrowserRouter,MemoryRouter,Routes,Route} from 'react-router-dom'
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
export const renderComponentwithRouterPath=(component,path,routes)=>{
    return {
        ...render(
          <MemoryRouter initialEntries={[path]}>
            <Provider store={store}>
              <Routes>
                <Route path={path} element={component} />
                {routes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Routes>
            </Provider>
          </MemoryRouter>
        ),
        store,
      };
}