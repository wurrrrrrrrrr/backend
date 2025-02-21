import { useState } from 'react'
import ImageUploader from "./ImageUploader";
import "./App.css"
function App() {

  return (
    <div className='background'>
      <h2>Glaucoma detector</h2>
      <ImageUploader />
    </div>
  )
}

export default App
