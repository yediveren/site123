import { Header } from "../components/Header";

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Hakkımızda
            </h1>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                <strong className="text-brand-purple">
                  Yediveren Özel Eğitim ve Rehabilitasyon Merkezi
                </strong>
                , engelli çocuklar ve yetişkinlere özel eğitim hizmeti vermek
                amacıyla kurulmuştur. Merkezimiz, alanında uzman kadrosu ile
                özel gereksinimli bireylerin topluma kazandırılması için
                çalışmaktadır.
              </p>

              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                Eğitim programlarımız, her bireyin özel ihtiyaçlarına göre
                şekillendirilmekte ve multidisipliner bir yaklaşımla
                uygulanmaktadır. Amacımız, öğrencilerimizin potansiyellerini en
                üst düzeyde kullanabilmelerini sağlamak ve onları bağımsız
                yaşama hazırlamaktır.
              </p>

              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                <strong className="text-brand-purple">
                  Yediveren Özel Eğitim ve Rehabilitasyon Merkezi
                </strong>
                olarak, her çocuğun özel ve değerli olduğuna inanıyor, onların
                gelişimlerini desteklemek için var gücümüzle çalışıyoruz.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-brand-blue to-brand-purple text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Özel gereksinimli bireylerin en iyi eğitimi alabilmeleri için
                  multidisipliner yaklaşımla hizmet vermek ve onları topluma
                  kazandırmak.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-green to-brand-lime text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Her çocuğun potansiyelini keşfedip geliştirebildiği, bağımsız
                  ve mutlu bireyler olarak yetişebildiği bir gelecek yaratmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
