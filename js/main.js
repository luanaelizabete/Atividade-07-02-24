let timesEspanhois = ['Barcelona','Real Madrid','Athletic Bilbao','La Corunã','Atletic Madrid','Getafe'];
let frutas = ['abacateee', 'bananaaa', 'maçaaa', 'peraaa', 'uvaaa'];
 
// modificar o valor de um item do array
timesEspanhois[0]='Betis';
// ler valor de um item do array
console.log(`Valor do time da posição número 3 ${timesEspanhois[3]}`);
let time = timesEspanhois[5];
console.log(`Valor da variável time ${time}`);
// Mostrando o conteúdo de todo o array
console.log(`Conteúdo do Array ${timesEspanhois}`);
// Adicionando elementos no array
timesEspanhois.push('Real Sociedad');
console.log(`Conteúdo do Array ${timesEspanhois}`);
//frutas.push('Abacate');
console.log(`Conteúdo do Array ${frutas}`);
// array.shift | array.unshift | array.pop
console.log(timesEspanhois.join('-'));
 
console.log(timesEspanhois.length); //mostrando o comprimento do array
console.log(`Último time do array ${timesEspanhois[timesEspanhois.length-1]}`); //mostrando o último ítem
 
timesEspanhois.forEach(element => {
    console.log(element);
});
 
for (let index = 0; index < timesEspanhois.length; index++) {
    console.log(timesEspanhois[index]);  
}


const lista = document.querySelector('.times');
lerArray(timesEspanhois, lista);

function lerArray(array, lista)
{
 /*ul*/
    array.forEach(element => {
        const linha = document.createElement('li');
        linha.innerHTML = element;
        lista.appendChild(linha);
    });
}

const listaNome = document.querySelector('.nomes');
lerArray(frutas, listaNome);

function lerArray(array, lista) 
{
   array.forEach(element => {
        const linha = document.createElement('li');
        linha.innerHTML = element;
        lista.appendChild(linha);
    } );
}


//function lerArray(){
//    const lista = document.querySelector('.times'); /*ul*/
//   timesEspanhois.forEach(element => {
//       const linha = document.createElement('li');
//        linha.innerHTML = element;
//        lista.appendChild(linha);
//     });
//}

/*método com for*/
//function lerArrayFor(){
//const lista = document.querySelector('.times'); /*ul*/
//    for (let index = 0; index < timesEspanhois.length; index++){
//        const linha = document.createElement('li');
//        linha.innerHTML = timesEspanhois[index];
//        lista.appendChild(linha);
 //   }
//}
