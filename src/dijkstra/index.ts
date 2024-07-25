/*
            Enquanto houver grafos a serem processados

            Pegue o vertice que esta mais proximo do inicio

            Atualize os custos para os seus vizinhos

            Se qualquer um dos custos dos vizinhos for atualizado atualize tambem o pai

            Marque o vertice como processado

            Volte ao comeco

*/
type Vertex = string;
type Edge = {
    target: Vertex;
    weight: number;
};

const graph: Map<Vertex, Edge[]> = new Map([
    [
        "A",
        [
            { target: "B", weight: 1 },
            { target: "C", weight: 4 },
        ],
    ],
    [
        "B",
        [
            { target: "A", weight: 1 },
            { target: "C", weight: 2 },
            { target: "D", weight: 5 },
        ],
    ],
    [
        "C",
        [
            { target: "A", weight: 4 },
            { target: "B", weight: 2 },
            { target: "D", weight: 1 },
        ],
    ],
    [
        "D",
        [
            { target: "B", weight: 5 },
            { target: "C", weight: 1 },
        ],
    ],
]);

function dijkstra(startVertex: Vertex) {
    const distances = new Map<Vertex, number>();
    const visited = new Set<Vertex>();
    const previous = new Map<Vertex, Vertex | null>();

    graph.forEach((_, vertex) => {
        distances.set(vertex, Number.POSITIVE_INFINITY);
        previous.set(vertex, null);
    });

    distances.set(startVertex, 0);

    function findMinVertex() {
        let minVertex: Vertex | null = null;
        let minDistance = Number.POSITIVE_INFINITY;

        distances.forEach((distance, vertex) => {
            if (!visited.has(vertex) && distance < minDistance) {
                minDistance = distance;
                minVertex = vertex;
            }
        });

        return minVertex;
    }

    while (true) {
        const currentVertex = findMinVertex();
        if (!currentVertex) break;

        const currentDistance = distances.get(currentVertex)!;
        const neighbors = graph.get(currentVertex) ?? [];

        for (const neighbor of neighbors) {
            const totalDistance = currentDistance + neighbor.weight;

            if (totalDistance < distances.get(neighbor.target)!) {
                distances.set(neighbor.target, totalDistance);
                previous.set(neighbor.target, currentVertex);
            }
        }

        visited.add(currentVertex);
    }

    return { distances, previous };
}

// Exemplo de uso: encontrar distâncias a partir do vértice 'A'
const result = dijkstra("A");
console.log(result.distances); // Distâncias mínimas de 'A' para cada vértice
console.log(result.previous); // Caminho mais curto para cada vértice
