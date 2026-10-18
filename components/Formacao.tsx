export default function Formacao() {
  const education = [
    {
      institution: 'Faculdade',
      course: 'Análise e Desenvolvimento de Sistemas',
      period: '2026 - Presente',
      semester: '2º Semestre',
      status: 'Em Andamento',
      description: 'Curso técnico superior focado em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de software.'
    },
    {
      institution: 'Ensino Médio',
      course: 'Ensino Médio Completo',
      period: '2023 - 2025',
      semester: 'Concluído',
      status: 'Concluído',
      description: 'Formação básica.'
    }
  ];

  return (
    <section id="formacao" className="min-h-screen flex items-center justify-center bg-[#0d0d0d] py-20 px-4">
      <div className="ff6-panel p-8 md:p-12 max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffd700] ff6-title mb-8 text-center pixel-text">
          FORMAÇÃO
        </h2>
        <div className="w-full h-1 bg-[#ffd700] mb-8"></div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-[#0f3460] p-6 border-2 border-[#ffd700]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-[#ffd700] pixel-text mb-1">
                    {edu.course}
                  </h3>
                  <p className="text-[#4cc9f0] pixel-text text-sm">
                    {edu.institution}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className={`inline-block px-3 py-1 text-sm pixel-text border border-[#ffd700] ${
                    edu.status === 'Concluído' ? 'bg-[#1a1a2e] text-[#4cc9f0]' : 'bg-[#1a1a2e] text-[#f72585]'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-3 text-sm">
                <span className="text-[#e8e8e8] pixel-text">
                  <span className="text-[#ffd700]">Período:</span> {edu.period}
                </span>
                {edu.semester && (
                  <span className="text-[#e8e8e8] pixel-text">
                    <span className="text-[#ffd700]">Semestre:</span> {edu.semester}
                  </span>
                )}
              </div>
              
              <p className="text-[#e8e8e8] pixel-text text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-[#0f3460] border-2 border-[#ffd700]">
          <h3 className="text-xl font-bold text-[#4cc9f0] mb-4 pixel-text">
            OBJETIVOS FUTUROS
          </h3>
          <ul className="text-[#e8e8e8] pixel-text space-y-2">
            <li>• Concluir graduação em ADS</li>
            <li>• Especializar-se em desenvolvimento backend</li>
            <li>• Aprender frameworks modernos</li>
            <li>• Contribuir em projetos open source</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
