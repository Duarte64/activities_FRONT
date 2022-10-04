import { Fragment } from 'preact';
import Router from './app/routes';
import GlobalStyles from './app/styles/global';
import { ToastContainer } from 'react-toastify';


export function App() {
    return (
        <Fragment>
            <GlobalStyles />
            <Router /> 
            <ToastContainer />
        </Fragment>
    )
}
