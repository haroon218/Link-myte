import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  menuItems: any[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dcadf01296b255ca5ab9cf8be320698a36a7c249ea9dbae3b44bd7a1fa44194f?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      title: "My Profile",
      description: "Edit your account information, like your name, phone number and email to make your online experience just right for you.",
      altText: "Profile settings icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfc227cef8fff9c023ebe9f39895d873b7e3e2cb2336a24a8321e1d0a5983420?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      title: "Get a LinkMyte Card",
      description: "Get your LinkMyTe card to easily share your digital profile and stay connected with others.",
      altText: "Card settings icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a24cbc62d53a71eb602f8cafd304a8c6f20a26b544c0926420a7e9cfbb3e22de?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      title: "Help & Support",
      description: "Access assistance and support resources to get help whenever you need it.",
      altText: "Help and support icon"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1e566a0833047f02f1ed6512227fd6d81437e45948a5e1afd345a86dbf005d8?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      title: "Language",
      description: "Select or change language preference: Arabic or English.",
      altText: "Language settings icon"
    }
  ];
constructor(private authService:AuthService,private router:Router){

}
  handleItemSelect(item: any): void {
    // Handle menu item selection
  }
  logout() {
    this.authService.logout().subscribe({
      next: (response) => {
        console.log('Logout successful:', response);
        localStorage.clear(); 
        localStorage.clear();   
        this.router.navigate(['']); 
      },
      error: (error) => {
        console.error('Logout error:', error);
        alert('Logout failed. Try again later.');
      },
    });
}
}
