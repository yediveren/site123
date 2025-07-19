import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />

      {/* Contact Section */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            İletişim Bilgilerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-blue/10 rounded-2xl p-6">
              <div className="text-brand-blue text-3xl mb-4">📞</div>
              <h3 className="font-bold text-lg mb-2">Telefon</h3>
              <p className="text-gray-600">0332 248 50 50</p>
            </div>

            <div className="bg-brand-green/10 rounded-2xl p-6">
              <div className="text-brand-green text-3xl mb-4">✉️</div>
              <h3 className="font-bold text-lg mb-2">E-posta</h3>
              <p className="text-gray-600">yediverenozelegitim@gmail.com</p>
            </div>

            <div className="bg-brand-orange/10 rounded-2xl p-6">
              <div className="text-brand-orange text-3xl mb-4">📍</div>
              <h3 className="font-bold text-lg mb-2">Adres</h3>
              <p className="text-gray-600">
                Dumlupınar, Nadir Sk. No:1 42070
                <br />
                Selçuklu/Konya
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
