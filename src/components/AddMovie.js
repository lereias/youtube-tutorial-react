import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { movieCollectionRef } from '../lib/firestore.collections';

export default function AddMovie() {
    const [name, setName] = useState('');
  
    function handleSubmit(e) {
        e.preventDefault()
        if (name === '') {
            return
        }
        addDoc(movieCollectionRef, {name})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.message)
            })
        setName("");
    }

    return (
        <div>
        <h4>Add Movie</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Movie Name</label>
            <input 
                id='name' 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)}
            /> 
            <br/>
            <br/>          
            <button type='submit' className="Addbtn">Add movie</button>
        </form>
        </div>
    )
}
