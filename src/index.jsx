import "./sass/normal.scss";
import "./fixed.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import Demo1 from './demo1'
import { HashRouter, BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux'
import { getStore } from './store.js'
import "../node_modules/highlight.js/styles/tomorrow.css";
import Global from "./component/global";
import HighorderArticle from "./component/article/highorder-article";
import HighorderArticlePublish from "./component/articlePublish/highorder-articlePublish";
import HighorderArticleDetail from "./component/articleDetail/highorder-articleDetail";

const requireAll = requireContext => requireContext
    .keys()
    .map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
requireAll(req)
// import './icons/dev.svg'; 管理api接口
import __API__ from './config.js'
window.__API__ = __API__

if (module.hot) {
    module
        .hot
        .accept()
}

// if(module.hot){     module.hot.accept(moduleId, callback); } if (module.hot)
// {     // console.log('Accepting the updated printMe module!');
// module.hot.accept('./normal.scss', function () { console.log('Accepting the
// updated printMe module!');         // printMe();       console.log('okok');
// }) }]

const store = getStore()
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Global/>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/demo1' component={Demo1} />
                    <Route path='/article' component={HighorderArticleDetail}/>
                    <Route path='/articlelist' component={HighorderArticle} />
                    <Route path='/edit' component={HighorderArticlePublish} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'))