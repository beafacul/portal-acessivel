import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContentSection from "@/components/ContentSection";
import SectionDivider from "@/components/SectionDivider";
import CaneIcon from "@/components/CaneIcon";
import { BookOpen, Target, Eye, Users, Brain, Smartphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <SiteHeader />

      <main id="conteudo-principal" role="main" className="flex-1">
        {/* Hero */}
        <section
          aria-label="Introdução ao portal"
          className="relative overflow-hidden bg-primary/10 border-b border-border"
        >
          <div className="container mx-auto px-4 py-12 sm:py-20 text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Eye size={40} className="text-primary-foreground" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
              Tecnologias Assistivas para
              <br />
              <span className="text-primary">Deficiência Visual</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Um portal dedicado à divulgação e análise de tecnologias que promovem
              acessibilidade, autonomia e inclusão social.
            </p>
            <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground" aria-hidden="true">
              <CaneIcon size={18} />
              <Users size={18} />
              <Brain size={18} />
              <Smartphone size={18} />
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" aria-hidden="true" />
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-10 sm:py-16 space-y-6 max-w-3xl">
          <ContentSection
            id="introducao"
            title="Introdução"
            icon={<BookOpen size={22} aria-hidden="true" />}
          >
            <p>
              Segundo dados do Instituto Brasileiro de Geografia e Estatística (IBGE, 2022),
              mais de 6,5 milhões de pessoas no Brasil possuem algum tipo de deficiência visual,
              sendo aproximadamente 6 milhões com baixa visão. Apesar disso, nem todas têm acesso
              ou conhecimento acerca das tecnologias assistivas disponíveis, as quais podem facilitar
              a realização de atividades cotidianas e contribuir significativamente para a qualidade de vida.
            </p>
            <p>
              Observações realizadas em estudos práticos indicam que muitos indivíduos prezam por sua
              autonomia e já fazem uso de ferramentas assistivas; contudo, ainda há um potencial expressivo
              para o desenvolvimento de inovações que ampliem essa independência.
            </p>
            <p>
              Conforme definido pelo Comitê de Ajudas Técnicas (CAT, 2013), a Tecnologia Assistiva é uma
              área do conhecimento, de característica interdisciplinar, que abrange produtos, recursos,
              metodologias, estratégias, práticas e serviços com o objetivo de promover a funcionalidade,
              a atividade e a participação de pessoas com deficiência, incapacidades ou mobilidade reduzida,
              visando sua autonomia, independência, qualidade de vida e inclusão social.
            </p>
            <p>
              Atualmente, a Inteligência Artificial (IA) tem impulsionado avanços significativos na área da
              acessibilidade, especialmente no desenvolvimento de tecnologias assistivas. Aplicativos como
              Seeing AI e Be My AI vêm crescendo gradativamente, oferecendo recursos que auxiliam pessoas com
              deficiência visual na interpretação do ambiente, como reconhecimento de textos, objetos, pessoas
              e cenas, contribuindo para maior autonomia e inclusão social.
            </p>
            <p>
              Além disso, existem diversas tecnologias assistivas amplamente reconhecidas que contribuem para a
              melhoria da qualidade de vida desse público, como leitores de tela, que possibilitam o acesso a
              conteúdos digitais, e aplicativos voltados à mobilidade e à orientação espacial, que auxiliam na
              locomoção e na percepção do ambiente.
            </p>
            <p>
              Embora as tecnologias assistivas estejam cada vez mais presentes no cotidiano, muitos recursos
              ainda são pouco divulgados, o que impede que grande parte da população aproveite seus benefícios.
              Esta iniciação científica tem como objetivo apresentar as tecnologias assistivas voltadas a pessoas
              com deficiência visual e realizar uma análise comparativa entre tecnologias selecionadas, evidenciando
              seus impactos na promoção da acessibilidade e da inclusão social.
            </p>
          </ContentSection>

          <SectionDivider />

          <ContentSection
            id="objetivo"
            title="Objetivo"
            icon={<Target size={22} aria-hidden="true" />}
          >
            <p>
              Este projeto tem como foco a análise e a comparação das tecnologias assistivas existentes
              voltadas para pessoas com deficiência visual, utilizando, para isso, material bibliográfico
              e experiências relatadas por indivíduos que vivenciam essa realidade.
            </p>
            <p>
              O objetivo central é identificar dificuldades, limitações e falhas nessas tecnologias,
              bem como em sua divulgação, além de contribuir para torná-las mais conhecidas entre o público
              que pode se beneficiar de seu uso.
            </p>
            <p>
              A partir de um estudo aprofundado das tecnologias disponíveis e da realização de testes
              aplicados com pessoas com deficiência visual, são analisados os pontos positivos e negativos
              de cada ferramenta, possibilitando, assim, a proposição de melhorias.
            </p>
            <p>
              Por fim, foi desenvolvido um portal virtual voltado à divulgação dessas tecnologias,
              consistindo em um site inclusivo e informativo. O portal foi elaborado com base em princípios
              de design inclusivo, com o objetivo de exemplificar boas práticas de acessibilidade digital,
              além de disponibilizar conteúdos relevantes sobre as tecnologias assistivas atuais.
            </p>
          </ContentSection>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
