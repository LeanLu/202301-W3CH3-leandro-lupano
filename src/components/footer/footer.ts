import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string, public title: string = 'Pet Copyright') {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `
    <footer class="footer">
      <address>${this.title}</address>
    </footer>`;
  }
}
