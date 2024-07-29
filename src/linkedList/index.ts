
export function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}

export class LinkedListNode<T> {
    constructor(
        public element: T,
        public next?: LinkedListNode<T>,
    ) { }
}

export class LinkedList<T> {
    protected count: number; // contador de elementos
    protected head: LinkedListNode<T> | undefined;

    constructor(protected equalsFn: <T>(a: T, b: T) => boolean = defaultEquals) {
        this.count = 0;
        this.equalsFn = equalsFn;
    }

    push(element: T) {
        const node = new LinkedListNode(element);
        let current: LinkedListNode<T> | undefined = undefined;

        if (this.head == null) {
            // se o head for nulo entao o head e o elemento que queremos colocar
            this.head = node;
        } else {
            current = this.head;
            while (current?.next != null) {
                // itera ate o ultimo elemento
                current = current?.next;
            }

            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            current!.next! = node; // insere o no no elemento que esta null
        }

        this.count++; // incrementa o counter
    }

    insert(element: T, index: number) {
        if (index >= 0 && index <= this.count) {
            const node = new LinkedListNode(element);
            if (index === 0) {
                // const current = this.head;
                node.next = this.head; // e o next do node passa a ser o head
                this.head = node; // o index e 0, entao o head passa a ser o node
            } else {
                const previous = this.getElementAt(index - 1); // aponto o node pra posicao entre o previous e o current
                const current = previous?.next;
                node.next = current; // e faco a ligacao com os nexts de cada um
                if (previous) previous.next = node;
            }

            this.count++;
            return true;
        }

        return false;
    }

    getElementAt(index: number) {
        if (index >= 0 && index < this.count) { // verifica se esta dentro do espaco possivel

            let node = this.head; // incializo o node como o head pra iterar sobre ele

            // se nao for 0 o index
            for (let i = 0; i < index; i++) { // pra iterar sobre a lista
                node = node?.next; // avancar sobre a lista com o next
            } // o node avanca ate o valor que quero encontrar


            return node; // retorno o valor removido
        }
        return undefined; // caso nao exista
    }

    remove(element: T) {
        const index = this.indexOf(element);

        return this.removeAt(index)
    }

    removeAt(index: number) {
        let current = this.head;
        if (index === 0) {
            this.head = this.head?.next
        } else {
            const previous = this.getElementAt(index - 1);
            current = previous?.next;
            if (previous) previous.next = current?.next
        }

        this.count--;
    }

    indexOf(element: T) {
        let current = this.head;

        for (let i = 0; i < this.count && current != null; i++) { // itero sobre a lista
            if (this.equalsFn(element, current?.element)) { // comparo se o elemento da funcao e igual ao do elemento no current
                return i
            }
            current = current?.next // vou iterando sobre o current se nao for
        }

        return -1; // se nao existir retorna -1
    }

    length() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    clear() {
        this.head = undefined;
        this.count = 0;
    }

    toString() {
        if (this.head == null) {
            return ''
        }

        let objString = `${this.head?.element}`
        let current = this.head?.next;

        for (let i = 1; i < this.length() && current != null; i++) {
            objString = `${objString}, ${current?.element}`
            current = current?.next
        }

        return objString
    }

    getHead() {
        return this.head;
    }
}

const list = new LinkedList<number>();

list.push(1);
list.push(2);
list.push(3);

console.log(list.length());
console.log(list.getElementAt(1))
console.log(list.getHead())
list.remove(2)
console.log(list.toString())
