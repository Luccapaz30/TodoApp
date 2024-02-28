import React, { useState } from 'react'
import AddInput from './AddInput';

export default function FormDatos() {
    const [inputs, setInputs] = useState([]);

  const generateInputs = () => {
    const newInputs = [];
    for (let i = 0; i < 10; i++) {
      newInputs.push(
        <input
          key={i}
          type="text"
          placeholder={`Input ${i + 1}`}
          style={{ marginRight: '10px' }}
        />
      );
    }
    setInputs(newInputs);
  };

  return (
    <div>
      <button onClick={generateInputs}>Generar Inputs</button>
      <div>{inputs}</div>
    </div>
  );
}

