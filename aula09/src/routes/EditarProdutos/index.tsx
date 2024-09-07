import { useNavigate, useParams } from "react-router-dom";
import "../../listaProdutos";
import { useEffect, useRef, useState } from "react";
import { ObjetoLista } from "../../types";
import styles from "../../css/ModalEditar.module.css";

export default function EditarProdutos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "EDITAR PRODUTOS";
  
  const navigate  = useNavigate();

  const { id } = useParams();

  const listaProdutosString = localStorage.getItem("lista") || '[]';
  
  const lista:ObjetoLista[] = JSON.parse(listaProdutosString);
  
  const [produto, setProduto] = useState<ObjetoLista>({
    id: 0,
    nome: "",
    preco: 0,
    qtd: 0,
  });

  
  
  const [isModal, setIsModal] = useState(true);
  
  //Utilizando o hook useRef
  const currentDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
       const p = lista.find((prod) => prod.id == Number(id));
       setProduto(p);
        if(isModal){
          currentDialog.current?.showModal();
        }else{
          currentDialog.current?.close();
        }
  }, [isModal]);


  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    const indexProduto = lista.findIndex((p)=> p.id == produto.id);
    lista.splice(indexProduto,1,produto);
    localStorage.setItem("lista", JSON.stringify(lista));
    setIsModal(false);
    alert("Produto editado com sucesso!!");
    //Realizando redirecionamento!
    navigate("/produtos");
  }

  return (
    <div>
      <dialog  ref={currentDialog} className={styles.modalEditar}>
        <h1>Editar Produtos</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nome:</label>
                <input type="text" value={produto?.nome} onChange={(e) => setProduto({...produto, nome: e.target.value})} />
              </div>
              <div>
                <label>Quantidade:</label>
                <input type="number" value={produto?.qtd} onChange={(e) => setProduto({...produto, qtd: parseInt(e.target.value)})} />
              </div>
              <div>
                <label>Preço:</label>
                <input type="number" value={produto?.preco} onChange={(e) => setProduto({...produto, preco: parseInt(e.target.value)})} />
              </div>
              <div>
                <button type="submit">Editar</button>
              </div>
            </form>
          </div>
      </dialog>
    </div>
  );
}