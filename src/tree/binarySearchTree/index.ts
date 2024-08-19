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
        return this.searchNode(this.root, key)
    }

    searchNode(node: BinaryTreeNode | null, key: number): BinaryTreeNode | null {
        if (node === null) {
            return null // caso base caso nao encontre um valor
        }

        if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // vou fazendo a pesquisa a esquerda e a direita ate encontrar o no
            return this.searchNode(node.left, key)
        }
        if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key)
        }
        return node // caso base caso encontro um no que seja igual a pesquisa
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

    min(): BinaryTreeNode | null {
        return this.minNode(this.root)
    };

    minNode(node: BinaryTreeNode | null): BinaryTreeNode | null {
        // solucao com while
        // let current = node;

        // while (current !== null && current.left !== null) {
        //     current = current.left;
        // }

        // return current

        if (node !== null && node.left !== null) {
            return this.minNode(node.left)
        }

        return node // caso base
    }

    max(): BinaryTreeNode | null {

        return this.maxNode(this.root)
    }

    maxNode(node: BinaryTreeNode | null): BinaryTreeNode | null {

        // solucao com while
        // let current = node;

        // while (current !== null && current.right !== null) {
        //     current = current.right;
        // }

        // return current

        if (node !== null && node.right !== null) {
            return this.maxNode(node.right)
        }

        return node // caso base
    }

    remove(key: number) {
        this.root = this.removeNode(this.root, key);
    }

    removeNode(node: BinaryTreeNode | null, key: number): null | BinaryTreeNode {
        if (node === null) {
            return null
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key)
            return node
        }

        if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }

        if (node.left === null) {
            node = node.right;
            return node;
        }

        if (node.right === null) {
            node = node.left;
            return node
        }

        const aux = this.minNode(node.right);
        node.key = aux?.key;
        node.right = this.removeNode(node.right, aux?.key)
        return node
    }

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


console.log(`O valor minimo dessa arvore e ${tree.min()?.key}`)
console.log(`O valor maximo dessa arvore e ${tree.max()?.key}`)

const search = tree.search(9)
console.log(`Como e o no de valor 9? key: ${search?.key}, left: ${search?.left?.key ?? search?.left}, right: ${search?.right?.key ?? search?.right}`)
// console.log(tree)

//teste de remocao do no 12

tree.remove(12);
tree.inOrderTraverse((node) => console.log(`Temos o no de valor ${node.key} com filho a esquerda de valor ${node.left?.key} e filho a direita de valor ${node.right?.key}`));


/**
 * Uma forma bacana de resolver a questao de pre ordem e da seguinte forma
 * 
 * function preorderTraversal(root: TreeNode | null): number[] {
    if(root==null){
        return []
    }
    return [root.val,...preorderTraversal(root.left), ...preorderTraversal(root.right)]
    
};
 * 
 */
