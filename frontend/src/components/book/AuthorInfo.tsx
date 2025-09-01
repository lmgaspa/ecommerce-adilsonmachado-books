interface AuthorInfoProps {
  author: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {
  return (
    <div className="bg-background rounded-lg shadow-lg p-8 mb-0">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src="/images/adylson.webp" alt={author} className="w-32 h-32 rounded-full shadow-md" />
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">{author}</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            ADYLSON Lima MACHADO, nasceu em Monte Alegre da Bahia (atualmente Mairi). Reside em Itabuna. Advogado e professor, leciona Direito Municipal e Direito Financeiro no Curso de Ciências Jurídicas da Universidade Estadual de Santa Cruz - UESC, em Ilhéus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
