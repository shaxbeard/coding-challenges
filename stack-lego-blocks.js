function stackLegoBlocks(rows, columns, height) {
  // Calculate the total number of Lego blocks
  const totalBlocks = rows * columns * height;

  // Create an array to represent the stacked Lego blocks
  const stackedBlocks = Array.from(
    { length: totalBlocks },
    (_, index) => index + 1
  );

  // Print the stacked Lego blocks
  let output = "";
  for (let i = 0; i < stackedBlocks.length; i++) {
    if (i !== 0 && i % columns === 0) {
      output += "\n";
    }
    if (i !== 0 && i % (rows * columns) === 0) {
      output += "\n";
    }
    output += "B";
  }

  console.log(output);
}

// Example usage:
console.log(stackLegoBlocks(4, 8, 2));
