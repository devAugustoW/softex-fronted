import './globals.css';
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
}