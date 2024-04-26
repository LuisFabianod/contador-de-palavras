class ContadorDePalavras {
    constructor() {
        this.textArea = document.querySelector('.text')
        this.botao = document.querySelector('.send')
        this.divResWrapper = document.querySelector('.resWrapper')
        this.divRes = document.querySelector('.res')
        this.p = document.createElement('p')
        this.p.classList.add('pRes')
        this.caseSensitive = document.querySelector('.case-sensitive')
        this.palavrasValidasMaiusculas = []
        this.palavrasUnicasMaiusculas = []
        this.botao.addEventListener('click', (el) => {
            el.preventDefault()
            this.p.innerText = ''
            this.valida()
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
                this.p.innerHTML += (`${palavra}----------${contagem[palavra]} <br>`)
            }
            this.divRes.appendChild(this.p)
            this.divRes.style.display = 'block'
            this.divResWrapper.style.display = 'flex'
        }
        // CASE UNSENSITIVE
        else if (!this.caseSensitive.checked) {

            this.palavrasValidasMaiusculas = this.palavrasValidas.map(palavra => palavra.toUpperCase())

            this.palavrasUnicasMaiusculas = Array.from(new Set(this.palavrasUnicas.map(palavra => palavra.toUpperCase())));

            const contagem = this.palavrasValidasMaiusculas.reduce((acc, valor) => {
                acc[valor] = (acc[valor] || 0) + 1;
                return acc;
            }, {});


            console.log(this.palavrasUnicasMaiusculas)

            for (let palavra of this.palavrasUnicasMaiusculas) {
                this.p.innerHTML += `${palavra}        ${contagem[palavra]} <br>`;
                
            
        
            }
            
            
            this.divRes.appendChild(this.p)
            this.divRes.style.display = 'block'
            this.divResWrapper.style.display = 'flex'


        }
    }


}

const contadorDePalavras = new ContadorDePalavras
