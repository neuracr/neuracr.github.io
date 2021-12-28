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
        label {
            margin: 0 60px;
        }

        button {
            border: none;
            font-size: 16px;
        } 

        #servinginput {
            border: none;
            text-align:center;
        }

        #servinginput::-webkit-outer-spin-button,
        #servinginput::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        #servinginput[type=number] {
            -moz-appearance: textfield;
        }
    `;

    render() {   
        return html`
        <label for="servinginput">Nb of servings</label>
        <button  @click=${this.removeServings}>-</button>
        <input type="number" @input=${this.updateServings} id="servinginput" value=${this.servingNumber}>
        <button @click=${this.addServings}>+</button>        
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
        if (Number.isNaN(parseInt(this.input.value))) { 
            return;
        }
        this.servingNumber = Math.max(1, parseInt(this.input.value));
        this.input.value = "" + this.servingNumber;

        const ingredientItems = this.ingredientslot.assignedElements();
        ingredientItems.map(n => {n.setAttribute('currentServings', "" + this.servingNumber)});
    }

    removeServings() {
        if (Number.isNaN(parseInt(this.input.value))) { 
            return;
        }

        this.input.value = (parseInt(this.input.value) - 1).toString();
        this.updateServings();
    }

    addServings() {
        if (Number.isNaN(parseInt(this.input.value))) { 
            return;
        }

        this.input.value = (parseInt(this.input.value) + 1).toString();
        this.updateServings();
    }
}
