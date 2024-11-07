'use client';
import React from 'react';
import BtnProspViaCep from './BtnPropsViaCep';
import BtnInputViaCep from './BtnInputViaCep';



const Aula03 = () => {

	return (
		<article className="p-4">
			<h1 className="text-3xl font-bold mb-4">Aula 03: Componentes com Props</h1>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Usando o Componente BtnViaCep com Props</h2>
				<p className="mb-4">É possível passar valores diretamente na TAG do componente para fazer a busca.</p>

				<BtnProspViaCep cep="54330-310" />
				<BtnProspViaCep cep="01001-000" />
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Buscar CEP</h2>
				<p className="mb-4">Digite um CEP e clique no botão para buscar os dados.</p>
				<BtnInputViaCep />
			

			</section>
		</article>
	);
};

export default Aula03;