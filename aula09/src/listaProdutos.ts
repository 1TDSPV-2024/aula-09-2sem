type ObjetoLista = {
    id: number;
    nome: string;
    qtd: number;
    preco: number
}

//Gerando uma lista de objetos
export const listaProdutos: ObjetoLista[] = [

    { id: 1, nome: "Mouse", qtd: 10, preco: 78 },
    { id: 2, nome: "Monitor", qtd: 3, preco: 2378 },
    { id: 3, nome: "Teclado", qtd: 13, preco: 145 },
    { id: 4, nome: "Cadeira", qtd: 2, preco: 3470 },
    { id: 5, nome: "Mouse-Pad", qtd: 100, preco: 25 }
];