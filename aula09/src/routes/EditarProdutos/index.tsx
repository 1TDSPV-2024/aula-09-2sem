import { useParams } from "react-router-dom";
import "../../listaProdutos";
import { useEffect, useRef, useState } from "react";
import { ObjetoLista } from "../../types";
import styles from "../../css/ModalEditar.module.css";

export default function EditarProdutos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "EDITAR PRODUTOS";
  
  const { id } = useParams();

  const listaProdutosString = localStorage.getItem("lista") || '[]';
  
  const lista:ObjetoLista[] = JSON.parse(listaProdutosString);
  
  const [produto, setProduto] = useState<ObjetoLista>();
  
  const [isModal, setIsModal] = useState(true);
  
  //Utilizando o hook useRef
  const currentDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
       setProduto(lista.find((prod) => prod.id == Number(id)));
        if(isModal){
          currentDialog.current?.showModal();
        }else{
          currentDialog.current?.close();
        }
  }, [isModal]);

  return (
    <div>
      <dialog  ref={currentDialog} className={styles.modalEditar}>
        <h1>Editar Produtos</h1>
          <div>
          </div>
      </dialog>
    </div>
  );
}