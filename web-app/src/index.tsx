import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.querySelector('#root')
    );
};

if (module.hot) {
    module.hot.accept();
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();