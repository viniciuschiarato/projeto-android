var texto = document.querySelectorAll('main p')
var titulo_pagina = document.getElementById('curiosidade')
var titulo_conteudo = document.getElementById('historia')
var titulo_h2 = document.querySelectorAll('main h2')
var titulo_h3 = document.querySelectorAll('main h3')
var texto_tudo_aquilo = document.getElementById('tudo_aquilo')

var p_size = 1.2
var titulo_pagina_size = 3
var titulo_conteudo_size = 1.8
var h2_size = 1.5
var fator = 0.25
var texto_tudo_aquilo_size = 1.2
var h2_size = 1.5


function aumentar(){
    p_size += fator
    titulo_pagina_size += fator
    titulo_conteudo_size += fator
    h2_size += fator
    texto_tudo_aquilo_size += fator

    for(p of texto){
        p.style.fontSize = p_size + 'em'; 
    }

    for(h2 of titulo_h2){
        h2.style.fontSize = h2_size + 'em'; 
    }

    titulo_pagina.style.fontSize = titulo_pagina_size + 'em'
    titulo_conteudo.style.fontSize = titulo_conteudo_size + 'em'
    texto_tudo_aquilo.style.fontSize = texto_tudo_aquilo_size + 'em'
}

function diminuir(){
    p_size -= fator
    titulo_pagina_size -= fator
    titulo_conteudo_size -= fator
    h2_size -= fator

    for(p of texto){
        p.style.fontSize = p_size + 'em'; 
    }

    for(h2 of titulo_h2){
        h2.style.fontSize = h2_size + 'em'; 
    }

    titulo_pagina.style.fontSize = titulo_pagina_size + 'em'
    titulo_conteudo.style.fontSize = titulo_conteudo_size + 'em'
}