function uiConfig(){
    return {
        signInFlow: 'popup',
        signInSuccessUrl: '#',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
    }
}

