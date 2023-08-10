function camel(str) {
    str = str.split(/[^A-Za-z0-9]/)

    let arr = []
    for(let i = 0; i < str.length; i++) {
        if (str[i].length > 0 && i >= 1) {
            str[i] = str[i].split("")
            str[i][0] = str[i][0].toUpperCase()
            arr.push(str[i].join(""))
        } else if (str[i].length > 0) {
            arr.push(str[i])
        }
    }
    return arr.join("")
    
}

let array = camel("the-stealth_+==warrior")
console.log(array)

// Solução ideal

function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }

  // [-_] é uma classe de caracteres e (.) é um grupo de captura, porque está entre parênteses, esse grupo pode ser acessado depois como parâmetro da função. O "." é qualquer caractere.

// Então, sempre que um caractere for precedido por - ou _, ele vai ser capturado e substítuido por sua versão em Caps.