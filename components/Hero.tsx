export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d] pt-20 px-4">
      <div className="ff6-panel p-8 md:p-12 max-w-4xl w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#ffd700] ff6-title ff6-glow mb-6 pixel-text">
            MATHEUS ALVES GOMES
          </h1>
          <div className="w-full h-1 bg-[#ffd700] mb-6"></div>
          <p className="text-xl md:text-2xl text-[#e8e8e8] mb-4 pixel-text">
            19 anos • Desenvolvedor em Formação
          </p>
          <p className="text-lg text-[#4cc9f0] mb-8 pixel-text">
            Análise e Desenvolvimento de Sistemas • 2º Semestre
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="ff6-button px-6 py-3 text-lg">Python</span>
            <span className="ff6-button px-6 py-3 text-lg">C</span>
          </div>
          <p className="text-[#e8e8e8] text-lg pixel-text leading-relaxed">
            Bem-vindo ao meu portfólio! Explore minhas habilidades, projetos e jornada
            como estudante de programação.
          </p>
        </div>
      </div>
    </section>
  );
}
