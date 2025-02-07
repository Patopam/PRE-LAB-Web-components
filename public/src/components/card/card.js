class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['title', 'subtitle', 'votes'];
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
        <div>
            <h1>${this.title}</h1>
            <h5>${this.subtitle}</h5>
            <p>Votos: ${this.votes}</p>
            <button>Votar</button>
        </div>
        `;

		this.shadowRoot.querySelector('button').addEventListener('click', () => {
			this.dispatchEvent(
				new CustomEvent('vote', {
					detail: { candidate: this.title },
					bubbles: true,
					composed: true,
				})
			);
		});
	}
}
customElements.define('my-card', Card);

export default Card;
