class ContadorDePalavras{
    constructor(){
        this.textArea = document.querySelector('.text')
        this.botao = document.querySelector('.send')
        this.divRes = document.querySelector('.res')
        this.p = document.createElement('p')
        this.p.classList.add('pRes')
        this.botao.addEventListener('click', (el) => {
            el.preventDefault()
            this.p.innerText = ''
            this.valida()
        })
    }

    valida(){
        if(this.textArea.value == ''){
            window.alert('Sua caixa de texto está vazia!')
            return
        }
        this.preparaParaContagem()
    }

    preparaParaContagem(){
        this.texto = this.textArea.value
        this.arrayPalavras = this.texto.split(/[ ,\.:!?()@#$*0123456789]/)
        this.arrayPalavrasValidas = this.arrayPalavras.filter(Boolean)
        this.arrayPalavrasUnicas = this.arrayPalavrasValidas.filter((palavra, index, array) => {
            return array.indexOf(palavra) === index;
        });
        this.contaPalavras()
    }

    contaPalavras(){
        const contagem = this.arrayPalavrasValidas.reduce((acc, valor) => {
            acc[valor] = (acc[valor] || 0) + 1;
            return acc;
        }, {});
        for(let palavra of this.arrayPalavrasUnicas){
            this.p.innerHTML += (`${palavra}----------${contagem[palavra]} <br>`)
        }
        this.divRes.appendChild(this.p)
    }
    

}

const contadorDePalavras = new ContadorDePalavras
