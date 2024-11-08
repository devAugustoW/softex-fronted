'use client';
import React, { useState } from 'react';

type DataCep = {
	cep: string;
	logradouro: string;
	bairro: string;
	localidade: string;
	uf: string;
};

type FetchCepDataProps = {
	cepInput: string;
	setCepDataList: React.Dispatch<React.SetStateAction<DataCep[]>>;
};

const FetchCepData: React.FC<FetchCepDataProps> = ({ cepInput, setCepDataList }) => {
	const [cepData, setCepData] = useState<DataCep | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchViaCep = async () => {
		if (!cepInput) return;
		try {
			setLoading(true);

			const response = await fetch(`https://viacep.com.br/ws/${cepInput}/json/`);
			const data = await response.json();

			// Verifica se os dados são válidos e adiciona ao estado do componente pai
			if (data && data.cep) {
				setCepData(data);
				setCepDataList((prevList) => [...prevList, data]);
			} else {
				console.log('CEP não encontrado');
			}
		} catch (error) {
			console.error("Erro ao buscar o CEP:", error);
			setCepData(null);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<button
				className="bg-yellow-600 text-white rounded mb-4 px-4 py-2"
				onClick={fetchViaCep}
			>
				Dados do CEP
			</button>

			{loading && <p>Carregando...</p>}

			{cepData && (
				<div className='bg-gray-100 w-[450px] p-4 rounded'>
					<p><strong>CEP:</strong> {cepData.cep}</p>
					<p><strong>Logradouro:</strong> {cepData.logradouro}</p>
					<p><strong>Bairro:</strong> {cepData.bairro}</p>
					<p><strong>Localidade:</strong> {cepData.localidade}</p>
					<p><strong>UF:</strong> {cepData.uf}</p>
				</div>
			)}
		</div>
	);
};

export default FetchCepData;