// Wolves have been reintroduced to Great Britain. You are a sheep farmer, 
// and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. 
// Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, 
// return "Pls go away and stop eating my sheep". 

// Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"


//     0        1        2        3       4     # Index
//     5        4        3        2       1     # Queue "position"
// ["sheep", "sheep", "sheep", "wolf", "sheep"] # Length = 5
//                                ^             # Wolf position = 5 - 3 = 2
//                                        ^     # Sheep position = 2 - 1 = 1


// function warnTheSheep(queue) {
//     const wolfPosition = queue.indexOf("wolf");
//     return wolfPosition;
// }

// function warnTheSheep(queue) {
//     let wolfPosition = queue.length - queue.indexOf("wolf"); // The "position" is length minus index
//     let sheepPosition = wolfPosition - 1; // The "position" decreases along the array
//     if (sheepPosition === 0)
//         return 'Pls go away and stop eating my sheep';
//     return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
// }

function warnTheSheep(queue) {
    const wolfPosition = queue.reverse().indexOf('wolf');
    return wolfPosition === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ wolfPosition }! You are about to be eaten by a wolf!`;
  }

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!")