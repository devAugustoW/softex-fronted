import React from 'react';

type SearchCepButtonProps = {
  onClick: () => void;
};

const SearchCepButton: React.FC<SearchCepButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white rounded py-2 px-4"
    >
      Buscar CEP
    </button>
  );
};

export default SearchCepButton;