// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const temp = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

function mergeSort(arr) {

  if (arr.length <= 1) return arr; 

  const midpoint = Math.floor(arr.length / 2);
  const front = arr.slice(0, midpoint);
  const back = arr.slice(midpoint);

  const sortedFront = mergeSort(front);
  const sortedBack = mergeSort(back);
  return merge(sortedFront, sortedBack);
}

function merge(left, right) {

  const loop = (merged, left, right) => {

    if (!left.length && !right.length) return merged;
    if (!left.length) return merged.concat(right);
    if (!right.length) return merged.concat(left);
    const headLeft = left[0];
    const tailLeft = left.slice(1);
    const headRight = right[0];
    const tailRight = right.slice(1);
    if (headLeft < headRight) {
      return loop(merged.concat([headLeft]), tailLeft, right);
    } else {
      return loop(merged.concat([headRight]), left, tailRight);
    }
  }

  return loop([], left, right);
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
