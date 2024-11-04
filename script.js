class ContadorDePalavras {
    constructor() {
        this.textArea = document.querySelector('.text')
        this.botao = document.querySelector('.send')
        this.divResWrapper = document.querySelector('.res-wrapper')
        this.divRes = document.querySelector('.res')
        this.caseSensitive = document.querySelector('.case-sensitive')
        this.palavrasValidasMaiusculas = []
        this.palavrasUnicasMaiusculas = []

        this.botao.addEventListener('click', (el) => {
            el.preventDefault()
            this.divRes.innerHTML = ''
            this.valida()
        })
        document.addEventListener('keypress', e => {
            if(e.key === 'Enter'){
                e.preventDefault()
                this.divRes.innerHTML = ''
                this.valida()
            }
        })

    }

    valida() {
        if (this.textArea.value == '') {
            window.alert('Sua caixa de texto está vazia!')
            return
        }
        this.preparaParaContagem()
    }

    preparaParaContagem() {
        this.texto = this.textArea.value
        this.palavras = this.texto.split(/[ ,\.:!?()@#$*\'\"0123456789]/)
        this.palavrasValidas = this.palavras.filter(Boolean)
        this.palavrasUnicas = this.palavrasValidas.filter((palavra, index, array) => {
            return array.indexOf(palavra) === index;
        });
        this.contaPalavras()
    }

    contaPalavras() {
        // CASE SENSITIVE
        if (this.caseSensitive.checked) {
            const contagem = this.palavrasValidas.reduce((acc, valor) => {
                acc[valor] = (acc[valor] || 0) + 1;
                return acc;
            }, {});
            for (let palavra of this.palavrasUnicas) {
                const pRes = document.createElement('div')
                pRes.classList.add('pRes')

                const pPalavra = document.createElement('p')
                const pContagem = document.createElement('p')
                const hr = document.createElement('hr')

                pPalavra.innerText = `${palavra} `
                pContagem.innerText = `${contagem[palavra]}`
                
                pRes.appendChild(pPalavra)
                pRes.appendChild(hr)
                pRes.appendChild(pContagem)

                this.divRes.appendChild(pRes)   
            }
            this.divRes.style.display = 'flex'
            this.divResWrapper.style.display = 'flex'
        }
        // CASE UNSENSITIVE
        else{
            this.palavrasValidasMaiusculas = this.palavrasValidas.map(palavra => palavra.toUpperCase())
            this.palavrasUnicasMaiusculas = this.palavrasValidasMaiusculas.filter((palavra, index, array) => {
                return array.indexOf(palavra) === index;
            });

            const contagem = this.palavrasValidasMaiusculas.reduce((acc, valor) => {
                acc[valor] = (acc[valor] || 0) + 1;
                return acc;
            }, {});

            for (let palavra of this.palavrasUnicasMaiusculas) {
                const pRes = document.createElement('div')
                pRes.classList.add('pRes')

                const pPalavra = document.createElement('p')
                const pContagem = document.createElement('p')
                const hr = document.createElement('hr')

                pPalavra.innerText = `${palavra} `
                pContagem.innerText = `${contagem[palavra]}`
                
                pRes.appendChild(pPalavra)
                pRes.appendChild(hr)
                pRes.appendChild(pContagem)

                this.divRes.appendChild(pRes)
            }
            this.divRes.style.display = 'flex'
            this.divResWrapper.style.display = 'flex'
        }
    }


}

const contadorDePalavras = new ContadorDePalavras
