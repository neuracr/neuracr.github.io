import {customElement} from 'lit/decorators.js';
import {LitElement, html} from 'lit';
export * from './lib/components/ingredient-list';

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return html`
      <div>Hello from MyElement!</div>
    `;
  }
}

export function logHello() {
    console.log('hello world!');
}

logHello();
