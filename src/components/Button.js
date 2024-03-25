import React from 'react';

export default function Button({className, children}){
    return(<button className = {`buttonGold ` + className}  >
       <p> ❊ {children} ❊</p>
    </button>)
}