export function shuffle(array) {
  const newArray = array.slice();
  for (let i = 0; i < array.length; i += 1) {
    const j = Math.floor(Math.random() * i);
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
