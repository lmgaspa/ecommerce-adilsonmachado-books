import Container from '../components/common/Container';
import ContentBlock from '../components/common/ContentBlock';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <ContentBlock 
        title="Adilson Machado"
        imageUrl="/images/adilson.webp"
        description="Adylson Lima Machado, nasceu em Monte Alegre da Bahia (atualmente Mairi).
        Reside em Itabuna. Advogado e professor, leciona Direito Municipal e Direito Financeiro
        no Curso de Ciências Jurídicas da Universidade Estadual de Santa Cruz - UESC, em Ilhéus."
        isAuthor
      />

      <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Livros</h2>
      <div className="flex flex-wrap justify-center gap-16">
        <div onClick={() => navigate('/books/extase')}>
          <ContentBlock 
            title="Êxtase" 
            imageUrl="/images/extase.webp" 
            description="De birra com Jorge Amado e outras crônicas grapiúnas." 
          />
        </div>
        <div onClick={() => navigate('/books/sempre')}>
          <ContentBlock 
            title="Para Sempre Felizes" 
            imageUrl="/images/sempre.webp" 
            description="Coisas de neto." 
          />
        </div>
        <div onClick={() => navigate('/books/regressantes')}>
          <ContentBlock 
            title="Regressantes" 
            imageUrl="/images/regressantes.webp" 
            description="Histórias de luta e resistência." 
          />
        </div>
        <div onClick={() => navigate('/books/versos')}>
          <ContentBlock 
            title="Versos desnudos: poemas em tempos tensos" 
            imageUrl="/images/versos.webp" 
            description="Versos desnudos: poemas em tempos tensos." 
          />
        </div>
        <div onClick={() => navigate('/books/versi')}>
          <ContentBlock 
            title="Versi spogli: poesie in tempi difficili" 
            imageUrl="/images/versi.webp" 
            description="Versi spogli: poesie in tempi difficili." 
          />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
