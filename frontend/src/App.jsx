import { useState } from 'react'
import ImageUploader from "./ImageUploader"
import "./App.css"
import ShowSaveModal from "./Modal"
function App() {
  const [ifShowModal, setIfShowModal] = useState(false);
  return (
    <div className='background'>
      <h2>Glaucoma detector</h2>
      <ImageUploader 
        setIfShowModal = {setIfShowModal}
      />
      <ShowSaveModal 
        ifShowModal = {ifShowModal}
        setIfShowModal = {setIfShowModal}
      />
    </div>
  )
}

export default App
