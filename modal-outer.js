class ModalOuter extends HTMLElement {
    constructor () {
        super()

        const shadow = this.attachShadow({mode: 'open'})

        const content = document.getElementById('modal-outer').content

        shadow.appendChild(content.cloneNode(true))
    }
}

customElements.define('modal-outer', ModalOuter)
