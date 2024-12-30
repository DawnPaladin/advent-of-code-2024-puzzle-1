const inputFile = Deno.readTextFileSync('input.txt');

const leftList: number[] = [];
const rightList: number[] = [];

const lines = inputFile.split('\n');
lines.forEach((line, lineNumber) => {
	const pair = line.split('   ');
	if (pair.length !== 2) return;
	leftList.push(Number(pair[0]));
	rightList.push(Number(pair[1]));
})

console.log(`Populated ${leftList.length} pairs.`);

console.log("Sorting lists...");
leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

console.log("Calculating distance...");
let distance = 0;
for (let index = 0; index < leftList.length; index++) {
	const leftEl = leftList[index];
	const rightEl = rightList[index];
	distance += Math.abs(leftEl - rightEl);
}
console.log(`Total distance: ${distance}`);
