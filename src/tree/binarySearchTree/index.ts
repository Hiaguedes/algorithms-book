export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}

export function defaultCompare<T>(a: T, b: T): number {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}


export class BinaryTreeNode {
    key: number;
    left: null | BinaryTreeNode;
    right: null | BinaryTreeNode;

    constructor(key: number) {
        this.key = key
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree {
    root: null | BinaryTreeNode;
    compareFn: <T>(a: T, b: T) => number

    constructor(compareFn = defaultCompare) {
        this.root = null;
        this.compareFn = compareFn;
    }

    insertNode(node: BinaryTreeNode, key: number) { // funcao so sera chamada quando tiver um no na arvore
        if (this.compareFn(key, node?.key) === Compare.LESS_THAN) { // comparo se valor passado e menor que a chave
            if (node?.left === null) { // se valor do no a esquerda for null, ele passa a ser esse no com left e right nulos
                node.left = new BinaryTreeNode(key);
            } else {
                this.insertNode(node.left, key) // se nao for, entao comparo esse valor com o no, faco isso ate encontrar valor nulo
            }
        } else { // aqui comparo se for igual ou maior, pra colocar no no a direita e faco o mesmo raciocinio
            if (node?.right === null) {
                node.right = new BinaryTreeNode(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }

    insert(key: number) {
        if (this.root === null) {
            this.root = new BinaryTreeNode(key)
        } else {
            this.insertNode(this.root, key)
        }
    }

    search(key: number) {

    }

    inOrderTraverse(callback?: (node: BinaryTreeNode) => void) {
        this.inOrderTraverseFromRoot(this.root, callback)
    }

    inOrderTraverseFromRoot(node: BinaryTreeNode | null, callback?: (node: BinaryTreeNode) => void) {
        if (node !== null) { // caso base, onde pararemos a recursao
            this.inOrderTraverseFromRoot(node.left, callback); // visitamos o no a esquerda e se tiver casos a esquerda eu vou colocando eles como prioridade
            callback ? callback(node) : null; // quando resolvido eu executo a funcao de callback, se houver
            this.inOrderTraverseFromRoot(node?.right, callback) // depois de resolver as pilhas da esquerda eu vejo as da direita
        }
    }

    preOrderTraverse(callback?: (node: BinaryTreeNode) => void) {
        this.preOrderTraverseFromRoot(this.root, callback)
    }

    preOrderTraverseFromRoot(node: BinaryTreeNode, callback?: (node: BinaryTreeNode) => void) {
        if (node !== null) {
            callback ? callback(node) : null; // aqui se visita o no raiz antes, ai seus valores a esquerda e direita, sendo que ele vai resolvendo os da esquerda primeiro
            this.preOrderTraverseFromRoot(node.left, callback);
            this.preOrderTraverseFromRoot(node.right, callback);
        }
    }

    postOrderTraverse(callback?: (node: BinaryTreeNode) => void) {
        this.postOrderTraverseFromRoot(this.root, callback)
    }

    postOrderTraverseFromRoot(node: BinaryTreeNode, callback?: (node: BinaryTreeNode) => void) {
        if (node !== null) {
            this.postOrderTraverseFromRoot(node.left, callback);
            this.postOrderTraverseFromRoot(node.right, callback);
            callback ? callback(node) : null; // aqui se visita o no raiz antes, ai seus valores a esquerda e direita, sendo que ele vai resolvendo os da esquerda primeiro
        }
    }

    min() { }
    max() { }
    remove(key: number) { }

}

const tree = new BinarySearchTree();

tree.insert(10)
tree.insert(9)
tree.insert(6)
tree.insert(11)
tree.insert(12)

console.log("In order traverse")
tree.inOrderTraverse((node) => console.log(`Temos o no de valor ${node.key} com filho a esquerda de valor ${node.left?.key} e filho a direita de valor ${node.right?.key}`));
console.log("pre order traverse")
tree.preOrderTraverse((node) => console.log(`Temos o no de valor ${node.key} com filho a esquerda de valor ${node.left?.key} e filho a direita de valor ${node.right?.key}`));
console.log("post order traverse")
tree.postOrderTraverse((node) => console.log(`Temos o no de valor ${node.key} com filho a esquerda de valor ${node.left?.key} e filho a direita de valor ${node.right?.key}`));

// console.log(tree)