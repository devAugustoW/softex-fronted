import React, { useState} from 'react';

type DataCep = {
	cep: string;
	logradouro: string;
	bairro: string;
	localidade: string;
	uf: string;
};

type RenderCepListProps = {
	cepDataList: DataCep[];
};

const RenderCepList: React.FC<RenderCepListProps> = ({ cepDataList }) => {
	const [showList, setShowList] = useState(false);
	const [displayList, setDisplayList] = useState<DataCep[]>([]);

	const handleShowList = () => {
		setDisplayList([...cepDataList]); 
		setShowList(true); 
	};

	return (
		<div>
			<button
				className="bg-green-500 text-white font-medium rounded px-4 py-2"
				onClick={handleShowList}
			>
				Exibir Lista de CEPs
			</button>

			{showList && (
				<div className="mt-4">
					<h3 className="text-xl font-semibold mb-2">Todos os CEPs Pesquisados:</h3>
					{displayList.length > 0 ? (
						displayList.map((cep, index) => (
							<div key={index} className="bg-gray-100 w-[450px] p-4 rounded mb-2">
								<p><strong>CEP:</strong> {cep.cep}</p>
								<p><strong>Logradouro:</strong> {cep.logradouro}</p>
								<p><strong>Bairro:</strong> {cep.bairro}</p>
								<p><strong>Localidade:</strong> {cep.localidade}</p>
								<p><strong>UF:</strong> {cep.uf}</p>
							</div>
						))
					) : (
						<p className="text-gray-500 mt-4">Nenhum CEP armazenado.</p>
					)}
				</div>
			)}
		</div>
	);
};

export default RenderCepList;