

import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	Offer_data = {
		category: 10,
		product: 50,
		bill: 100
	};
  responseMessage: any;
  data: any;
   // Array to store food items

  constructor(
    private dashboardService: DashboardService,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.ngxService.start();
    this.dashboardData();
	
     // Load food items
  }

  dashboardData() {
    this.dashboardService.getDetails().subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.data = response;
      },
      (error: any) => {
        this.ngxService.stop();
        console.log(error);
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    );
  }
  specialOffers = [
	{
	  name: "Spicy Grilled Chicken",
	  description: "Juicy grilled chicken with a spicy twist, served with fresh salad.",
	  price: 12.99,
	  image: "https://source.unsplash.com/400x300/?grilled-chicken"
	},
	{
	  name: "Classic Margherita Pizza",
	  description: "Wood-fired pizza with fresh mozzarella, basil, and tomato sauce.",
	  price: 10.99,
	  image: "https://source.unsplash.com/400x300/?pizza"
	},
	{
	  name: "Chocolate Lava Cake",
	  description: "Warm chocolate cake with a gooey molten center, served with ice cream.",
	  price: 8.99,
	  image: "https://source.unsplash.com/400x300/?chocolate-cake"
	}
  ];

}



// import { SnackbarService } from './../services/snackbar.service';
// import { Component, AfterViewInit } from '@angular/core';
// import { DashboardService } from '../services/dashboard.service';
// import { NgxUiLoaderService } from 'ngx-ui-loader';
// import { GlobalConstants } from '../shared/global-constants';

// @Component({
// 	selector: 'app-dashboard',
// 	templateUrl: './dashboard.component.html',
// 	styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements AfterViewInit {

// 	responseMessage: any;
// 	data:any;
// 	ngAfterViewInit() { }

// 	constructor(private dashboardService:DashboardService,private ngxService:NgxUiLoaderService,private snackbarServic:SnackbarService) {
// 		this.ngxService.start();
// 		this.dashboardData();
// 	}

// 	dashboardData(){
// 		this.dashboardService.getDetails().subscribe((response:any)=>{
// 			this.ngxService.stop();
// 			this.data = response;
// 		},(error:any)=>{
// 			this.ngxService.stop();
// 			console.log(error);
// 			if(error.error?.message){
// 				this.responseMessage = error.error?.message;
// 			}
// 			else {
// 				this.responseMessage = GlobalConstants.genericError;
// 			}
// 			this.snackbarServic.openSnackBar(this.responseMessage,GlobalConstants.error);
// 		})
// 	}
// }
