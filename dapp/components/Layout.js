import React from "react";
import Metamask from '../ethereum/getMetamask'; 

console.log('fromLayout');

const Layout = (props) => {
    return (
        <div>
            <Metamask />
            {props.children}
        </div>  )
};

export default Layout;
