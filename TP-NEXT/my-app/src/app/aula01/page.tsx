import React from 'react';

const Aula01 = () => {
	return (
		<main className="p-4 flex-1 max-w-[90%] min-w-[300px] mx-auto "> 
      <h2 className="text-3xl font-bold mb-4">Next.js com TypeScript</h2>


			<section className="mb-6">
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
│       ├── layout.ts      # Arquivo 'provider'
│       └── page.tsx       # Página principal
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts          # Declarações de tipo para o Next.js
├── next.config.mjs        # Declarações de variáveis de ambiente
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json`}
				</pre>
			</section>

			<section className="mb-6">
				<h3 className="text-xl text-gray-800 font-semibold mb-2">Explicando algumas pastas e arquivos</h3>

				<div className='mb-4'>
					<h4 className="font-semibold text-gray-700">next.config.mjs/</h4>
					<p>
						é usado para configurar opções avançadas em projetos feitos com Next.js. Esse arquivo permite ajustar diversas configurações do framework, como otimização de imagens, manipulação de rotas, definições de variáveis de ambiente e outras opções de desempenho e comportamento da aplicação.
					</p>
					
					<div className='bg-gray-100 p-4 rounded mb-4'>
						<pre className="bg-gray-200 p-4 rounded overflow-x-auto">
							<code className="text-sm">
								{`/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa o modo estrito do React para detectar possíveis problemas
  reactStrictMode: true,

  // Configurações de otimização de imagens
  images: {
    domains: ['example.com'], // Permite carregar imagens de domínios específicos
    deviceSizes: [640, 750, 1080, 1200, 1920], // Define os tamanhos de dispositivos para otimização
  },

  // Redirecionamentos de URL
  async redirects() {
    return [
      {
        source: '/old-path', // URL antiga
        destination: '/new-path', // URL nova
        permanent: true, // Define se o redirecionamento é permanente (status 308)
      },
    ]
  },

  // Reescrita de rotas
  async rewrites() {
    return [
      {
        source: '/api/:path*', // URL original
        destination: 'https://external-api.com/:path*', // URL de destino externa
      },
    ]
  },

  // Suporte a internacionalização (i18n)
  i18n: {
    locales: ['en', 'pt', 'es'], // Idiomas disponíveis na aplicação
    defaultLocale: 'en', // Idioma padrão
  },

  // Configurações de Webpack personalizadas (opcional)
  webpack: (config) => {
    // Exemplo: adicione uma nova regra para lidar com arquivos .svg como React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  // Ativa o novo layout app router (somente em versões recentes do Next.js)
  experimental: {
    appDir: true, // Ativa o novo sistema de roteamento baseado em pastas
  },
}
export default nextConfig;`}
							</code>
						</pre>
					</div>
				</div>

				<div className="mb-4">
					<h4 className="font-semibold text-gray-700">src/</h4>
					<p className='text-gray-600'>
						Esta é a raiz do código do projeto. Todos os componentes, páginas,
						estilos e assets são organizados aqui.
					</p>
				</div>

				<div className="mb-4">
					<h4 className="font-semibold text-gray-700">app/</h4>
					<p>
						É onde se define as rotas, as páginas, componentes e layouts do
						seu aplicativo.
					</p>
				</div>

				<div className="mb-4">
					<h4 className="font-semibold text-gray-700">layout.tsx</h4>
					<p>
						É um componente que serve como um contêiner para outras páginas e
						componentes do aplicativo. Ele permite que você defina uma
						estrutura comum que será reutilizada em várias páginas, garantindo
						consistência na aparência e no comportamento do seu aplicativo.
					</p>
				</div>

				<h5 className="font-semibold mb-2 text-gray-700">O que podemos definir no layout?</h5>
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

			<section className="bg-gray-100 p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold mb-4">Estrutura de Páginas e Componentes</h2>
				
				{/* Explicação sobre páginas */}
				<div className="mb-6">
					<h3 className="text-xl font-semibold">Páginas (`page.tsx`)</h3>
					<p className="mt-2">
						No Next.js, o sistema de rotas é baseado em arquivos dentro da pasta <code className="bg-gray-200 p-1 rounded">/app</code>, onde cada pasta representa uma rota específica.
						O arquivo <code className="bg-gray-200 p-1 rounded">page.tsx</code> na raiz da pasta <code>/app</code> é a página inicial (home) da aplicação, funcionando como o ponto de entrada para o usuário.
						Esta página normalmente serve para introduzir o projeto ou oferecer funcionalidades principais. Para criar novas páginas, basta adicionar uma nova pasta dentro de <code className="bg-gray-200 p-1 rounded">/app</code> com o nome da rota desejada e incluir um arquivo <code className="bg-gray-200 p-1 rounded">page.tsx</code> dentro dela. 
						Assim, o Next.js entenderá automaticamente que essa pasta representa a rota <code className="bg-gray-200 p-1 rounded">/nome-da-página</code>, permitindo fácil navegação na aplicação.
					</p>
				</div>

				{/* Explicação sobre componentes */}
				<div>
					<h3 className="text-xl font-semibold">Componentes</h3>
					<p className=" mt-2">
						Componentes são blocos reutilizáveis de código que ajudam a construir interfaces de forma modular reduzindo a escrita e facilitando a manutanção. No Next.js, é comum organizar componentes dentro de uma pasta <code className="bg-gray-200 p-1 rounded">/components</code>.Componentes podem representar desde pequenos elementos, como botões e cabeçalhos, até seções inteiras da página, como uma sidebar.
					</p>
				</div>
			</section>
		</main>
	)
}

export default Aula01;