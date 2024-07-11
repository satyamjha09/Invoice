import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './Fun.css'

const FormComponent = () => {

  const [formData, setFormData] = useState({
     companyName: '',
     companyAddress: '',
     companyGSTIN: ''
  });

  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef();

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });

  return (

    <div>

      <form className="textcss" onSubmit={handleSubmit}>

        <input
          type="text"
          name="companyName"
          placeholder="Your Company Name"
          value={formData.companyName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="companyAddress"
          className="comadd"
          placeholder="Company Address"
          value={formData.companyAddress}
          onChange={handleChange}
        />

        <input
          type="text"
          name="companyGSTIN"
          className="your"
          placeholder="Your Company GSTIN"
          value={formData.companyGSTIN}
          onChange={handleChange}
        />

        <button type="submit"> Submit </button>

      </form>

      {showPreview && (

        <div>

          <div ref={previewRef}>

            <h2> Preview </h2>

            <p> Company Name: {formData.companyName}</p>
            <p> Company Address: {formData.companyAddress}</p>
            <p> Company GSTIN: {formData.companyGSTIN}</p>

          </div>

          <button onClick={handlePrint}> Download Preview </button>

        </div>
      )}
    </div>
  );
};

export default FormComponent;

