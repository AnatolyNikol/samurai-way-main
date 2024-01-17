import React from 'react';
import './index.css';
import {SamuraiJSApp} from "./App";
import ReactDOM from "react-dom";


// export const rerenderEntireTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </BrowserRouter>, document.getElementById('root')
//     );
// };


ReactDOM.render(<SamuraiJSApp/>,document.getElementById('root'));



