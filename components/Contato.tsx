'use client';

import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
      if (!formId) {
        throw new Error('Formspree Form ID não configurado');
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="min-h-screen flex items-center justify-center bg-[#0d0d0d] py-20 px-4">
      <div className="ff6-panel p-8 md:p-12 max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffd700] ff6-title mb-8 text-center pixel-text">
          CONTATO
        </h2>
        <div className="w-full h-1 bg-[#ffd700] mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#4cc9f0] mb-4 pixel-text">
              VAMOS CONVERSAR?
            </h3>
            <p className="text-[#e8e8e8] pixel-text mb-6 leading-relaxed">
              Estou sempre aberto a novas oportunidades, colaborações e aprendizado.
              Sinta-se à vontade para entrar em contato!
            </p>
            
            <div className="space-y-4">
              <div className="bg-[#0f3460] p-4 border-2 border-[#ffd700]">
                <p className="text-[#ffd700] pixel-text text-sm mb-1">EMAIL</p>
                <p className="text-[#e8e8e8] pixel-text">mathalves1616@gmail.com</p>
              </div>
              
              <div className="bg-[#0f3460] p-4 border-2 border-[#ffd700]">
                <p className="text-[#ffd700] pixel-text text-sm mb-1">LOCALIZAÇÃO</p>
                <p className="text-[#e8e8e8] pixel-text">Brasil</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitStatus === 'success' && (
              <div className="bg-green-900 border-2 border-green-500 p-4 text-green-300 pixel-text">
                Mensagem enviada com sucesso!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-900 border-2 border-red-500 p-4 text-red-300 pixel-text">
                Erro ao enviar mensagem. Tente novamente.
              </div>
            )}
            <div>
              <label className="block text-[#ffd700] pixel-text text-sm mb-2">
                NOME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0f3460] border-2 border-[#ffd700] p-3 text-[#e8e8e8] pixel-text focus:outline-none focus:border-[#4cc9f0]"
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <label className="block text-[#ffd700] pixel-text text-sm mb-2">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0f3460] border-2 border-[#ffd700] p-3 text-[#e8e8e8] pixel-text focus:outline-none focus:border-[#4cc9f0]"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-[#ffd700] pixel-text text-sm mb-2">
                MENSAGEM
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-[#0f3460] border-2 border-[#ffd700] p-3 text-[#e8e8e8] pixel-text focus:outline-none focus:border-[#4cc9f0] resize-none"
                placeholder="Sua mensagem..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full ff6-button px-6 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
