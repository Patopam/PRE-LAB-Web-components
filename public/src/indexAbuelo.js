import * as components from './components/indexPadre.js';
import data from './Data/Candidatos.js';
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		data.forEach((Precidentes) => {
			this.shadowRoot.innerHTML += `
            <my-card name="${Precidentes.name}" city="${Precidentes.city}" img="${Precidentes.img}"></my-card>
            `;
		});
	}
}

customElements.define('app-container', AppContainer);
