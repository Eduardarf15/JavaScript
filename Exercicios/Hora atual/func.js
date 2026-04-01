function carregar(){
    var msg = document.getElementById('msg')
    var img = document.querySelector('#foto img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'https://images.pexels.com/photos/36040707/pexels-photo-36040707.jpeg'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'https://images.pexels.com/photos/2282315/pexels-photo-2282315.jpeg'

    } else {
        img.src = 'https://images.pexels.com/photos/30136903/pexels-photo-30136903.jpeg'
    }
}