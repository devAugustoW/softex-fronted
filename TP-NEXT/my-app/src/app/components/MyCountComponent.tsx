"use client"
import React, { useState } from 'react';

const MyCountComponent = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count +1);
	const decrement = () => { if (count > 0) setCount(count - 1); } 

	return(
		<div className='flex flex-col items-center'>
			<h2 className='text-2xl font-semibold mb-4'>
				Contador: {count}
			</h2>
			<div className='flex gap-4'>
				<button 
					className='bg-red-500  houver:bg-red-700 text-white py-2 px-4 rounded'
					onClick={decrement}>
						Decrementar
				</button>
				<button 
					className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
					onClick={increment}>
						incrementar
				</button>
			</div>
		</div>
	);
};
export default MyCountComponent;