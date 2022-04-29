import React, { useState, useEffect } from 'react';
import { onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase'
import { movieCollectionRef } from '../lib/firestore.collections';

export default function RealtimeMovies() {
  
    const [movies, setMovies] = useState([])

    useEffect(() => {

        const unsubscribe = onSnapshot(movieCollectionRef, snapshot => {
            setMovies(snapshot.docs.map(doc => ({
                id: doc.id, data: doc.data()
            })))
        })

        return () => {
            unsubscribe()
        }
    }, [] )
  
    function deleteMovie(id) {
        const docRef = doc(db, 'movies', id)
        deleteDoc(docRef)
            .then(() => console.log('Document deleted'))
            .catch(error => console.log(error.message))
    }

    return (
    <div>
        <h4>RealtimeMovies</h4>
        <ul className='no-bullets'>
            {movies.map(movie => (
                <li key={movie.id}>
                    {movie.id} : {movie.data.name}
                    <button onClick={() => deleteMovie(movie.id)}>delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
