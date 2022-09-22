if(window.ethereum){
    // Quando ele tiver MetaMask
    document.querySelector('button').addEventListener('click',  async()=>{
        try{
        const accounts = await ethereum.request({method:'eth_requestAccounts'});
        account = accounts[0];
        class Account {
            constructor (account) {
                this.account = account;
            }
            toString() {
                return this.account
            }
        }
        
        const accountConverter = {
            toFirestore: (account) => {
                return {
                    account: account.account,
                    };
            },
            fromFirestore: (snapshot, options) => {
                const data = snapshot.data(options);
                return new Account(data.account);
            }
        };        
        window.location.href = './tela.html'
    } catch(e){}
    })
}
else{
    alert('Não pode interagir com o nosso website...')
}
