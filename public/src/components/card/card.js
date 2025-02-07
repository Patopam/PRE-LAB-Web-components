class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.voto = 0;
	}

	static get observedAttributes() {
		return ['name', 'city', 'Img'];
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	connectedCallback() {
		this.render();
	}
	increaseCount() {
		this.voto++;
		this.render();
	}
	render() {
		this.shadowRoot.innerHTML = `
        <div>

            <h1>${this.name}</h1>
            <h5>${this.city}</h5>
            <button>votos: ${this.voto}</button>

        </div>

        `;

		this.shadowRoot.querySelector('button').addEventListener('click', () => this.increaseCount());
	}
}

export default Card;
customElements.define('my-card', Card);
