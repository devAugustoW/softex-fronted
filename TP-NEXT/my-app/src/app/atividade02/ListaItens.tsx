
import React from 'react';

const ListaItens = () => {
  return (
    <ul className="w-[300px] list-disc list-inside bg-gray-100 p-4 rounded-md shadow-lg mb-4">
      <li className="text-lg text-blue-600 font-semibold mb-2 hover:text-blue-800 transition-colors">
        Typescript
      </li>
      <li className="text-lg text-blue-600 font-semibold mb-2 hover:text-blue-800 transition-colors">
        Next.js
      </li>
      <li className="text-lg text-blue-600 font-semibold hover:text-blue-800 transition-colors">
        React
      </li>
    </ul>
  );
};

export default ListaItens;