import './globals.css';
import Sidebar from '@/app/components/Sidebar';

export default function RootLayout({ 
		children,
	}: Readonly<{ children: React.ReactNode; }>) {

	return (
		<html lang="pt-br">
			<body className="min-h-screen">
				<div className="">
					<Sidebar />

					<main className="flex-grow p-8 bg-gray-50 ml-[170px]">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}