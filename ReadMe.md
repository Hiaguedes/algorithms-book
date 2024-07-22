# Algoritmos em Typescript

- Seguindo o livro "Entendendo algoritmos"

Usando:

[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)

## Anotacoes


### Notacao Big O

- A notacao tem esse nome por que conta quantas operacoes foram feitas e nao o tempo de execucao, ja q o tempo depende do ciclo de maquina do processador, oq e diferente de um computador pra outro

- A notacao big O leva sempre em consideracao o pior caso, ou seja se percorro um array de n posicoes e tenho o pior caso entao tenho n operacoes pra fazer, ou seja O(n)

- Constantes sao ignorados na notacao, entao se uma notacao tem complexidade O(n^2 / 2) ou O(n^2 + 1) nao importa, no fim elas sao O(n^2), a notacao big O se preocupa mais quando existem uma quantidade massiva de dados a constante nao afeta tanto em comparacao com 4 bilhoes de dados

### Listas e arrays

- Array voce precisa criar espaco na memoria pra inserir todas elas juntas, as listas um elemento aponta para o proximo

- Lista tem complexidade leitura de O(n) e de insercao 0(1), array tem complexidade de leitura O(1) e de insercao de O(n)

- Listas sao melhores pra inserir informacao no meio delas

- Uma lista e melhor pra deletar elementos tbm, pois somente precisa mudar pra onde o elemento anterior vai  

### Recursividade

- Voce sabe mas recursividade tem o caso recursivo q e pra chamar a si mesmo caso esse caso seja verdadeiro e o caso base pra quebrar a recursividade  

- A recursividade implica em empilhar mais funcoes na pilha de chamadas, uma forma de minimizar isso e usando recursao de cauda.

- Em programacao funcional existem linguagen que nao tem lacos de repeticao como o haskell e nela voce faria uma funcao de somatoria da seguinte forma

```hs
    soma [] = 0
    soma(x:xs) = x + (soma xs)
```

### Hash Table

- O seu amigo pra fazer pesquisa com complexidade O(1) pois sabe tudo que voce perguntar a ele