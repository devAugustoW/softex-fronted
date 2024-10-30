"use client"
import React from 'react';

const ButtonAlert = () => {
  function salute() {
    alert("Saudações, Programador!");
  };

  return (
    <button onClick={salute} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4">
      Saudação
    </button>
  );
};

export default ButtonAlert;