import React from 'react';

// class Hello extends React.Component {  // React.component を継承するクラスの定義
//     render() {  // React 要素 を返り値とする render メソッドを定義
//         const todoList = ["Uniqlo", "GU", "StyleHint"]
//         return (
//             <div>
//                 <div className="fr-heading -h1 u-align-center">
//                     Hello React
//                 </div >
//                 <div className="fr-heading -h2 u-align-center">
//                     {'React'}
//                     {12 + 34}
//                     {[1, 2, 3]}
//                     {<p>this is new</p>}
//                     <ul>
//                         {
//                             todoList.map((item, index) =>
//                                 <li key={index}>{item}</li>
//                             )
//                         }
//                     </ul>
//                 </div>

//             </div>
//         );
//     }
// }

class Hello extends React.Component {
    render() {
        const hello = <div>hello</div>;
        console.log(hello);
        return React.createElement("div", {
            className: "fr-heading -h1"
        }, "Hello React");
    }
}

export default Hello;
