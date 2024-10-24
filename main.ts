const  arrayRows: number = 3;
const  arrayCols: number = 3;

let tictacArray: string[][] = Array.from({ length: arrayRows}, () => Array(arrayCols).fill(" "));

export function printArray(){
    tictacArray.forEach(function(row){
        console.log(row)
    });
}

export function playerMove(): [number, number] | null {
    const input = prompt("Enter a row and column number separated by a space, to play")
    
    if (input) {
        const [row, col] = input.split(" ").map(Number);

        if(row >= 0 && row <= 2 && col >= 0 && col <= 2){
            return [row, col];
        }
        else {
            console.log("Invalid input!")
        }
    }

    return null
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main){
    printArray();
}
