"use client";
import { sculptureList } from "./data";
import { useState } from "react";
import Image from 'next/image';

const Gallery = () => {
	const [index, setIndex] = useState(0);
	const [exampleIndex, setExampleIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	function handleClick() {
		if (index === sculptureList.length - 1) setIndex(0);
		else setIndex(index + 1);
	}
	function previous() {
		if (index === 0) setIndex(sculptureList.length - 1);
		else setIndex(index - 1);
	}

	function changeExample() {
		setExampleIndex(exampleIndex + 1);
	}

	function handleShowMore() {
		setShowMore(!showMore);
	}

	const sculpture = sculptureList[index];
	const example = sculptureList[exampleIndex];

	return (
		<div className=" flex flex-col gap-4  w-auto">
			<h2 className="text-xl font-bold">
			Atividade State documentação Next JS.
			</h2>
			<div className="mb-6 bg-gray-200 p-4">
			<button
				className="bg-yellow-500 text-white py-2 px-4 rounded mb-2 mr-4"
				onClick={previous}
			>
				Previous
			</button>
			<button
				className="bg-blue-500 text-white py-2 px-4 rounded self-start mb-2"
				onClick={handleClick}
			>
				Next
			</button>
			<h2 className="mb-2">{sculpture.name} by</h2>
			<h2 className="mb-2">{sculpture.artist}</h2>
			<p className="mb-2">
				Img {index + 1} de {sculptureList.length}
			</p>
			<Image
					className="w-[300px] h-[300px] mb-2"
					src={sculpture.url}
					alt={sculpture.alt}
					width={300}
					height={300}
					/>
			<p className="mb-2">{sculpture.description}</p>
			</div>

			<h2 className="text-xl font-bold">
			Multiplos States para um componente{" "}
			</h2>
			<div className="mb-6">
			<button
				className="bg-blue-500 text-white py-2 px-4 rounded mb-2"
				onClick={changeExample}
			>
				Next
			</button>
			<h2 className="mb-2">{example.name} by</h2>
			<h2 className="mb-2">{example.artist}</h2>
			<p className="mb-2">
				Img {index + 1} de {sculptureList.length}
			</p>
			<button
				className="bg-green-500 text-white py-2 px-4 rounded mb-2"
				onClick={handleShowMore}
			>
				{showMore ? "Hide" : "Show"} details
			</button>
			<Image
					className="w-[300px] h-[300px] mb-2"
					src={example.url}
					alt={example.alt}
					width={300}
					height={300}
				/>
			{showMore && <p className="mb-2">{example.description}</p>}
			</div>
		</div>
	);
};

export default Gallery;
