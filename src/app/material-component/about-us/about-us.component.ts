import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  cafeName = "Cafe Online Shop";
  establishedYear = 2015;
  mission = "To serve high-quality, delicious, and freshly brewed coffee with a warm and inviting atmosphere.";
  values = [
    "Quality Ingredients & Freshness",
    "Customer Satisfaction & Hospitality",
    "Sustainability & Ethical Sourcing",
    "Community Engagement & Local Support"
  ];
  specialItems = [
    "Signature Espresso Blend",
    "Handcrafted Cappuccino",
    "Organic Herbal Tea",
    "Delicious Pastries & Desserts"
  ];
}
