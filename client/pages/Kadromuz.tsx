import { Header } from "../components/Header";

export default function Kadromuz() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Kadromuz
          </h1>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="mb-8">
              <div className="text-6xl mb-6">👥</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-purple mb-6">
                Uzman Kadromuz
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                Alanında uzman ve deneyimli kadromuz ile ilgili detaylı bilgi
                almak için lütfen bizimle iletişime geçin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-brand-blue/10 rounded-2xl p-6">
                <div className="text-brand-blue text-4xl mb-4">🎓</div>
                <h3 className="font-bold text-xl mb-2">
                  Özel Eğitim Uzmanları
                </h3>
                <p className="text-gray-600">
                  Alanında uzman özel eğitim öğretmenlerimiz
                </p>
              </div>

              <div className="bg-brand-green/10 rounded-2xl p-6">
                <div className="text-brand-green text-4xl mb-4">🗣️</div>
                <h3 className="font-bold text-xl mb-2">
                  Dil ve Konuşma Terapistleri
                </h3>
                <p className="text-gray-600">
                  Konuşma ve dil gelişimi uzmanlarımız
                </p>
              </div>

              <div className="bg-brand-orange/10 rounded-2xl p-6">
                <div className="text-brand-orange text-4xl mb-4">🤲</div>
                <h3 className="font-bold text-xl mb-2">Ergoterapistler</h3>
                <p className="text-gray-600">
                  Motor beceri gelişimi uzmanlarımız
                </p>
              </div>

              <div className="bg-brand-pink/10 rounded-2xl p-6">
                <div className="text-brand-pink text-4xl mb-4">🧠</div>
                <h3 className="font-bold text-xl mb-2">Psikologlar</h3>
                <p className="text-gray-600">
                  Gelişim ve davranış uzmanlarımız
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-purple to-brand-pink text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Kadro Bilgisi İçin İletişime Geçin
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Uzman kadromuz ve deneyimlerimiz hakkında detaylı bilgi almak
                için bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+903322485050"
                  className="bg-white text-brand-purple px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  📞 0332 248 50 50
                </a>
                <a
                  href="mailto:yediverenozelegitim@gmail.com"
                  className="bg-white text-brand-purple px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  ✉️ E-posta Gönder
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
