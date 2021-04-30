let number = Number(prompt("Enter Stars Number"));

for (let i = 0; i < number; i++) {
  for (let j = 0; j < i; j++) {
    document.write(`*`);
  }
  document.write(`<br>`);
}
