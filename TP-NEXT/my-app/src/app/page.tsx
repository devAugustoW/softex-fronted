import React from "react";

const Home = () => {
  return (
    <main className="p-4 flex-1 max-w-[90%] min-w-[300px] mx-auto">
			<section className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo ao Projeto Next.js com TypeScript da Softex</h1>
				<p className="text-lg text-gray-700 mb-8">Este projeto visa acompanhar e demonstrar o progresso no curso de Next.js com TypeScript. Ao longo do  desenvolvimento, exploraremos como são criados e configurados componentes como botões, páginas, e chamadas de API, além de técnicas essenciais para construção de interfaces dinâmicas e interativas.
				</p>
			</section>

			{/* Resumo do Projeto */}
			<section className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto">
				<h2 className="text-2xl font-semibold text-gray-800 mb-6">Resumo das Aulas</h2>

				<div className="space-y-4">
					<div>
						<h3 className="text-xl font-semibold text-gray-700">Aula 01</h3>
						<ul className="list-disc list-inside text-gray-600 pl-4">
							<li>Configuração do Ambiente</li>
							<li>Estrutura de pastas e arquivos</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-gray-700">Aula 02</h3>
						<ul className="list-disc list-inside text-gray-600 pl-4">
							<li>Criação de Componentes - Header, Sidebar, Botão</li>
							<li>Integração com API</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-gray-700">Aula 03</h3>
						<ul className="list-disc list-inside text-gray-600 pl-4">
							<li>Uso de Props</li>
							<li>Renderização Condicional</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-gray-700">Aula 04</h3>
						<ul className="list-disc list-inside text-gray-600 pl-4">
							<li>Renderização Condicional de Listas</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
  );
};

export default Home;
