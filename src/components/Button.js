import React from 'react';

export default function Button({children}){
    return(<button className = "buttonGold">
       <p> ❊ {children} ❊</p>
    </button>)
}