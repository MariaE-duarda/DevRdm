if(window.ethereum){
    // Quando ele tiver MetaMask
    document.querySelector('.metameskLogin').addEventListener('click',  async()=>{
        try{
        const accounts = await ethereum.request({method:'eth_requestAccounts'});
        account = accounts[0];
        window.location.href = './tela.html'
    } catch(e){}
    })
}
else{
}

cadast = 0
function telaCadastro(){
    if (cadast == 0){
        cadast = 1
        document.getElementById('devolta').style.display = 'none';
        document.getElementById('usuário').style.display = 'block';
        document.getElementById('textLogin').style.display = 'none';
        document.getElementById('textCadastro').style.display = 'block';
        document.getElementById('semConta').style.display = 'none';
        document.getElementById('temConta').style.display = 'inline-block';
        document.getElementById('btnCadastro').style.display = 'none';
        document.getElementById('btnLogin').style.display = 'block';

    } else{
        cadast = 0
        document.getElementById('devolta').style.display = 'block';
        document.getElementById('usuário').style.display = 'none';
        document.getElementById('textLogin').style.display = 'block';
        document.getElementById('textCadastro').style.display = 'none';
        document.getElementById('temConta').style.display = 'none';
        document.getElementById('semConta').style.display = 'inline-block';
        document.getElementById('btnCadastro').style.display = 'block';
        document.getElementById('btnLogin').style.display = 'none';


    }
}