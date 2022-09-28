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

