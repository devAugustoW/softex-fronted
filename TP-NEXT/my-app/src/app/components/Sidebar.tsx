import Link from 'next/link';
import React from 'react';

const Sidebar = () => {

	return(
		<aside 
			className='bg-gray-200 h-screen w-[250px] p-4'>
			<h2 className='text-2xl font-semibold mb-4'>Menu</h2>
			<nav>
				<ul className='space-y-4 ml-2'>
					<li><Link className='text-blue-600 hover:underline' href='/'>Home</Link></li>
					<li><Link className='text-blue-600 hover:underline' href='/aula01'>Aula 01</Link></li>
					<li><Link className='text-blue-600 hover:underline' href='/aula02'>Aula 02</Link></li>
					<li><Link className='text-blue-600 hover:underline' href='/atividade02'>Atividade 02</Link></li>
					<li><Link className='text-blue-600 houver:underline' href='/atividadeState'>Atividade State</Link></li>
				</ul>
			</nav>
		</aside>
	)
}
export default Sidebar;