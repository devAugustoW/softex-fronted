import React from 'react';
import Salute from './Salute';
import ChangeColor from './ChangeColor';
import BtnViaCep from './BtnViaCep'


const Aula02 = () => {
  return (
    <article className="p-4"> 
      <h1 className="text-3xl font-bold mb-4">Aula 02: Componentes</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Componentes </h2>
        <p className="mb-4">
         	São elementos modularizados e reutilizaveis. Reduzem a escrita de código e facilita a manutenção.
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
            <strong>Criar pasta para os componentes:</strong> Dentro da pasta <code>'app'</code>, criar pasta <code>components</code>.
          </li>
          <li className="mb-2">
            <strong>Criar um componente:</strong> Dentro da pasta <code>components</code>, crie um arquivo chamado <code>Sidebar.tsx</code>.
          </li>
        </ol>

      </section>

			<section className="p-4">
				<h2 className="text-2xl font-semibold">Componente Sidebar</h2>
				<p>Dentro da pasta 'components', crie o arquivo 'Sidebar.tsx'</p>

				<div className="bg-gray-100 p-4 rounded mb-4">
					<pre className="bg-gray-200 p-4 rounded overflow-x-auto">
						<code className="text-sm">
							{`import Link from 'next/link';
import React from 'react';

const Sidebar = () => {

  return(
    <aside 
      className='w-[250px] min-h-screen bg-gray-200 flex-shrink-0'>
      <h2 className='text-2xl font-semibold mb-4'>Menu</h2>
      <nav>
        <ul className='space-y-4 ml-2'>
          <li><Link className='text-blue-600 hover:underline' href='/'>Home</Link></li>
          <li><Link className='text-blue-600 hover:underline' href='/aula01'>Aula 01</Link></li>
          <li><Link className='text-blue-600 hover:underline' href='/aula02'>Aula 02</Link></li>
          <li><Link className='text-blue-600 hover:underline' href='/atividade02'>Atividade 02</Link></li>
          <li><Link className='text-blue-600 hover:underline' href='/atividadeState'>Atividade State</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
export default Sidebar;`}
						</code>
					</pre>
				</div>

				<p>Importar Sidebar em <code>layout.tsx</code></p>
				<div className='bg-gray-100 p-4 rounded mb-4'>
					<pre className="bg-gray-200 p-4 rounded overflow-x-auto">
						<code className="text-sm">
							{`import './globals.css';
import Sidebar from '@/app/components/Sidebar';

export default function RootLayout({ 
	children,
}: Readonly<{ children: React.ReactNode; }>) {

	return (
		<html lang="pt-br">
			<body className='flex'>
			<Sidebar />

				<main className='flex-grow p-8'>
					{children}
				</main>
			</body>
		</html>
	);
}`}
						</code>
					</pre>
				</div>
			</section>

			<section className="p-4">
				<h2 className="text-2xl font-semibold">Componente Header</h2>
				<p>Dentro da pasta 'components', crie o arquivo 'Header.tsx'</p>

				<div className="bg-gray-100 p-4 rounded mb-4">
					<pre className="bg-gray-200 p-4 rounded overflow-x-auto">
						<code className="text-sm">
{`import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b border-black py-5">
      <nav>
        <ul className="flex justify-center gap-4">
          <li><Link href="/">Página Home</Link></li>
          <li><Link href="/register">Página Register</Link></li>
          <li><Link href="/sign-in">Página SignIn</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;`}
						</code>
					</pre>
				</div>

				<p>Importar Header em <code>layout.tsx</code></p>
				<div className='bg-gray-100 p-4 rounded mb-4'>
					<pre className="bg-gray-200 p-4 rounded overflow-x-auto">
						<code className="text-sm">
{`import './globals.css';
import Sidebar from '@/app/components/Sidebar';
import Header  from './components/Header';

export default function RootLayout({ 
		children,
	}: Readonly<{ children: React.ReactNode; }>) {

	return (
		<html lang="pt-br">
			<body className="flex flex-col min-h-screen">
				<Header />

				<div className="flex flex-grow">
					<Sidebar />

					<main className="flex-grow p-8 bg-gray-50">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}`}
						</code>
					</pre>
				</div>
			</section>

			<section className="p-4">
				<h2 className="text-2xl font-semibold">Componente Button</h2>
				<p>Vamos criar alguns botões e realizar algumas ações com eles.</p>

				<div className="flex flex-col mt-4 mb-4">
					<p className="text-lg mb-2">Saudação com alert</p>
					<p>Criar componente 'Salute':</p>

					<div className="bg-gray-100 p-4 rounded mb-4">
						<p>
							Dentro da pasta <code>components</code>, crie o arquivo <code> Salute.tsx</code>:
						</p>

						<div className="bg-gray-100 p-4 rounded mb-4">
							<pre className="bg-gray-200 p-4 rounded overflow-x-auto">
								<code className="text-sm">
									{`"use client"
import React from 'react';

const Salute = () => {

  function showSalute() {
    alert("Saudações, Programador!");
  };

  return (
    <button 
      onClick={showSalute} 
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4">
      Saudação
    </button>
  );
};

export default Salute;`}
								</code>
							</pre>
						</div>
						<p>Importar componente Salute em aula02.tsx</p>

						<p>
							Neste código, usamos o comando <code>'use client'</code> no início do
							componente. Esse comando indica que o componente <code>Salute</code>{' '}
							deve ser executado no lado do cliente (navegador). Isso é necessário
							porque a função <code>alert</code> só funciona no navegador e não no
							servidor.
						</p>

						<p>
							O botão "Saudação" chama a função <code>showSalute</code> ao ser
							clicado, exibindo uma mensagem de saudação em um alerta. As classes do
							Tailwind aplicam estilos como cor de fundo, bordas arredondadas e
							mudança de cor ao passar o mouse.
						</p>
					</div>

					<Salute />
					<ChangeColor />
				</div>
			</section>

			<section className="p-4">
			<h2 className="text-2xl font-semibold mb-4"> Integrar botão com API Via Fetch</h2>

			<BtnViaCep />
			</section>
    </article>
  )
}

export default Aula02;