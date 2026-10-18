import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Conhecimentos from "@/components/Conhecimentos";
import Projetos from "@/components/Projetos";
import Formacao from "@/components/Formacao";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0d]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Conhecimentos />
        <Projetos />
        <Formacao />
        <Contato />
      </main>
      <footer className="bg-[#1a1a2e] border-t-4 border-[#ffd700] py-6 text-center">
        <p className="text-[#e8e8e8] pixel-text text-sm">
          © 2026 Matheus Alves Gomes. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
