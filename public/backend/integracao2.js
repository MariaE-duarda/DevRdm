function aparecerCitacao(){
    fetch("https://randommarvelquoteapi.herokuapp.com/").then(r=> {
    return r.text()
}).then(corpo => {
    document.getElementById('citacao').innerHTML= corpo.replace(/{"quote":"/g, "").replace(/"}/g, "")
})
}