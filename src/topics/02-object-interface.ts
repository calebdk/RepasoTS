//arreglos que vayamos a utilizar
const skills: string[] = ['bash', 'Counter','Healing'];

//interfaces que vayamos a usar
interface Character {
    name: String;
    hp: number;
    skills: string[];
    hometown?: string
}

//arreglo principal
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};


//propiedades faltantes
strider.hometown = 'Rivendell';

console.table(strider)

export {};