export default function Conhecimentos() {
  const skills = [
    {
      name: 'Python',
      level: 75,
      color: '#ffd700',
      description: 'Desenvolvimento de scripts, automação e lógica de programação'
    },
    {
      name: 'C',
      level: 60,
      color: '#4cc9f0',
      description: 'Programação de baixo nível, ponteiros e gerenciamento de memória'
    },
    {
      name: 'Lógica de Programação',
      level: 80,
      color: '#f72585',
      description: 'Algoritmos, estruturas de dados e resolução de problemas'
    },
    {
      name: 'Git',
      level: 50,
      color: '#ffd700',
      description: 'Controle de versão e colaboração em projetos'
    }
  ];

  return (
    <section id="conhecimentos" className="min-h-screen flex items-center justify-center bg-[#0d0d0d] py-20 px-4">
      <div className="ff6-panel p-8 md:p-12 max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffd700] ff6-title mb-8 text-center pixel-text">
          CONHECIMENTOS
        </h2>
        <div className="w-full h-1 bg-[#ffd700] mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-[#0f3460] p-6 border-2 border-[#ffd700]">
              <h3 className="text-xl font-bold text-[#ffd700] mb-2 pixel-text">
                {skill.name}
              </h3>
              <div className="w-full bg-[#1a1a2e] h-4 mb-3 border border-[#ffd700]">
                <div
                  className="h-full transition-all duration-1000"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
              <p className="text-[#e8e8e8] pixel-text text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-[#0f3460] border-2 border-[#ffd700]">
          <h3 className="text-xl font-bold text-[#4cc9f0] mb-4 pixel-text">
            EM APRENDIZADO
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="ff6-button px-4 py-2 text-sm">JavaScript</span>
            <span className="ff6-button px-4 py-2 text-sm">TypeScript</span>
            <span className="ff6-button px-4 py-2 text-sm">React</span>
            <span className="ff6-button px-4 py-2 text-sm">Next.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
