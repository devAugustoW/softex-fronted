import React from 'react';

const Aula01 = () => {
	return (
		<div className="p-2"> 
      <h2 className="text-3xl font-bold mb-4">Next.js com TypeScript</h2>
      <div className="p-4"> 
        <h2>Introdução</h2>

        <section className="aula mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Aula 01: Configuração do Ambiente
					</h2>
					<p className="mb-2">npx create-next-app@latest my-app --typescript</p>
					<h3 className="text-xl font-semibold mb-2">Estrutura de pastas</h3>
					
					<pre className="bg-gray-100 p-2 rounded mb-4">
						{`my-app/
├── .next/                 # Armazena arquivos de build
├── node_modules/
├── src/                   # Diretório principal
│   └── app/               # Diretório para componentes e páginas
│       ├── fonts/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.ts
│       └── page.tsx       # Página principal
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts          # Declarações de tipo para o Next.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json`}
					</pre>
					<h3 className="text-xl font-semibold mb-2">Explicando algumas pastas e arquivos</h3>
					<div className="mb-4">
						<h4 className="font-semibold">src/</h4>
						<p>
							Esta é a raiz do código do projeto. Todos os componentes, páginas,
							estilos e assets são organizados aqui.
						</p>
					</div>
					<div className="mb-4">
						<h4 className="font-semibold">app/</h4>
						<p>
							É onde se define as rotas, as páginas, componentes e layouts do
							seu aplicativo.
						</p>
					</div>
					<div className="mb-4">
						<h4 className="font-semibold">layout.tsx</h4>
						<p>
							É um componente que serve como um contêiner para outras páginas e
							componentes do aplicativo. Ele permite que você defina uma
							estrutura comum que será reutilizada em várias páginas, garantindo
							consistência na aparência e no comportamento do seu aplicativo.
						</p>
					</div>
					<h5 className="font-semibold mb-2">O que podemos definir no layout?</h5>
					<ul className="list-disc list-inside">
						<li>Componentes de layout: Header, Footer, Sidebar e etc.</li>
						<li>Modais acessíveis em diversas páginas.</li>
						<li>
							Notificações: notificações que exibem mensagens de sucesso, erro
							ou informação.
						</li>
						<li>
							Carregadores: carregador global que deve ser exibido durante as
							transições de página.
						</li>
						<li>
							SEO e Meta Tags: podemos incluir meta tags, títulos e descrições
							relevantes para todas as páginas.
						</li>
						<li>
							Providers: contexto de compartilhamento de dados com toda a
							aplicação.
						</li>
					</ul>
				</section>
	
			</div>
			
		</div>
	)
}

export default Aula01;