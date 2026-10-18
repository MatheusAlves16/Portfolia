export default function Projetos() {
  const projects = [
    {
      title: 'Calculadora em Python',
      description: 'Calculadora funcional com operações básicas e avançadas, incluindo potência e raiz quadrada.',
      tech: ['Python'],
      status: 'Concluído'
    },
    {
      title: 'Sistema de Gerenciamento',
      description: 'Aplicação em C para gerenciar cadastro de alunos com CRUD completo.',
      tech: ['C'],
      status: 'Em Desenvolvimento'
    },
    {
      title: 'Jogo da Velha',
      description: 'Implementação clássica do jogo da velha em Python com interface de terminal.',
      tech: ['Python'],
      status: 'Concluído'
    },
    {
      title: 'Analisador de Texto',
      description: 'Script em Python para análise de frequência de palavras em textos.',
      tech: ['Python'],
      status: 'Concluído'
    }
  ];

  return (
    <section id="projetos" className="min-h-screen flex items-center justify-center bg-[#0d0d0d] py-20 px-4">
      <div className="ff6-panel p-8 md:p-12 max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffd700] ff6-title mb-8 text-center pixel-text">
          PROJETOS
        </h2>
        <div className="w-full h-1 bg-[#ffd700] mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#0f3460] p-6 border-2 border-[#ffd700]">
              <h3 className="text-xl font-bold text-[#ffd700] mb-3 pixel-text">
                {project.title}
              </h3>
              <p className="text-[#e8e8e8] pixel-text text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-[#1a1a2e] px-3 py-1 text-xs text-[#4cc9f0] border border-[#ffd700]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm pixel-text ${
                  project.status === 'Concluído' ? 'text-[#4cc9f0]' : 'text-[#f72585]'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#e8e8e8] pixel-text mb-4">
            Mais projetos em breve...
          </p>
        </div>
      </div>
    </section>
  );
}
