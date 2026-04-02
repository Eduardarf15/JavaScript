function verificar() {
    let ano = document.getElementById('txtano').value
    let res = document.getElementById('res')
    let anoAtual = new Date().getFullYear()

    if (ano == '' || ano > anoAtual) {
        alert('Por favor, insira um ano válido!')
        return
    }

    let idade = anoAtual - ano
    let genero = 'Pessoa'
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (idade < 12) {
        img.src = 'https://tse4.mm.bing.net/th/id/OIP.zSNjh9wmg6YsMs9AABW_6QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
    } else if (idade < 21) {
        img.src = 'https://i.pinimg.com/736x/b1/e4/e7/b1e4e7b71164e0b3e80e6b44958d3a98.jpg'
    } else if (idade < 60) {
        img.src = 'https://i.pinimg.com/736x/cd/77/cb/cd77cbfb844539df9b6b43a10413bacc.jpg'
    } else {
        img.src = 'https://i.pinimg.com/736x/02/0e/37/020e37e70dfa03d440d7fcd2a339986c.jpg'
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}