# Algoritmos em Typescript

- Seguindo o livro "Entendendo algoritmos"

Usando:

[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)

## Anotacoes


### Notacao Big O

- A notacao tem esse nome por que conta quantas operacoes foram feitas e nao o tempo de execucao, ja q o tempo depende do ciclo de maquina do processador, oq e diferente de um computador pra outro

- A notacao big O leva sempre em consideracao o pior caso, ou seja se percorro um array de n posicoes e tenho o pior caso entao tenho n operacoes pra fazer, ou seja O(n)

- Constantes sao ignorados na notacao, entao se uma notacao tem complexidade O(n^2 / 2) ou O(n^2 + 1) nao importa, no fim elas sao O(n^2)

### Listas e arrays

- Array voce precisa criar espaco na memoria pra inserir todas elas juntas, as listas um elemento aponta para o proximo

- Lista tem complexidade leitura de O(n) e de insercao 0(1), array tem complexidade de leitura O(1) e de insercao de O(n)

- Listas sao melhores pra inserir informacao no meio delas

- Uma lista e melhor pra deletar elementos tbm, pois somente precisa mudar pra onde o elemento anterior vai  apontar