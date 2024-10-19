"use client";  // Isso transforma o componente em um Client Component
import React from 'react';

const MyButtonComponent = () => {
	function click(){
		alert('Clicou!');
	};

	return(
		<button onClick={click}
			className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
			My Button Component
		</button>
	)

}
export default MyButtonComponent;


