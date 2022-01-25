// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from "@hotwired/turbo-rails"
import "controllers"

const getToggleElement = () => document.querySelector("input#toggle-turbo");

function update() {
  if (getToggleElement().checked) {
    Turbo.session.drive = true;
  } else {
    Turbo.session.drive = false;
  }
}

function restoreToggle() {
  const enabled = sessionStorage["turbo"];
  if (enabled === 'true') {
    getToggleElement().checked = true;
  } else {
    getToggleElement().checked = false;
  }
  update();
}

document.addEventListener("turbo:load", () => {
  getToggleElement().addEventListener("change", () => {
    update();
    sessionStorage["turbo"] = Turbo.session.drive.toString();
    console.log(Turbo.session.drive);
  });
  restoreToggle();
});
