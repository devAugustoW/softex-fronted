'use client';
import { useState } from 'react';
import FetchCepData from './fetchCepData';
import RenderCepList from './renderCepList';

type DataCep = {
	cep: string;
	logradouro: string;
	bairro: string;
	localidade: string;
	uf: string;
};

const Aula04 = () => {
	const [inputCep, setInputCep] = useState('');
	const [cepDataList, setCepDataList] = useState<DataCep[]>([]); // Estado movido para o componente pai

	return (
		<article className="p-4">
			<h2 className="text-3xl font-bold mb-4">
				Aula 04: Renderização de Lista e Renderização Condicional de Lista
			</h2>

			<section className="mb-6">
				<h3 className="text-2xl mb-2">Renderização de Lista</h3>

				<div className="flex bg-gray-200 rounded mb-4 p-2 ">
					<input
						type="text"
						placeholder="Digite um CEP"
						className="border p-2 mr-2 h-10 border-slate-400"
						value={inputCep}
						onChange={(e) => setInputCep(e.target.value)}
					/>

					<FetchCepData cepInput={inputCep} setCepDataList={setCepDataList} />
				</div>

				{/* Passando cepDataList para RenderCepList para renderizar a lista */}
				<div>
					<RenderCepList cepDataList={cepDataList} />
				</div>
			</section>
		</article>
	);
};

export default Aula04;