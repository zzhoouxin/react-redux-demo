import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux'
import ClickDom from './components/click_dom';
import Reducers from './reducers'
import devToolsEnhancer from 'remote-redux-devtools';

const rootEl = document.getElementById('root')
const store = createStore(Reducers, devToolsEnhancer());
const render = () => ReactDom.render(
    <ClickDom add={() => store.dispatch({type: "add"})}
              less={() => store.dispatch({type: "less"})}
              value={store.getState()}

    />, rootEl
)

render();
store.subscribe(render)

