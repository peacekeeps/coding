function solution(str, end) {
  str = str.toLowerCase().split("");
  end = end.toLowerCase().split("");

  let counter = str.length - 1

  for (let j = end.length - 1; j >= 0; j--) {
    console.log(counter, j, end[j], str[counter])
    if(end[j] !== str[counter]) {
        return false
    }
    counter--
  }
  return true;
}

console.log(solution('sumo', 'omo'));

// Alt Solution

function solution(str, end) {
    return str.endsWith(end)
  }