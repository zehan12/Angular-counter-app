import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Counter App";
  author = "Zehan Khan";

  count = 0;

  handleReset() {
    this.count = 0;
  }

  handleIncrement() {
    this.count = this.count + 1;
  }

  handleDecrement() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }
  }
}
