'use client';
import React, { useState } from 'react';
import PropsBtnViaCep from './propsBtnViaCep';
import SearchCepButton from './searchCepButton';

type CepData = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

const Aula03 = () => {
  const [inputCep, setInputCep] = useState('');
  const [cepData, setCepData] = useState<CepData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCep(event.target.value);
  };

  const handleSearchClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${inputCep}/json/`);
      const data: CepData = await response.json();
      setCepData(data);
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setCepData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="p-4">
      <h1 className="text-3xl font-bold mb-4">Aula 03: Componentes com Props</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Usando o Componente BtnViaCep com Props</h2>
        <p className="mb-4">É possível passar valores diretamente na TAG do componente para fazer a busca.</p>

        <PropsBtnViaCep cep="54330-310" />
        <PropsBtnViaCep cep="01001-000" />
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Buscar CEP</h2>
        <p className="mb-4">Digite um CEP e clique no botão para buscar os dados.</p>
        <input
          type="text"
          value={inputCep}
          onChange={handleInputChange}
          className="border p-2 mb-4"
          placeholder="Digite o CEP"
        />
        <SearchCepButton onClick={handleSearchClick} />
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
      </section>
    </article>
  );
};

export default Aula03;