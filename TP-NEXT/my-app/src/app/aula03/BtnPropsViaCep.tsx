'use client';
import { useState } from 'react';

type CepData = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

type BtnViaCepProps = {
  cep: string;
};

const BtnProspViaCep: React.FC<BtnViaCepProps> = ({ cep }) => {
	const [cepData, setCepData] = useState<CepData | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchViaApi = async () => {
		setLoading(true);

		try {
			const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)	
			const data = await response.json();

			setCepData(data);

		} catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setCepData(null);

    } finally {
      setLoading(false);

    }
	}
  

  return (
    <div>
			<button className='bg-green-700 mb-4 text-white rounded py-2 px-4'
				onClick={fetchViaApi}>
				Props Via Cep
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
}

export default BtnProspViaCep;
