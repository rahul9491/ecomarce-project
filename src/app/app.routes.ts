import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ProductComponent } from './product/product.component';
import { SinginSingupComponent } from './customer/singin-singup/singin-singup.component';
import { SellerDashwordComponent } from './customer/seller/seller-dashword/seller-dashword.component';
import { BuyerDashwordComponent } from './customer/buyer/buyer-dashword/buyer-dashword.component';
import { CheakoutComponent } from './customer/buyer/cheakout/cheakout.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"",redirectTo:"/",pathMatch:"full"},
    {path:"",component:HomeComponent},
    {path:"my-profile",component:UserProfileComponent},
    {path:"contect-us",component:ContactUsComponent},
    //admin
    {path:'', children:[
        {path:"admin-login",component:AdminLoginComponent}
    ]},
    {path:'', children:[
        {path:"admin-dashborad",component:AdminDashboardComponent},
        {path:"admin/user",component:UserCrudComponent},
        {path:"admin/product",component:ProductComponent},

    ]},

    {path:'', children:[
        {path:"sing-in",component:SinginSingupComponent},
        {path:"sing-up",component:SinginSingupComponent},

    ]},

    {path:'', children:[
        {path:"seller-dashboard",component:SellerDashwordComponent},
        {path:"seller/product",component:ProductComponent},


    ]},
    
    {path:'', children:[
        {path:"buyer-dashboard",component:BuyerDashwordComponent},
        {path:"cheackout",component:CheakoutComponent},


    ]},

    
    {path:'**', component:PageNotFoundComponent}

];
