const textarea = document.querySelector("#textarea")
const btnGravar = document.querySelector("#btnGravar")
const btnParar = document.querySelector("#btnParar")
const btnBaixar = document.querySelector("#btnBaixar")
const btnLimpar = document.querySelector("#btnLimpar")

class speechApi {

  constructor() {

    const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition

    this.speechApi = new SpeechToText()
    this.output = textarea.output 
    this.speechApi.continuous = true
    this.speechApi.lang = "pt-BR"
    
    this.speechApi.onresult = (e) => {
      var resultIndex = e.resultIndex
      var transcript = e.results[resultIndex][0].transcript

      textarea.value += transcript
    }
  }

  start() {
    this.speechApi.start()
  }

  stop() {
    this.speechApi.stop()
  }
}

  var speech = new speechApi()

  btnGravar.addEventListener("click", e => {
    btnGravar.disabled = true
    btnParar.disabled = false
    speech.start()
  })

  btnParar.addEventListener("click", () => {
    btnGravar.disabled = false
    btnParar.disabled = true
    speech.stop()
  })

  btnBaixar.addEventListener('click', () => {
    var text = textarea.value
    var filename = "speech.txt"

    download(text, filename)
  })

  btnBaixar.addEventListener('click', (e) => {
    e.preventDefault();
      
    navigator.clipboard.writeText(textarea.value);
      
    alert('Texto copiado para área de transferência! Ctrl+V em algum local para colar');
  });

  btnLimpar.addEventListener("click", () => {
    textarea.value = ""
    btnGravar.disabled = false
    btnParar.disabled = true
    speech.stop()
  })
