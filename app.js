
var a = ["length", "recibe", "estas letras", "ESTA ES UNA CADENA REALMENTE LARGA AAJAHADJFODSFDJGFDGDUGUDUDHGUDH", "F"];
var elementsLength= [];

 

const largestString = element => {
    
    const aLenghts = element.map(x =>  { 
       elementsLength.push(x.length)
    });
    const largest = Math.max(...elementsLength)
    const indexToFind = elementsLength.indexOf(largest)
    console.log(`Del arreglo recibido la cadena más larga está en la posisicón ${indexToFind + 1} y tiene un largo de ${largest} caracteres,
    la cadena es: ${a[indexToFind]}
    `);

    

};

largestString(a);
