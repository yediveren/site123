import { Header } from "../components/Header";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Bu sayfa henüz hazırlanıyor
            </h2>
            <p className="text-gray-600">
              İçerik yakında eklenecektir. Daha fazla bilgi için lütfen bizimle
              iletişime geçin.
            </p>
            <div className="mt-6">
              <a
                href="tel:0332 248 50 50"
                className="inline-block bg-brand-purple text-white px-6 py-3 rounded-2xl font-semibold hover:bg-brand-purple/90 transition-colors"
              >
                Bizi Arayın: 0332 248 50 50
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
