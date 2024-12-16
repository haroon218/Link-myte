import { Component } from '@angular/core';
import { HomeComponent } from "../../home/home.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [HomeComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
