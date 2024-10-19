import './globals.css';
import Sidebar from '@/app/components/Sidebar';

export default function RootLayout({ children,}:
	Readonly<{ children: React.ReactNode; }>) {

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
}