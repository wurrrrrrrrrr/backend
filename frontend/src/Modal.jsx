import { useState } from "react";
import "./Modal.css"
import axios from "axios";

function ShowSaveModal({ifShowModal, setIfShowModal}) {
  // State for patient data
  const [patientData, setPatientData] = useState({
    name: "",
    glaucoma: "", // "yes" or "no"
    date: ""
  });

  // Handle changes for all inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle submit request
  const handleSubmit = async () => {
    try {
      await axios.post("http://127.0.0.1:5001/saveData", {
        name: patientData.name,
        glaucoma: patientData.glaucoma,
        date: patientData.date
      });
      console.log("Save data successfully");
      setIfShowModal(false); // Close the modal after successful submission
    } catch (error) {
      setPatientData({ name: "", glaucoma: "", date: "" }); // Reset state on error
      alert("Error saving data. Please try again.");
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      {ifShowModal && (
        <div className="modal-background">
          <button className="close" onClick={() => setIfShowModal(false)}>X</button>
          <div className="table">
            <div className="table-row">
              <p>Patient Name</p>
              <p>Birth Day</p>
              <p>Glaucoma</p>
            </div>
            <div className="table-row">
              <input
                type="text"
                name="name"
                value={patientData.name}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="date"
                value={patientData.date}
                onChange={handleInputChange}
              />
              <select
                name="glaucoma"
                value={patientData.glaucoma}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowSaveModal;
