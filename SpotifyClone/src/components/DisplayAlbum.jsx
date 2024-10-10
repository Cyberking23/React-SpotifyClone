import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router'

function DisplayAlbum() {
    const {id} =useParams();
    console.log(id)
  return (

    <div>
        <Navbar/>

    </div>
  )
}

export default DisplayAlbum