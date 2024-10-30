'use client'
import React, { useState } from 'react';

type CepData = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

const BtnViaCep = () => {
	const [cepData, setCepData] = useState<CepData | null>(null);
	const [loading, setLoading] = useState(false);


  const fetchViaCep = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://viacep.com.br/ws/54330-310/json/');
      const data = await response.json();
      setCepData(data);

			console.log(data)

    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setCepData(null);

    } finally {
      setLoading(false);

    }
  };

	return (

		<div>
			<button className='bg-green-700 mb-4 text-white rounded py-2 px-4'
			 onClick={fetchViaCep}>
				Via Cep
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
	)
}

export default BtnViaCep;