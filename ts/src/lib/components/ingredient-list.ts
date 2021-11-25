import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

@customElement('ingredient-item')
export class IngredientItem extends LitElement {
    @property()
    name = "ingredient_name";

    @property({type: Number})
    initialQuantity = 0;

    @property({type: Number})
    initialServings = 10;

    @property()
    unit = "";

    @property()
    currentServings = undefined;

    static styles = css`
        li::before {
            content: "•";
            color: var(--color4);
            font-weight: bold;
            display: inline-block; 
            width: 1em;
            margin-left: -1em;
            padding-left: 30px;
        }
    `;
    
    render() {
        if (this.currentServings === undefined) {
            this.currentServings = this.initialServings;
        }
        const quantity = this.computeQuantity();
        const quantityString = quantity != 0 ? `${quantity} ${this.unit} - ` : '';
        return html`<li>${quantityString}${this.name}</li>`;
    }

    computeQuantity() {
        return this.initialQuantity * this.currentServings / this.initialServings;
    }
}

@customElement('ingredient-list')
export class IngredientList extends LitElement {
    @property({type: Number,
            hasChanged(newVal: number, oldVal: number) {

            return newVal != oldVal;
        }})
    servingNumber = 5;

    static styles = css`
        #servinginput,label{
            margin-left: 60px;
        }
    `;

    render() {   
        return html`
        <label for="servinginput">Nb of servings</label>
        <input type="number" @input=${this.updateServings} id="servinginput" value=${this.servingNumber}>
        <ul>
        <slot id="ingredientslot"></slot>
        </ul>
        `
    }

    @query('#servinginput')
    input!: HTMLInputElement;

    @query('#ingredientslot')
    ingredientslot!: HTMLSlotElement;

    updateServings() {
        this.servingNumber = Math.max(1, parseInt(this.input.value));
        this.input.value = "" + this.servingNumber;
        console.log("Changed the servings for " + this.servingNumber);

        const ingredientItems = this.ingredientslot.assignedElements();
        ingredientItems.map(n => {n.setAttribute('currentServings', "" + this.servingNumber)});
    }
}
