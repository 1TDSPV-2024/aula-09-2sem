import { Link } from "react-router-dom";
import "../../listaProdutos";
import { MinhaTabela } from "../../style/styled";
import { ObjetoLista } from "../../types";
import { useState } from "react";

export default function Produtos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "PRODUTOS";
  
  const listaProdutosString = localStorage.getItem("lista") || '[]';
  const lista = JSON.parse(listaProdutosString);
  
  const [produtos] = useState<ObjetoLista[]>(lista);

  return (
    <div>
      <h1>Produtos Eletrônicos</h1>
      <MinhaTabela>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Editar / Excluir</th>
          </tr>
        </thead>
        <tbody>
          {/* COMENTÁRIO */}
          {produtos.map((produto) => (
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
              Total de produtos : <span>{produtos.length}</span>
            </td>
          </tr>
        </tfoot>
      </MinhaTabela>
    </div>
  );
}