"use client";
import { sculptureList } from './data';
import { useState } from 'react';

const Gallery = () => {
	const [index, setIndex] = useState(0);
	const [exampleIndex, setExampleIndex] = useState(0)
	const [showMore, setShowMore] = useState(false)


	function handleClick() {
		if (index === sculptureList.length - 1) setIndex(0);
		else setIndex(index + 1);
	}
	function previous(){
		if (index === 0) setIndex(sculptureList.length - 1);
		else setIndex(index - 1);
	}

	function changeExample() {
		setExampleIndex(exampleIndex + 1);
	}

	function handleShowMore() {
		setShowMore(!showMore);
	}

	let sculpture = sculptureList[index];
	let example = sculptureList[exampleIndex];

	return (
		<div className='bg-gray-200 flex flex-col gap-4 p-4 w-auto'>
			<h2 className='text-xl font-bold'>State: É a memória de um componente </h2>
			<div className='mb-6'>
				<button className='bg-yellow-500 text-white py-2 px-4 rounded mb-2 mr-4'
					onClick={previous}>Previous</button>
        <button className='bg-blue-500 text-white py-2 px-4 rounded self-start mb-2'
          onClick={handleClick}>Next
        </button>
        <h2 className='mb-2'>{sculpture.name} by</h2>
        <h2 className='mb-2'>{sculpture.artist}</h2>
        <p className='mb-2'>Img {index + 1} de {sculptureList.length}</p>
        <img className='w-[300px] h-[300px] mb-2'
          src={sculpture.url} alt={sculpture.alt} />
        <p className='mb-2'>{sculpture.description}</p>
      </div>
      
			<h2 className='text-xl font-bold'>Multiplos States para um componente </h2>
			<div className='mb-6'>
        <button className='bg-blue-500 text-white py-2 px-4 rounded mb-2'
          onClick={changeExample}>Next
        </button>
        <h2 className='mb-2'>{example.name} by</h2>
        <h2 className='mb-2'>{example.artist}</h2>
        <p className='mb-2'>Img {index + 1} de {sculptureList.length}</p>
				<button className='bg-green-500 text-white py-2 px-4 rounded mb-2'
					onClick={handleShowMore}>
					{showMore ? 'Hide' : 'Show'} details
				</button>
        <img className='w-[300px] h-[300px] mb-2'
          src={example.url} alt={example.alt} />
				{showMore && <p className='mb-2'>{example.description}</p>}
      </div>
    </div>
	)
}

export default Gallery;