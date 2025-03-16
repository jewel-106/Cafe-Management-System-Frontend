import { Routes } from '@angular/router';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { MangeUserComponent } from './mange-user/mange-user.component';
import { ManageOurMenuComponent } from './manage-our-menu/manage-our-menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';



export const MaterialRoutes: Routes = [
    {
        path:'category',
        component:ManageCategoryComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },
    {
        path:'product',
        component:ManageProductComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },
    {
        path:'order',
        component:ManageOrderComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin','user']
        }
    },
    {
        path:'bill',
        component:ViewBillComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin','user']
        }
    },
    {
        path:'user',
        component:MangeUserComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },
    {
        path:'our-menu',
        component:ManageOurMenuComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin','user']
        }
    },
    {
        path:'contact-us',
        component:ContactUsComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin','user']
        }
    },
    {
        path:'about-us',
        component:AboutUsComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin','user']
        }
    }
];
