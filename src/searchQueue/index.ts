import { Queue } from "@src/queue";

type Person = {
    name: string;
    isTarget: boolean;
    isVerified?: boolean;
}

const Relations = new Map<string, Person[]>([
    ['Alice', [{ name: 'Peggy', isTarget: false }]],
    ['Bob', [{ name: 'Susan', isTarget: true }]],
    ['Claire', [{ name: 'Urf', isTarget: true }]],
])

const searchQueue = () => {
    const initialList: Person[] = [
        {
            name: 'Alice',
            isTarget: false
        },
        {
            name: 'Bob',
            isTarget: false
        },
        {
            name: 'Claire',
            isTarget: false
        },
    ]
    const searchQueue = new Queue<Person>(initialList);
    const verifiedPersons = new Map<string, Person>();

    const personIsTarget = (person: Person) => person.isTarget;

    while (searchQueue.getQueue()) {
        const personToAnalyze = searchQueue.dequeue();

        if (personToAnalyze && !personToAnalyze.isVerified && personIsTarget(personToAnalyze)) {
            return personToAnalyze
        }

        verifiedPersons.set(personToAnalyze?.name, { ...verifiedPersons, isVerified: true })

        if (Relations.has(personToAnalyze?.name)) {
            searchQueue.queueMany(Relations.get(personToAnalyze?.name))
        }

    }

    return null
}

console.log(searchQueue())

export default searchQueue;