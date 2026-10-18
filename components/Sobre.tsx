export default function Sobre() {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center bg-[#0d0d0d] py-20 px-4">
      <div className="ff6-panel p-8 md:p-12 max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffd700] ff6-title mb-8 text-center pixel-text">
          SOBRE MIM
        </h2>
        <div className="w-full h-1 bg-[#ffd700] mb-8"></div>
        
        <div className="space-y-6">
          <p className="text-[#e8e8e8] text-lg pixel-text leading-relaxed">
            Olá! Sou Matheus Alves Gomes, um jovem de 19 anos apaixonado por tecnologia
            e programação. Atualmente estou cursando Análise e Desenvolvimento de Sistemas,
            no 2º semestre, onde venho aprimorando minhas habilidades e conhecimentos.
          </p>
          
          <p className="text-[#e8e8e8] text-lg pixel-text leading-relaxed">
            Minha jornada na programação começou com curiosidade sobre como os softwares
            funcionam. Desde então, venho estudando e praticando constantemente para me
            tornar um desenvolvedor completo.
          </p>
          
          <p className="text-[#e8e8e8] text-lg pixel-text leading-relaxed">
            Estou focado em aprender linguagens como Python e C, buscando entender desde
            os fundamentos até conceitos mais avançados. Meu objetivo é construir aplicações
            que resolvam problemas reais e contribuam para o mundo digital.
          </p>
          
          <div className="mt-8 p-6 bg-[#0f3460] border-2 border-[#ffd700]">
            <h3 className="text-xl font-bold text-[#4cc9f0] mb-4 pixel-text">
              INTERESSES
            </h3>
            <ul className="text-[#e8e8e8] pixel-text space-y-2">
              <li>• Desenvolvimento de Software</li>
              <li>• Algoritmos e Estruturas de Dados</li>
              <li>• Resolução de Problemas</li>
              <li>• Aprendizado Contínuo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
