// Imagem.tsx
import React from 'react';

// Definindo os tipos das propriedades que o componente receberá
type ImagemProps = {
  src: string; // URL da imagem
  alt: string; // Descrição alternativa
};

// Criando o componente funcional 'Imagem'
const Imagem: React.FC<ImagemProps> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-md mb-4" />
    </div>
  );
};

export default Imagem;