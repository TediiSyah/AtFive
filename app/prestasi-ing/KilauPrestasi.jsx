import React from 'react';

const data = [
  { rank: 1, name: 'Metalica Nurania', total: 67, detail: 'Gold: 34 pieces, Silver: 20 pieces, Bronze: 13 pieces' },
  { rank: 2, name: 'Rizky Aditya', total: 59, detail: 'Gold: 30 pieces, Silver: 18 pieces, Bronze: 11 pieces' },
  { rank: 3, name: 'Salas Kirana', total: 55, detail: 'Gold: 28 pieces, Silver: 16 pieces, Bronze: 11 pieces' },
  { rank: 4, name: 'Andi Pratama', total: 52, detail: 'Gold: 26 pieces, Silver: 14 pieces, Bronze: 12 pieces' },
  { rank: 5, name: 'Nina Marlina', total: 49, detail: 'Gold: 24 pieces, Silver: 15 pieces, Bronze: 11 pieces' },
  { rank: 6, name: 'Budi Santoso', total: 46, detail: 'Gold: 23 pieces, Silver: 14 pieces, Bronze: 9 pieces' },
  { rank: 7, name: 'Rani Amalia', total: 43, detail: 'Gold: 21 pieces, Silver: 12 pieces, Bronze: 10 pieces' },
  { rank: 8, name: 'Doni Saputra', total: 40, detail: 'Gold: 20 pieces, Silver: 11 pieces, Bronze: 9 pieces' },
  { rank: 9, name: 'Lina Rahmawati', total: 38, detail: 'Gold: 18 pieces, Silver: 10 pieces, Bronze: 10 pieces' },
  { rank: 10, name: 'Tono Wijaya', total: 36, detail: 'Gold: 17 pieces, Silver: 9 pieces, Bronze: 10 pieces' },
  { rank: 11, name: 'Sari Melezi', total: 34, detail: 'Gold: 16 pieces, Silver: 8 pieces, Bronze: 10 pieces' },
  { rank: 12, name: 'Fajar Nugroho', total: 30, detail: 'Gold: 15 pieces, Silver: 9 pieces, Bronze: 6 pieces' },
  { rank: 13, name: 'Dewi Cahya', total: 30, detail: 'Gold: 14 pieces, Silver: 7 pieces, Bronze: 9 pieces' },
  { rank: 14, name: 'Riko Pramana', total: 28, detail: 'Gold: 13 pieces, Silver: 7 pieces, Bronze: 8 pieces' },
  { rank: 15, name: 'Hira Ayu', total: 26, detail: 'Gold: 12 pieces, Silver: 6 pieces, Bronze: 8 pieces' },
  { rank: 16, name: 'Bayu Herlambang', total: 24, detail: 'Gold: 11 pieces, Silver: 6 pieces, Bronze: 7 pieces' },
  { rank: 17, name: 'Citra Dewi', total: 22, detail: 'Gold: 10 pieces, Silver: 6 pieces, Bronze: 6 pieces' },
  { rank: 18, name: 'Fadli Rahman', total: 20, detail: 'Gold: 9 pieces, Silver: 5 pieces, Bronze: 6 pieces' },
  { rank: 19, name: 'Tika Anggraini', total: 18, detail: 'Gold: 8 pieces, Silver: 4 pieces, Bronze: 6 pieces' },
];

export default function KilauPrestasi() {
  return (
    <div className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          The shine of <span className="text-red-700">achievement</span>
        </h1>
        <p className="text-center text-gray-600 mb-8 text-base md:text-lg">
          The list of the most contributors from the best students
        </p>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse shadow-md">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="border border-gray-800 p-3 font-semibold">Rank</th>
                <th className="border border-gray-800 p-3 font-semibold">Name</th>
                <th className="border border-gray-800 p-3 font-semibold">Total Achievement</th>
                <th className="border border-gray-800 p-3 font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr 
                  key={item.rank} 
                  className="hover:bg-red-50 transition-colors duration-200 even:bg-gray-50"
                >
                  <td className="border border-gray-800 p-3 text-center font-medium">
                    {item.rank}
                  </td>
                  <td className="border border-gray-800 p-3">{item.name}</td>
                  <td className="border border-gray-800 p-3 text-center font-semibold">
                    {item.total}
                  </td>
                  <td className="border border-gray-800 p-3 text-sm">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {data.map((item) => (
            <div 
              key={item.rank} 
              className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    {item.rank}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">Rank {item.rank}</p>
                  </div>
                </div>
                <div className="bg-red-100 text-red-700 rounded-full px-4 py-2 font-bold text-lg">
                  {item.total}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded p-3">
                <p className="text-xs text-gray-500 mb-1 font-semibold">Detail Achievement:</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}