//Atividade02.tsx
import React from 'react';
import Quadrado from './Quadrado.tsx';
import Titulo from './Titulo.tsx';
import ButtonClick from './ButtonClick.tsx';
import ListaItens from './ListaItens.tsx';
import Imagem from './Imagem';
import Paragrafo from './Paragrafo';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

const Atividade02 = () => {
	return (
		<div>
			<Cabecalho />
			<Titulo />
			<Quadrado />
			<ButtonClick />
			<ListaItens />
			<Imagem 
        src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg" 
        alt="Descrição da imagem" 
      />
			<Paragrafo />
			<Rodape />
		</div>
	)
}

export default Atividade02