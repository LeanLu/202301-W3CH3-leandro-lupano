/* eslint-disable no-unused-vars */

import { PetStructure } from '../../models/PetsStructure';
import { Component } from '../component/component';
import './list.scss';

export class List extends Component {
  constructor(public selector: string, public lists: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    const items = this.lists
      .map(
        (item) => `
        <li class="card">
          <span>${item.id}</span>
          <span>${item.name}</span>
          <span>${item.specie}</span>
          <span>${item.owner}</span>
          <span>${item.isAdopted}</span>

          <button>🗑️</button>
        </li>`
      )
      .join('\n');

    return `
    <section class="lists">
      <ul>${items}</ul>
    </section>
    `;
  }
}
