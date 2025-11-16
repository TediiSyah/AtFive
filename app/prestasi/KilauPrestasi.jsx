import React from 'react';

const data = [
  { rank: 1, name: 'Metalica Nurania', total: 67, detail: 'Emas: 34 buah, Perak: 20 buah, Perunggu: 13 buah' },
  { rank: 2, name: 'Rizky Aditya', total: 59, detail: 'Emas: 30 buah, Perak: 18 buah, Perunggu: 11 buah' },
  { rank: 3, name: 'Salas Kirana', total: 55, detail: 'Emas: 28 buah, Perak: 16 buah, Perunggu: 11 buah' },
  { rank: 4, name: 'Andi Pratama', total: 52, detail: 'Emas: 26 buah, Perak: 14 buah, Perunggu: 12 buah' },
  { rank: 5, name: 'Nina Marlina', total: 49, detail: 'Emas: 24 buah, Perak: 15 buah, Perunggu: 11 buah' },
  { rank: 6, name: 'Budi Santoso', total: 46, detail: 'Emas: 23 buah, Perak: 14 buah, Perunggu: 9 buah' },
  { rank: 7, name: 'Rani Amalia', total: 43, detail: 'Emas: 21 buah, Perak: 12 buah, Perunggu: 10 buah' },
  { rank: 8, name: 'Doni Saputra', total: 40, detail: 'Emas: 20 buah, Perak: 11 buah, Perunggu: 9 buah' },
  { rank: 9, name: 'Lina Rahmawati', total: 38, detail: 'Emas: 18 buah, Perak: 10 buah, Perunggu: 10 buah' },
  { rank: 10, name: 'Tono Wijaya', total: 36, detail: 'Emas: 17 buah, Perak: 9 buah, Perunggu: 10 buah' },
  { rank: 11, name: 'Sari Melezi', total: 34, detail: 'Emas: 16 buah, Perak: 8 buah, Perunggu: 10 buah' },
  { rank: 12, name: 'Fajar Nugroho', total: 30, detail: 'Emas: 15 buah, Perak: 9 buah, Perunggu: 6 buah' },
  { rank: 13, name: 'Dewi Cahya', total: 30, detail: 'Emas: 14 buah, Perak: 7 buah, Perunggu: 9 buah' },
  { rank: 14, name: 'Riko Pramana', total: 28, detail: 'Emas: 13 buah, Perak: 7 buah, Perunggu: 8 buah' },
  { rank: 15, name: 'Hira Ayu', total: 26, detail: 'Emas: 12 buah, Perak: 6 buah, Perunggu: 8 buah' },
  { rank: 16, name: 'Bayu Herlambang', total: 24, detail: 'Emas: 11 buah, Perak: 6 buah, Perunggu: 7 buah' },
  { rank: 17, name: 'Citra Dewi', total: 22, detail: 'Emas: 10 buah, Perak: 6 buah, Perunggu: 6 buah' },
  { rank: 18, name: 'Fadli Rahman', total: 20, detail: 'Emas: 9 buah, Perak: 5 buah, Perunggu: 6 buah' },
  { rank: 19, name: 'Tika Anggraini', total: 18, detail: 'Emas: 8 buah, Perak: 4 buah, Perunggu: 6 buah' },
];

export default function KilauPrestasi() {
  return (
    <div className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Kilau <span className="text-red-700">Prestasi</span>
        </h1>
        <p className="text-center text-gray-600 mb-8 text-base md:text-lg">
          Daftar Penyumbang Terbanyak dari Siswa/i Terbaik Kami
        </p>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse shadow-md">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="border border-gray-800 p-3 font-semibold">Peringkat</th>
                <th className="border border-gray-800 p-3 font-semibold">Nama</th>
                <th className="border border-gray-800 p-3 font-semibold">Jumlah Prestasi</th>
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
                    <p className="text-sm text-gray-500">Peringkat {item.rank}</p>
                  </div>
                </div>
                <div className="bg-red-100 text-red-700 rounded-full px-4 py-2 font-bold text-lg">
                  {item.total}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded p-3">
                <p className="text-xs text-gray-500 mb-1 font-semibold">Detail Prestasi:</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}