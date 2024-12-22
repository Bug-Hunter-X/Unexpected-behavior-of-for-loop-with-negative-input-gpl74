function printNumbers(n: number): void {
  if (n < 1) {
    console.error("Input number must be a positive integer.");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works as expected
printNumbers(-5); // Throws an error, indicating invalid input