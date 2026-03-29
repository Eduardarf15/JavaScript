//Condicional estudo (e ternário)
let lugar = 'Brasil';

if (lugar == 'Brasil') {
    console.log('Você é brasileiro');
}else {
    console.log('Você é estrangeiro');
}
//Ternário
let idade = 18;
let resultado = (idade >= 18) ? 'Maior de idade' : 'Menor de idade';
console.log(resultado);

//Condicional Switch-Case

switch(new Date().getDay()){
        case 0:
     day = 'segunda'
    break;
        case 1:
     day = 'terça'
    break;
        case 2:
     day = 'quarta'
    break;
        case 3:
     day = 'quinta'
    break;
        case 4:
     day = 'sexta'
    break;
    case 5:
     day = 'sabado'
    break;
    case 6:
     day = 'domingo'
    break;
}