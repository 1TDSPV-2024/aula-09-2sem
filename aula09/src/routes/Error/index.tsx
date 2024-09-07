

export default function Error() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "Erro 404";

  const imgPathNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <div>
      <h1>Erro 404 - Página não encontrada.</h1>
      <div>
        <figure>
          <img src={`/img404/img-${imgPathNumber}-404.jpg`} alt="Erro-404" />
        </figure>
      </div>
    </div>
  );
}