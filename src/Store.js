import React, {useState} from 'react'
import NavBar from './components/NavBar/NavBar';

const Store = () => {
    const store = true;

    return (
        <div>
        <NavBar store/>
      <br/> <br/><br/>
            <h1>This is the store</h1>
        </div>
    )
}

export default Store
