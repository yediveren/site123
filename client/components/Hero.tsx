import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="bg-hero-purple text-white py-16 px-4 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end">
        <div className="relative">
          {/* Hand with colorful paint - using CSS to create a similar effect */}
          <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 opacity-20"></div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-green-400 rounded-full"></div>
            <div className="absolute top-12 right-8 w-6 h-6 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-8 right-12 w-10 h-10 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Çocuklarımız için
            <br />
            iyi bir gelecek...
          </h1>

          <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
            Çocuklarımızın kaybedecek zamanları yok. Onlara en iyi eğitimi
            vermek için "Doğru Değerlendirme, Etkin Bireysel Eğitim,
            Multidisipliner Yaklaşım."
          </p>

          <Button className="bg-brand-yellow text-black hover:bg-brand-yellow/90 rounded-2xl font-bold px-8 py-4 h-auto text-lg">
            Bilgi Almak İstiyorum !
          </Button>

          <div className="mt-12 text-white/80">
            <p className="text-lg font-semibold">
              + SEN YÜKSEKLERİ HEDEFLE YEDIVEREN
              <br />
              HEP SENİNLE...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
