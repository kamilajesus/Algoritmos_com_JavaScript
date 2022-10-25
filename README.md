<h1 align="center">Algoritmos com JavaScript</h1>

Algoritmos são sequências finitas de passos lógicos para a resolução de um problema e que podem representar tanto problemas comuns em programação quanto qualquer situação que envolva passos lógicos;

Pensar de forma algorítmica não se resume a código e nem precisa necessariamente começar pelo código em si;

Traduzir os passos de um algoritmo para a linguagem de programação que escolhemos trabalhar (no caso, JavaScript), através de estruturas fundamentais da linguagem como variáveis, laços de repetição e condicionais.

<h2 align="center">Selection Sort</h2>

Este algoritmo é baseado em se passar sempre o menor valor do vetor para a primeira posição (ou o maior dependendo da ordem requerida), depois o segundo menor valor para a segunda posição e assim sucessivamente, até os últimos dois elementos.

Neste algoritmo de ordenação é escolhido um número a partir do primeiro, este número escolhido é comparado com os números a partir da sua direita, quando encontrado um número menor, o número escolhido ocupa a posição do menor número encontrado. Este número encontrado será o próximo número escolhido, caso não for encontrado nenhum número menor que este escolhido, ele é colocado na posição do primeiro número escolhido, e o próximo número à sua direita vai ser o escolhido para fazer as comparações. É repetido esse processo até que a lista esteja ordenada.

<h2 align="center">Insertion Sort</h2>

O Insertion sort é um algoritmo simples e eficiente quando aplicado em pequenas listas. Neste algoritmo a lista é percorrida da esquerda para a direita, à medida que avança vai deixando os elementos mais à esquerda ordenados.

O algoritmo funciona da mesma forma que as pessoas usam para ordenar cartas em um jogo de baralho como o pôquer.

<h2 align="center">Merge Sort</h2>

Merge é a rotina que combina dois arrays ordenados em um outro também ordenado. Assim como o Quick Sort aplica várias vezes o particionamento para ordenar um array, o Merge Sort também aplica o Merge várias para ordenar um array.

Não queremos ficar criando arrays separados para uni-los. Isso custa memória e processamento, pois a cada array criado temos que transferir os elementos do array original para ele. O que fazemos então é organizar os dados no array a ser ordenado de forma que uma parte dele esteja ordenada e outra também. Assim, no Merge Sort não fazemos o merge de dois arrays, mas fazemos o merge de duas partes ordenadas de um mesmo array.

<h2 align="center">Quick Sort</h2>

O Quicksort é o algoritmo mais eficiente na ordenação por comparação. Nele se escolhe um elemento chamado de pivô, a partir disto é organizada a lista para que todos os números anteriores a ele sejam menores que ele, e todos os números posteriores a ele sejam maiores que ele. Ao final desse processo o número pivô já está em sua posição final. Os dois grupos desordenados recursivamente sofreram o mesmo processo até que a lista esteja ordenada.


<h2 align="center">Busca binária</h2>

A busca/pesquisa binária ou binary search é um algoritmo que implementa o paradigma Divisão e Conquista para encontrar um elemento em um vetor ordenado. Uma analogia ao funcionamento desse algoritmo seria a busca de uma palavra em dicionário.
