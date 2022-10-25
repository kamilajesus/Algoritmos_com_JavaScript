const listaLivros = require('./Algoritmos-2/Merge Sort/array.js')

function mergeSort(array){

  if(array.length > 1){
    const meio = Math.floor(array.length / 2)
    const parte1 = mergeSoft(array.slice(0, meio));
    const parte2 = mergeSoft(array.slice(meio, array.length));
    array = ordena(parte1, parte2)
    
  }
  return array;
}

function ordena(parte1, parte2) {
  let posicaoAtualParte1 = 0
  let posicaoAtualParte2 = 0
  const resultado = []

  while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
    let posicaoAtualParte1 = parte1[posicaoAtualParte1]
    let posicaoAtualParte2 = parte2[posicaoAtualParte2]
  }
}

console.log(mergeSort(listaLivros));
