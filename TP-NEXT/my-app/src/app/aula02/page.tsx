import React from 'react';
import MyButtonComponent from '@/app/components/MyButtonComponent';
import MyCountComponent from '@/app/components/MyCountComponent';

const Aula02 = () => {
  return (
    <article className="p-4"> 
      <h1 className="text-3xl font-bold mb-4">Aula 02: Componentes</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">O que são Componentes?</h2>
        <p className="mb-4">
          Um componente é uma parte reutilizável da interface de usuário que encapsula umcomportamento específico.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Exemplos de Componentes</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Button</li>
          <li>Input</li>
          <li>Card</li>
          <li>Modal</li>
          <li>Carousel</li>
          <li>Formulários</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Criando um Componente</h2>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <strong>Criar pasta para os componentes:</strong> Dentro da pasta <code>src</code>, criar pasta <code>components</code>.
          </li>
          <li className="mb-2">
            <strong>Criar um componente:</strong> Dentro da pasta <code>components</code>, crie um arquivo
            chamado <code>MyButtonComponent.tsx</code>.
          </li>
					<li>
						<strong>Inserir "use client" no componente: </strong>
						<code>
							 "use client"; por padrão, o sistema de rotas do Next.js (usando o diretório app/) trata todos os componentes como Server Components. No entanto, o MyButtonComponent está usando interatividade (como o evento onClick), que requer que ele seja tratado como um Client Component.
						</code>
					</li>
        </ol>
				<MyButtonComponent />
      </section>

			<section className="p-4">
				<h2 className='text-2xl font-semibold'>Componente Contador</h2>

				<div className="bg-gray-100 p-4 rounded mb-4">
          <pre className="bg-gray-200 p-4 rounded overflow-x-auto">
            <code className="text-sm">
              {`"use client";

import React, { useState } from "react";

const MyCountComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">
        Contador: {count}
      </h2>
      <div className="flex gap-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          onClick={decrement}
        >
          Decrementar
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Incrementar
        </button>
      </div>
    </div>
  );
};
export default MyCountComponent;`}
            </code>
          </pre>
        </div>

				<MyCountComponent />
			</section>

    </article>
  )
}

export default Aula02;