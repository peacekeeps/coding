function deleteNth(arr,n){
    let newArr = []
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            console.log(`${arr[i]} não está no array, adicionado`)
            newArr.push(arr[i])
        } else { // se o valor já estiver no array
            console.log(`${arr[i]} já está no array, testando...`)
            for (let j = 0; j < newArr.length; j++) { // vamos iterar pelo array
                if(newArr[j] === arr[i]) { // toda vez que um valor acontecer, a conta sobe em um
                    console.log(`O índice ${j} é igual ${arr[i]}, aumentando a contagem em 1`)
                    count++
                    console.log(`A contagem agora é ${count}`)
                }
            }
            if (count < n) {
                newArr.push(arr[i])
            }
            count = 0        
        }
    }
    console.log(arr)
    return newArr
  }

  console.log(deleteNth([20,37,20,21,20,21], 2))

  function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }