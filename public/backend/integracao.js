fetch("https://randommarvelquoteapi.herokuapp.com/").then(r=> {
    return r.text()
}).then(corpo => {
    document.getElementById('frase').innerHTML= corpo.replace(/{"quote":"/g, "").replace(/"}/g, "")
})

fetch("https://api-charadas.herokuapp.com/puzzle?lang=ptbr").then(res=> {
    return res.text()
}).then(charada => {
    document.getElementById('charada').innerHTML = charada
})

