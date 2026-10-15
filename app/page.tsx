import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* Hero Section */}
      <section className="w-full bg-slate-900 py-24 px-4 text-center border-b-8 border-yellow-500">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Dinas Tenaga Kerja, Transmigrasi, Energi dan Sumber Daya Mineral
          </h1>
          <h2 className="text-xl md:text-2xl text-yellow-400 font-semibold mb-8">
            Provinsi Papua Barat Daya
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Melayani masyarakat dengan profesional, transparan, dan akuntabel untuk pembangunan daerah dan pengelolaan sumber daya yang berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/layanan" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors">
              Layanan Online
            </Link>
            <Link href="/profil" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Profil Dinas
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 -mt-10">
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-800">
          <h3 className="text-xl font-bold mb-3 text-slate-900">Transparansi PPID</h3>
          <p className="text-slate-600 mb-4">Akses informasi publik yang dikelola secara profesional dan transparan sesuai undang-undang.</p>
          <Link href="/ppid" className="text-blue-700 font-semibold hover:underline">Selengkapnya &rarr;</Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
          <h3 className="text-xl font-bold mb-3 text-slate-900">Ketenagakerjaan</h3>
          <p className="text-slate-600 mb-4">Informasi lowongan kerja, pelatihan vokasi, perlindungan tenaga kerja, dan transmigrasi.</p>
          <Link href="/layanan" className="text-blue-700 font-semibold hover:underline">Selengkapnya &rarr;</Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-emerald-600">
          <h3 className="text-xl font-bold mb-3 text-slate-900">Energi & SDM</h3>
          <p className="text-slate-600 mb-4">Pengelolaan, perizinan, dan pemantauan sumber daya mineral serta energi daerah.</p>
          <Link href="/layanan" className="text-blue-700 font-semibold hover:underline">Selengkapnya &rarr;</Link>
        </div>
      </section>
    </main>
  );
}