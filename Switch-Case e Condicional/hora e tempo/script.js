// Pegando as horas em tempo real

var agora = new Date()
var hora = agora.getHours()

console.log(`sao ${hora} horas`);
if(hora < 12){
    console.log('bom dia')
}
else if(hora <= 8){
    console.log('boa tarde')
}
else{
    console.log('boa noite')
} 