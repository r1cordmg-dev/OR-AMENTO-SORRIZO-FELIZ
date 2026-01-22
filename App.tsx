import React from 'react';
import { 
  ShieldCheck, 
  ChevronRight, 
  Users, 
  Star, 
  Award,
  Layers,
  TrendingDown,
  AlertCircle,
  ArrowRight,
  Target,
  Sparkles,
  MapPin,
  Navigation,
  ExternalLink
} from 'lucide-react';

// WhatsApp atualizado para 31904499024
const WHATSAPP_LINK = "https://wa.me/5531904499024?text=Olá!%20Li%20a%20proposta%20estratégica%20da%20Future%20Agency%20Tecnology%20e%20gostaria%20de%20agendar%20uma%20reunião%20para%20a%20Clínica%20Sorriso%20Feliz.";

const SectionTitle: React.FC<{ children: React.ReactNode, align?: 'center' | 'left', gradient?: boolean, light?: boolean, weight?: 'light' | 'normal' | 'bold' | 'black' }> = ({ children, align = 'left', gradient, light, weight = 'light' }) => {
  const weightClass = {
    light: 'font-light',
    normal: 'font-normal',
    bold: 'font-bold',
    black: 'font-black'
  }[weight];

  return (
    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl ${weightClass} mb-8 leading-[1.05] tracking-tight ${gradient ? 'gradient-text' : (light ? 'text-white' : 'text-slate-900')} ${align === 'center' ? 'text-center' : ''} break-words overflow-visible`}>
      {children}
    </h2>
  );
};

const ExclusiveBadge: React.FC = () => (
  <div className="inline-flex items-center space-x-3 px-4 py-2 sm:px-8 sm:py-4 bg-white border border-slate-100 rounded-full mb-8 sm:mb-14 shadow-2xl glass-card relative overflow-hidden group max-w-full">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative flex items-center space-x-2">
      <Award className="w-4 h-4 sm:w-6 h-6 text-blue-600 flex-shrink-0" />
      <span className="text-[8px] sm:text-[12px] font-extrabold text-slate-900 uppercase tracking-widest sm:tracking-[0.45em] break-normal">Proposta Estratégica Exclusiva • Sorriso Feliz</span>
    </div>
  </div>
);

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-3xl z-50 border-b border-slate-50">
    <div className="max-w-7xl mx-auto px-6 h-20 sm:h-24 flex items-center justify-between">
      <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
        <div className="w-10 h-10 sm:w-12 h-12 bg-gradient-to-br from-slate-950 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl transition-all group-hover:rotate-6 group-hover:scale-110">
          <Layers className="text-white w-6 h-6 sm:w-7 h-7" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-black tracking-[0.2em] sm:tracking-[0.35em] uppercase text-slate-900 leading-none">Future Agency</span>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.15em] text-blue-600 uppercase">Tecnology</span>
        </div>
      </div>
      <nav className="hidden lg:flex items-center space-x-10">
        <a href="#impacto" className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors">Impacto</a>
        <a href="#solucao" className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors">Solução</a>
        <a href="#localizacao" className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors">Localização</a>
        <a href={WHATSAPP_LINK} target="_blank" className="px-8 py-3 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 hover:shadow-2xl transition-all">
          Agendar Reunião
        </a>
      </nav>
      <a href={WHATSAPP_LINK} target="_blank" className="lg:hidden w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white">
        <ArrowRight size={20} />
      </a>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative pt-28 pb-16 sm:pt-48 sm:pb-32 md:pt-64 md:pb-72 overflow-hidden clinical-gradient-main futuristic-dots">
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full hidden lg:block overflow-hidden rounded-bl-[200px] shadow-inner border-l border-b border-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-transparent z-10" />
      <img 
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
        alt="Clínica Premium Odontológica" 
        className="w-full h-full object-cover opacity-95"
      />
    </div>
    <div className="max-w-7xl mx-auto px-6 container-padding">
      <div className="lg:w-3/5 fade-in-up">
        <ExclusiveBadge />
        <h1 className="text-4xl md:text-9xl font-black text-slate-900 mb-8 sm:mb-14 leading-[1.1] tracking-tighter text-impact-strong mobile-title break-words">
          A CLINICA Sorriso Feliz <br className="hidden sm:block" />
          <span className="gradient-text italic">merece VISIBILIDADE.</span>
        </h1>
        <p className="text-xl md:text-3xl text-slate-500 mb-10 sm:mb-12 leading-relaxed font-light max-w-2xl mobile-text">
          Uma proposta de site profissional pensada para clínicas odontológicas que valorizam <span className="text-slate-900 font-semibold underline decoration-blue-500 underline-offset-8">confiança, credibilidade e experiência</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-12 sm:mt-20">
          <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center justify-center px-10 py-6 sm:px-16 sm:py-7 bg-slate-950 text-white rounded-3xl text-lg sm:text-xl font-black hover:bg-blue-700 hover:scale-[1.05] transition-all group cta-button-glow text-center">
            Agendar reunião estratégica
            <ChevronRight className="ml-3 sm:ml-4 w-6 h-6 sm:w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const MapSection: React.FC = () => (
  <section id="localizacao" className="py-24 sm:py-40 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 container-padding">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="order-2 lg:order-1">
           <div className="inline-flex items-center space-x-3 text-blue-600 mb-6 sm:mb-10">
             <Navigation className="w-5 h-5 sm:w-6 h-6 animate-bounce" />
             <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-[0.45em]">Legitimidade Física Santa Luzia</span>
           </div>
           <SectionTitle weight="black" gradient>Posicionamento Estratégico Local</SectionTitle>
           <div className="space-y-8 sm:space-y-12 text-xl sm:text-2xl text-slate-500 font-light leading-relaxed mobile-text">
             <p>
               A unidade da <span className="text-slate-950 font-black">Clínica Sorriso Feliz</span> na <span className="italic">Av. Brasília, 1557</span> é o seu maior trunfo físico. Nosso objetivo é torná-la também o maior trunfo digital da região.
             </p>
             <div className="p-8 sm:p-12 bg-slate-50 rounded-[3rem] sm:rounded-[4rem] border border-slate-100 premium-shadow relative group overflow-hidden">
                <div className="flex items-start space-x-6 sm:space-x-8 relative z-10">
                   <div className="w-16 h-16 sm:w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-3xl">
                      <MapPin className="text-white w-8 h-8 sm:w-10 h-10" />
                   </div>
                   <div>
                      <h4 className="text-slate-400 font-black mb-1 sm:mb-2 uppercase tracking-[0.4em] text-[10px]">Endereço Estratégico</h4>
                      <p className="text-slate-950 font-black text-2xl sm:text-3xl leading-tight">Av. Brasília, 1557</p>
                      <p className="text-slate-500 font-bold text-sm sm:text-base">São Benedito, Santa Luzia - MG</p>
                   </div>
                </div>
             </div>
             <p className="italic text-lg sm:text-xl border-l-4 sm:border-l-[10px] border-blue-600/10 pl-6 sm:pl-10 text-slate-400">
               "Sua estrutura física é premium. Sua presença digital precisa corresponder a esse nível de excelência."
             </p>
           </div>
        </div>
        <div className="order-1 lg:order-2">
           <div className="relative h-[400px] sm:h-[600px] w-full rounded-[3rem] sm:rounded-[4rem] overflow-hidden border-8 sm:border-[12px] border-white shadow-2xl premium-shadow group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.220138986877!2d-43.916805!3d-19.831777999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690626388e5b5%3A0x6d9f09199999999!2sAv.%20Bras%C3%ADlia%2C%201557%20-%20S%C3%A3o%20Benedito%2C%20Santa%20Luzia%20-%20MG%2C%2033105-513!5e0!3m2!1spt-BR!2sbr!4v1740000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute top-6 right-6">
                <a href="https://www.google.com/maps/dir//Av.+Brasília,+1557+-+São+Benedito,+Santa+Luzia+-+MG,+33105-513" target="_blank" className="flex items-center space-x-2 bg-white px-6 py-3 rounded-2xl shadow-2xl text-[10px] font-black uppercase tracking-widest text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                  <span>Como Chegar</span>
                  <ExternalLink size={14} />
                </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const FinancialImpact: React.FC = () => (
  <section id="impacto" className="py-24 sm:py-48 bg-slate-950 text-white relative overflow-hidden">
    <div className="absolute inset-0 futuristic-dots opacity-5 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 relative z-10 container-padding">
      <div className="text-center mb-16 sm:mb-24">
         <div className="inline-flex items-center space-x-3 text-red-500 mb-8 sm:mb-10 px-6 py-3 sm:px-10 sm:py-4 bg-red-500/10 rounded-full border border-red-500/30">
            <AlertCircle className="w-5 h-5 sm:w-7 h-7 animate-pulse" />
            <span className="text-[11px] sm:text-[14px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em]">Alerta de Perda Estratégica</span>
         </div>
         <SectionTitle light align="center" weight="black">
            Hoje, a clínica pode estar perdendo entre <br />
            <span className="text-red-500 text-4xl sm:text-5xl md:text-9xl block mt-6 sm:mt-8 drop-shadow-2xl">R$ 15.000 e R$ 30.000</span>
         </SectionTitle>
         <p className="text-xl md:text-3xl text-slate-400 font-light max-w-4xl mx-auto leading-relaxed mt-8 sm:mt-10 mobile-text">
            Faturamento mensal perdido pela ausência de um <span className="text-white font-bold underline decoration-red-500 underline-offset-8">site institucional profissional</span>. 
            Pacientes buscam online antes de agendar. Se eles não te encontram, eles encontram a concorrência.
         </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-32">
         {[
           { icon: <TrendingDown className="w-10 h-10 sm:w-12 h-12 text-red-500" />, title: "Fuga de Leads", desc: "85% dos pacientes validam a clínica online antes da primeira consulta." },
           { icon: <Users className="w-10 h-10 sm:w-12 h-12 text-blue-500" />, title: "Perda de Confiança", desc: "A ausência de site gera dúvida sobre a modernidade e profissionalismo da clínica." },
           { icon: <Target className="w-10 h-10 sm:w-12 h-12 text-emerald-500" />, title: "Espaço para Concorrência", desc: "Clínicas próximas com sites estruturados captam a demanda que deveria ser sua." }
         ].map((card, i) => (
           <div key={i} className="p-8 sm:p-16 rounded-[3rem] sm:rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="mb-8 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-white">{card.title}</h3>
              <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">{card.desc}</p>
           </div>
         ))}
      </div>
    </div>
  </section>
);

const MiddleCTA: React.FC = () => (
  <section className="py-20 sm:py-32 bg-white relative">
    <div className="max-w-7xl mx-auto px-6 container-padding">
      <div className="bg-slate-50 rounded-[3rem] sm:rounded-[4rem] p-8 sm:p-20 flex flex-col lg:flex-row items-center justify-between border border-slate-100 premium-shadow text-center lg:text-left">
        <div className="mb-10 lg:mb-0">
          <SectionTitle weight="bold">Não permita que sua clínica <br className="hidden sm:block" /> continue invisível.</SectionTitle>
          <p className="text-lg sm:text-xl text-slate-400 font-light mobile-text">Sua excelência física merece uma representação digital correspondente.</p>
        </div>
        <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center justify-center px-10 py-6 sm:px-14 sm:py-7 bg-blue-600 text-white rounded-3xl text-lg sm:text-xl font-black uppercase tracking-[0.2em] hover:bg-blue-700 hover:scale-[1.05] transition-all shadow-xl">
          Agendar Reunião
          <ArrowRight className="ml-4 w-6 h-6 sm:w-7 h-7" />
        </a>
      </div>
    </div>
  </section>
);

const SolutionSection: React.FC = () => (
  <section id="solucao" className="py-24 sm:py-48 bg-slate-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 container-padding">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="order-2 lg:order-1 hidden sm:block">
           <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8">
                 <div className="aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Consultório" />
                 </div>
                 <div className="aspect-square bg-slate-950 rounded-[3rem] flex items-center justify-center">
                    <Sparkles className="text-blue-500 w-16 h-16 animate-pulse" />
                 </div>
              </div>
              <div className="space-y-8 pt-16">
                 <div className="aspect-square bg-blue-600 rounded-[3rem] flex items-center justify-center">
                    <ShieldCheck className="text-white w-16 h-16" />
                 </div>
                 <div className="aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Estrutura" />
                 </div>
              </div>
           </div>
        </div>
        <div className="order-1 lg:order-2">
           <div className="inline-flex items-center space-x-3 text-blue-600 mb-8 sm:mb-10">
             <div className="w-10 h-1 bg-blue-600 rounded-full" />
             <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-[0.4em]">Future Agency Tecnology</span>
           </div>
           <SectionTitle weight="black" gradient>A Solução de Autoridade Digital</SectionTitle>
           <div className="space-y-10 text-xl sm:text-2xl text-slate-500 font-light leading-relaxed mobile-text">
             <p>
               Desenvolvemos sites institucionais completos focado em <span className="text-slate-950 font-black">conversão e autoridade máxima</span> para o setor odontológico.
             </p>
             <div className="grid grid-cols-1 gap-6 pt-8">
               {[
                 "Site Institucional Premium Completo",
                 "Design Moderno alinhado ao luxo clínico",
                 "Foco em Atração de Pacientes de todos os graus sociais",
                 "Comunicação Ética e Profissional",
                 "Presença Digital de Alta Performance"
               ].map((item, i) => (
                 <div key={i} className="flex items-center space-x-5 group">
                   <div className="w-3 h-3 bg-blue-600 rounded-full group-hover:scale-150 transition-transform shadow-lg" />
                   <span className="text-slate-900 font-bold group-hover:text-blue-600 transition-colors text-lg">{item}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section id="agendar" className="py-24 sm:py-56 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center container-padding">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-[4rem] sm:rounded-[6rem] p-8 sm:p-24 md:p-48 relative overflow-hidden shadow-3xl">
        <div className="absolute inset-0 futuristic-dots opacity-5 pointer-events-none" />
        <div className="absolute -bottom-64 -right-64 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center space-x-3 px-5 py-2 sm:px-8 sm:py-3 bg-white/10 backdrop-blur-3xl rounded-full mb-10 sm:mb-16 border border-white/10 max-w-full overflow-hidden">
             <Star className="w-4 h-4 sm:w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse flex-shrink-0" />
             <span className="text-[9px] sm:text-[13px] font-black text-white uppercase tracking-[0.1em] sm:tracking-[0.5em] whitespace-nowrap overflow-hidden text-ellipsis">Convite Estratégico Exclusivo</span>
          </div>
          <h2 className="text-4xl md:text-9xl font-black text-white mb-10 sm:mb-16 leading-[1.1] text-impact-strong mobile-title break-words w-full">
            A CLINICA Sorriso Feliz <br className="hidden sm:block" /> merece VISIBILIDADE.
          </h2>
          <p className="text-xl md:text-4xl text-slate-300 font-light mb-16 sm:mb-24 leading-relaxed mobile-text">
            Vamos entender o momento atual da sua clínica em <span className="text-white font-black underline decoration-blue-500 underline-offset-12">Santa Luzia</span> e apresentar a solução definitiva.
          </p>
          <div className="flex flex-col items-center gap-8 sm:gap-10 w-full">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              className="group inline-flex items-center justify-center px-8 py-6 sm:px-20 sm:py-8 bg-white text-slate-950 rounded-[2rem] sm:rounded-[2.5rem] text-lg sm:text-3xl font-black hover:bg-slate-50 hover:scale-[1.05] transition-all w-full sm:w-auto"
            >
              Agendar Reunião
              <ArrowRight className="ml-4 sm:ml-5 w-6 h-6 sm:w-10 h-10 group-hover:translate-x-4 transition-transform" />
            </a>
            <div className="flex items-center space-x-4 mt-6 sm:mt-12 opacity-60">
              <MapPin size={20} className="text-blue-500" />
              <p className="text-[9px] sm:text-[14px] text-slate-400 uppercase tracking-[0.15em] sm:tracking-[0.3em] font-black break-words">Consultoria Premium • Av. Brasília, 1557</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-white py-20 sm:py-40 border-t border-slate-50">
    <div className="max-w-7xl mx-auto px-6 container-padding">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-16 md:mb-0">
          <div className="flex items-center space-x-4 mb-8 sm:mb-12">
            <div className="w-12 h-12 sm:w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center shadow-3xl">
              <Layers className="text-white w-7 h-7 sm:w-9 h-9" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-[0.3em] sm:tracking-[0.45em] uppercase text-slate-950 leading-none">Future Agency</span>
              <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.1em] sm:tracking-[0.15em] text-blue-600 uppercase">Tecnology</span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              Proposta estratégica institucional exclusiva para a <span className="text-slate-950 font-black uppercase tracking-widest">Clínica Sorriso Feliz</span>. <br />
              Av. Brasília, 1557 - São Benedito, Santa Luzia - MG.
            </p>
            <div className="flex flex-col space-y-2">
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">CNPJ: 59.627.142/0001-26</span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Future Agency Tecnology</span>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-widest">Responsável: Pedro Henrique</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left md:text-right flex flex-col items-start md:items-end">
          <p className="text-lg sm:text-xl text-slate-500 font-black tracking-tight">© {new Date().getFullYear()} Future Agency</p>
          <div className="w-32 sm:w-48 h-1.5 bg-gradient-to-r from-blue-600 to-transparent my-6 sm:my-8 rounded-full" />
          <p className="text-[10px] sm:text-[12px] text-slate-400 tracking-[0.3em] sm:tracking-[0.5em] uppercase font-black">Autoridade Digital • Saúde • Excelência</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <MapSection />
        <FinancialImpact />
        <MiddleCTA />
        <SolutionSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}