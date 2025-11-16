import { Contact } from 'lucide-react';
import React from 'react';

const alumni = [
{ name: 'Rizky Ananda', perusahaan: 'PT. TechNova', contact: '@rizky_ananda' },
{ name: 'Alya Prameswari', perusahaan: 'PT. Inovindo Digital', contact: '@alya_prameswari' },
{ name: 'Dimas Ramadhan', perusahaan: 'PT. Kreasia', contact: '@dimas_ramadhan' },
{ name: 'Siti Marlina', perusahaan: 'PT. Codenesia', contact: '@siti_marlina' },
{ name: 'Andra Nugroho', perusahaan: 'PT. NexaSoft', contact: '@andra_nugroho' },
{ name: 'Laila Azzahra', perusahaan: 'PT. BitVerse', contact: '@laila_azzahra' },
{ name: 'Yoga Pratama', perusahaan: 'PT. Cloudify', contact: '@yoga_pratama' },
{ name: 'Intan Sari', perusahaan: 'PT. KreatifHub', contact: '@intan_sari' },
{ name: 'Fadil Akbar', perusahaan: 'PT. Syntera', contact: '@fadil_akbar' },
{ name: 'Nadia Putri', perusahaan: 'PT. DevSpark', contact: '@nadia_putri' },
{ name: 'Rafi Maulana', perusahaan: 'PT. AlphaByte', contact: '@rafi_maulana' },
{ name: 'Tania Safitri', perusahaan: 'PT. Innovatech', contact: '@tania_safitri' },
{ name: 'Bagas Permadi', perusahaan: 'PT. LuminaWorks', contact: '@bagas_permadi' },
{ name: 'Citra Dewanti', perusahaan: 'PT. SoftSpark', contact: '@citra_dewanti' },
{ name: 'Fahri Rahman', perusahaan: 'PT. CodeShift', contact: '@fahri_rahman' },
{ name: 'Nabila Aurel', perusahaan: 'PT. VirtuoLabs', contact: '@nabila_aurel' },
{ name: 'Dian Pratami', perusahaan: 'PT. NeoDigital', contact: '@dian_pratami' },
{ name: 'Reno Saputra', perusahaan: 'PT. DataWave', contact: '@reno_saputra' },
{ name: 'Kirana Ayu', perusahaan: 'PT. Appify', contact: '@kirana_ayu' },
{ name: 'Teguh Santoso', perusahaan: 'PT. BrightCode', contact: '@teguh_santoso' },
{ name: 'Vina Marlina', perusahaan: 'PT. CodeWave', contact: '@vina_marlina' },
{ name: 'Ilham Rizqi', perusahaan: 'PT. Netlytic', contact: '@ilham_rizqi' },
{ name: 'Dewi Ramadhani', perusahaan: 'PT. PixelGrow', contact: '@dewi_ramadhani' },
{ name: 'Farhan Alamsyah', perusahaan: 'PT. NovaDev', contact: '@farhan_alamsyah' },
{ name: 'Aulia Rahma', perusahaan: 'PT. TechFlow', contact: '@aulia_rahma' },
{ name: 'Reno Putra', perusahaan: 'PT. DevLabs', contact: '@reno_putra' },
{ name: 'Tika Lestari', perusahaan: 'PT. MindSpark', contact: '@tika_lestari' },
{ name: 'Reza Gunawan', perusahaan: 'PT. CodeMate', contact: '@reza_gunawan' },
{ name: 'Salsa Maharani', perusahaan: 'PT. Pixelio', contact: '@salsa_maharani' },
{ name: 'Bayu Aditya', perusahaan: 'PT. CloudNest', contact: '@bayu_aditya' },
];

export default function PesebaranAlumni() {
return ( <div className="min-h-screen bg-rose-50 py-10 px-4"> <div className="max-w-6xl mx-auto"> <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
Distribution of <span className="text-red-700">Alumni</span> </h1> <p className="text-center text-gray-600 mb-8 text-base md:text-lg">
List of distribution of our Best Alumni </p>

```
    {/* Desktop Table View */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full border-collapse shadow-md">
        <thead>
          <tr className="bg-red-700 text-white">
            <th className="border border-gray-800 p-3 font-semibold">Name</th>
            <th className="border border-gray-800 p-3 font-semibold text-center">Company</th>
            <th className="border border-gray-800 p-3 font-semibold">Contact</th>
          </tr>
        </thead>
        <tbody>
          {alumni.map((item) => (
            <tr
              key={item.name}
              className="hover:bg-red-50 transition-colors duration-200 even:bg-gray-50"
            >
              <td className="border border-gray-800 p-3 text-center font-medium">
                {item.name}
              </td>
              <td className="border border-gray-800 p-3 text-center">
                {item.perusahaan}
              </td>
              <td className="border border-gray-800 p-3 text-center font-semibold flex justify-center items-center gap-2">
                <Contact className="w-4 h-4 hidden md:inline text-red-700" />
                {item.contact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Card View */}
    <div className="md:hidden space-y-4">
      {alumni.map((item) => (
        <div
          key={item.name}
          className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                {item.name.charAt(0)}
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 text-center">Company {item.perusahaan}</p>
              </div>
            </div>
            <div className="bg-red-100 text-red-700 rounded-full px-4 py-2 font-bold text-lg">
              {item.contact}
            </div>
          </div>

          <div className="bg-gray-50 rounded p-3">
            <p className="text-xs text-gray-500 mb-1 font-semibold">Detail Contact:</p>
            <p className="text-sm text-gray-700 leading-relaxed">{item.contact}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


);
}
