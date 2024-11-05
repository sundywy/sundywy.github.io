import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
  static targets = ["show"];

  toggle() {
    const showNavLinks = "show-nav-links";
    this.showTarget.classList.toggle(showNavLinks);
  }
}
