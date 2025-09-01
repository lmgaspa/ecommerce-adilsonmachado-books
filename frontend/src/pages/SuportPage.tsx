import Container from '../components/common/Container';

function SupportPage() {
  return (
    <Container>
      <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">
        Suporte
      </h2>

      <div className="mt-12 text-center text-lg leading-relaxed">
        <p>
          Em caso de dúvida sobre os livros, pagamento, ou status do pedido,
          entrar em contato com <strong>Adylson Machado</strong>.
        </p>
        <p className="mt-6">
          <strong>WhatsApp:</strong> (73) 98868-0048
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a 
            href="mailto:adylsonmachado@hotmail.com" 
            className="text-primary hover:underline"
          >
            adylsonmachado@hotmail.com
          </a>
        </p>
      </div>
    </Container>
  );
}

export default SupportPage;
