    function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'pexels-edward-eyer-2228889.jpg'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        //img.src = 'pexels-pixabay-271815.jpg'
    } else {
        // BOA NOITE
        //img.src = 'pexels-piccinng-3052361(2).jpg'
    }
}
