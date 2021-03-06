import { LitElement, html, css } from 'lit-element';

// These are the elements needed by this element.
import { plusIcon, minusIcon } from '../utilities/my-icons.js';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class CounterElement extends LitElement {
  static get properties() {
    return {
      /* The total number of clicks you've done. */
      clicks: { type: Number },
      /* The current value of the counter. */
      value: { type: Number }
    };
  }

  static get styles() {
    return [
      ButtonSharedStyles,
      css`
        span {
          width: 20px;
          display: inline-block;
          text-align: center;
          font-weight: bold;
        }
      `
    ];
  }

  render() {
    return html`
      <div>
        <p>
          Clicked: <span>${this.clicks}</span> times. Value is
          <span>${this.value}</span>.
          <button @click="${this._onIncrement}" title="Add 1">
            ${plusIcon}
          </button>
          <button @click="${this._onDecrement}" title="Minus 1">
            ${minusIcon}
          </button>
        </p>
      </div>
    `;
  }

  constructor() {
    super();
    this.clicks = 0;
    this.value = 0;
  }

  _onIncrement() {
    this.value++;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('counter-incremented'));
  }

  _onDecrement() {
    this.value--;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('counter-decremented'));
  }
}

window.customElements.define('counter-element', CounterElement);
