import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
	return(
		<aside 
			className='w-[250px] bg-gray-200 min-h-screen p-4 flex-shrink-0'>
			<h2 className='text-2xl font-semibold mb-4'>Menu</h2>
			<nav>
				<ul className='space-y-4 ml-2'>
				<li><Link className='text-blue-600 hover:underline' href='/'>Home</Link></li>
					<li><Link className='text-blue-600 hover:underline' href='/aula01'>Aula 01</Link></li>
					<li><Link className='text-blue-600 hover:underline' href='/aula02'>Aula 02</Link></li>
					<li><Link className='text-blue-600 hover:underline' href='/atividade02'>Atividade 02</Link></li>
					<li><Link className='text-blue-600 houver:underline' href='/atividadeState'>Atividade State</Link></li>
					<li><Link className='text-blue-600 houver:underline' href='/aula03'>Aula 03</Link></li>
				</ul>
			</nav>
		</aside>
	)
}
export default Sidebar;