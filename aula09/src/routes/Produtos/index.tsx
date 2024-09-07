import { Link } from "react-router-dom";
import { listaProdutos } from "../../listaProdutos";


export default function Produtos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "PRODUTOS";

  return (
    <div>
      <h1>Produtos Eletrônicos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {/* COMENTÁRIO */}
          {listaProdutos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.qtd}</td>
              <td>{produto.preco}</td>
              <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link> </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              Total de produtos : <span>{listaProdutos.length}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}