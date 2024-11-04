import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
  static targets = ["show"];

  toggle() {
    const showNavLinks = "show-nav-links";

    if (this.showTarget.classList.contains(showNavLinks)) {
      this.showTarget.classList.remove(showNavLinks);
    } else {
      this.showTarget.classList.add(showNavLinks);
    }
  }
}
