"use client";
import React from 'react'

const ButtonClick = () => {

	function click() {
		alert('Função executada com sucesso!');
	}

	return (
		<button 
			className='bg-green-500 text-white w-[150px] py-1 rounded font-semibold mb-4'
			onClick={click}>
				FUNÇÃO
		</button>
	)
}

export default ButtonClick