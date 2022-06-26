import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit,
} from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "mt-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit, AfterContentInit {
  input: any;
  @Input() label: string;
  @Input() errorMessage: string;
  @ContentChild(NgModel) model: NgModel;
  constructor() {}
  ngAfterContentInit(): void {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error("Method not implemented.");
    }
  }

  hasSucess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }
  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
  ngOnInit() {}
}
