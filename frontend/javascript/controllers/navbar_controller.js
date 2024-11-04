import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
  static targets = ["show"];

  toggle() {
    const display = this.showTarget.style.display;
    this.showTarget.style.display = display == "none" ? "flex" : "none";
  }
}
