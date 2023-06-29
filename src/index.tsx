import React from 'react';
import './index.css';
import state from './redux/state'
import {rerenderEntireTree} from "./render";

// const rerenderEntireTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App state={state} addPost={addPost}/>
//         </BrowserRouter>, document.getElementById('root')
//     );
// };
//
rerenderEntireTree(state);

