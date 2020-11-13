export class Student {
    constructor(
        public name: string,
        public school: string
    ) {}
}

export const students = [
    new Student('Claire', 'Luce'),
    new Student('Maggie', 'Luce'),
    new Student('Tony', 'Kennedy'),
    new Student('Mike', 'Kennedy')
];