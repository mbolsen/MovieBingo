export function shuffle(array) {
  const newArray = array.slice();
  for (let i = 0; i < array.length; i += 1) {
    const j = Math.floor(Math.random() * i);
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function checkForWin(array) {
  console.log('checking for a win');
  // check rows
  for (let i = 0; i < array.length; i += 5) {
    if (array[i] + array[i + 1] + array[i + 2] + array[i + 3] + array[i + 4] === 5) {
      return true;
    }
  }
  // check columns
  for (let i = 0; i < 5; i += 1) {
    if (array[i] + array[i + 5] + array[i + 10] + array[i + 15] + array[i + 20] === 5) {
      return true;
    }
  }
  // check diagonals
  if (array[0] + array[6] + array[12] + array[18] + array[24] === 5) {
    return true;
  }
  if (array[4] + array[8] + array[12] + array[16] + array[20] === 5) {
    return true;
  }
  return false;
}
