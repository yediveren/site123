import { Header } from "../components/Header";

export default function Iletisim() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              İletişim
            </h1>
            <p className="text-xl text-gray-600">
              Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-blue/10 p-3 rounded-xl">
                      <div className="text-brand-blue text-2xl">📞</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Telefon
                      </h3>
                      <a
                        href="tel:+903322485050"
                        className="text-xl text-brand-blue font-semibold hover:text-brand-blue/80"
                      >
                        0332 248 50 50
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-green/10 p-3 rounded-xl">
                      <div className="text-brand-green text-2xl">✉️</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        E-posta
                      </h3>
                      <a
                        href="mailto:yediverenozelegitim@gmail.com"
                        className="text-xl text-brand-green font-semibold hover:text-brand-green/80 break-all"
                      >
                        yediverenozelegitim@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-orange/10 p-3 rounded-xl">
                      <div className="text-brand-orange text-2xl">📍</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Adres</h3>
                      <p className="text-xl text-gray-700">
                        Dumlupınar, Nadir Sk. No:1 42070
                        <br />
                        42070 Selçuklu/Konya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-pink/10 p-3 rounded-xl">
                      <div className="text-brand-pink text-2xl">📱</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Instagram
                      </h3>
                      <a
                        href="https://www.instagram.com/yediverenozelegitim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-brand-pink font-semibold hover:text-brand-pink/80"
                      >
                        @yediverenozelegitim
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-brand-purple to-brand-pink text-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">Hızlı İletişim</h3>
                <p className="text-lg mb-6 opacity-90">
                  Hemen bizi arayın veya mesaj gönderin
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+903322485050"
                    className="bg-white text-brand-purple px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors text-center"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="mailto:yediverenozelegitim@gmail.com"
                    className="bg-white text-brand-purple px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors text-center"
                  >
                    ✉️ E-posta Gönder
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Konumumuz
              </h2>
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.825842982139!2d32.482901315417405!3d37.869641979747485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085b1d8f7a8f1%3A0x8c8a9f0e4b8e8b8e!2sNadir%20Sk.%20No%3A1%2C%2042070%20Sel%C3%A7uklu%2FKonya!5e0!3m2!1str!2str!4v1647875421234!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yediveren Özel Eğitim ve Rehabilitasyon Merkezi Konumu"
                ></iframe>
              </div>
              <div className="mt-4">
                <a
                  href="https://maps.google.com/?q=Dumlupınar,+Nadir+Sk.+No:1+42070,+42070+Selçuklu/Konya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-blue/90 transition-colors"
                >
                  🗺️ Google Maps'te Aç
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Çalışma Saatleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-brand-blue/10 p-4 rounded-xl mb-3">
                  <div className="text-brand-blue text-2xl mb-2">🌅</div>
                  <h3 className="font-bold">Pazartesi - Cuma</h3>
                </div>
                <p className="text-gray-600">08:00 - 18:00</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-green/10 p-4 rounded-xl mb-3">
                  <div className="text-brand-green text-2xl mb-2">🌤️</div>
                  <h3 className="font-bold">Cumartesi</h3>
                </div>
                <p className="text-gray-600">09:00 - 16:00</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-orange/10 p-4 rounded-xl mb-3">
                  <div className="text-brand-orange text-2xl mb-2">🌅</div>
                  <h3 className="font-bold">Pazar</h3>
                </div>
                <p className="text-gray-600">Kapalı</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-pink/10 p-4 rounded-xl mb-3">
                  <div className="text-brand-pink text-2xl mb-2">📞</div>
                  <h3 className="font-bold">Acil Durum</h3>
                </div>
                <p className="text-gray-600">Randevu ile</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
