import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputFormComponent extends Component {
  @tracked input = null;

  @action
  setInput(userInput) {
    this.input = userInput;
  }

  @action
  async handleAPIcall() {
    alert(this.input);
  }
}
