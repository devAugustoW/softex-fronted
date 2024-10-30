"use client"
import React, { useState } from 'react';

const ChangeColor = () => {
	const [currentColorIndex, setCurrentColorIndex] = useState(0);
	const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-purple-500"];

	const changeColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

	return (
		<button
      onClick={changeColor}
      className={`px-4 py-2 text-white rounded ${colors[currentColorIndex]}`}
    >
			Mudar de cor
		</button>
	)
}

export default ChangeColor;