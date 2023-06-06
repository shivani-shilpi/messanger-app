import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="reset-form"
export default class extends Controller {
  connect() {
    console.log("connected")
  }

  reset(){
    this.element.reset()
  }
}