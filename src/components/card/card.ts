
import { PetStructure } from '../../models/PetsStructure';
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  constructor(public selector: string, public lists: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return `
        <li class="card">
          <span>${}</span>
          <span title="${}">${}</span>
          <span>${}</span>
          <button>🗑️</button>
        </li>`;
  }
}
