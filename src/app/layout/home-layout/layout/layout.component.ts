import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../../home/home.component';

@Component({
  selector: 'app-layout',
  imports: [HomeComponent, FooterComponent,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
