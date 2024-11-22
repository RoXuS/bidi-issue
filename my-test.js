import { css, html, LitElement, render } from 'lit';

// Create an array of random string with length of 100
const myArray = Array.from({ length: 200 }, () =>
  Math.random().toString(36).slice(7)
);

class MyComponent extends LitElement {
  render() {
    return myArray.map(
      (value) => html`<my-component2>${value}</my-component2>`
    );
  }
}
class MyComponent3 extends LitElement {
  static get styles() {
    const mainStyle = css`
      :host {
        display: block;
   `;
    return [mainStyle];
  }

  render() {
    return myArray.map(
      (value) => html`<my-component4>${value}</my-component4>`
    );
  }
}
class MyComponent4 extends LitElement {
  static get styles() {
    const mainStyle = css`
      :host {
        display: block;
   `;
    return [mainStyle];
  }

  render() {
    return html`<my-component5><slot></slot></my-component5>`;
  }
}
class MyComponent5 extends LitElement {
  static get styles() {
    const mainStyle = css`
      :host {
        display: block;
   `;
    return [mainStyle];
  }

  render() {
    return html`<slot></slot>`;
  }
}

class MyComponent2 extends LitElement {
  static get styles() {
    const mainStyle = css`
      :host {
        display: block;
   `;
    return [mainStyle];
  }

  render() {
    return html`<my-component3><slot></slot></my-component3>`;
  }
}

window.customElements.define('my-component', MyComponent);
window.customElements.define('my-component2', MyComponent2);
window.customElements.define('my-component3', MyComponent3);
window.customElements.define('my-component4', MyComponent4);
window.customElements.define('my-component5', MyComponent5);

describe('dt-date-type-trigger', () => {
  it('dateSince as a label if not custom', () => {
    const fixtureData = html`<my-component></my-component>`;
    render(fixtureData, document.body);
  });
});
