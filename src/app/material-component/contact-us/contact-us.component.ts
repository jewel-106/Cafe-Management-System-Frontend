import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  cafeName = "Cafe Online Shop";
  address = "123 Coffee Street, Food City,Dhaka-1100";
  phone = "+8801705830693";
  email = "info@cafeonlineshop.com";
  openingHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 10:00 PM' },
    { day: 'Saturday - Sunday', time: '9:00 AM - 11:00 PM' }
  ];
}
