import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  navigationItems: any[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/316450da8f43935bd8094f6da7c1046aa269466c07ce551aeb50c6f4eee5d936?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      label: "Home",
      isActive: true
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa13652e1d2434df0c860b7a0b39fe358ad343d27565dda7e1b0671c3a53fca1?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      label: "Contacts",
      isActive: false
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c615669913b336dbce7552a31a42e379c8657641c51290180464ecdf83f62bd6?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      label: "Analytics",
      isActive: false
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdd28bc6fa4f0a1286a31820d004b2084d58ecfd0a0161da8b2fff76d441e120?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      label: "Settings",
      isActive: false
    }
  ];
}
