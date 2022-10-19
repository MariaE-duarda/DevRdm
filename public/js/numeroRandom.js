/*function sortear(){
    n1 = parseInt(document.getElementById('n1').value);
    n2 = parseInt(document.getElementById('n2').value);

    random = Math.floor(Math.random() * n2);

    for (i=0; i<16; i++){
        if(random >= n1){
            document.getElementById('randomNumero').innerHTML = random
            break
        } 
        if(random < n1){
            random = Math.floor(Math.random() * n2);
            continue
        }

    }

}
*/

const botaoSortear = document.querySelector("div.box button")
var numeroSorteado = document.querySelector("div.box h1")
var roleta = []

for(i = 0; i<=100; i++){
    roleta.push(i)
}
botaoSortear.addEventListener("click", () => {
    numeroSorteado.innerHTML = "O número sorteado é " + roleta[Math.floor(Math.random() * roleta.length)]
})
