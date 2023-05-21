import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProductComponent } from './manage-product/manage-product.component';


export const MaterialRoutes: Routes = [
    {
        path: "category",
        component: ManageCategoryComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole: ['admin']
        }
    },
    {
        path: "product",
        component: ManageProductComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole: ['admin']
        }
    },
    {
        path: "user",
        component: ManageUserComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole: ['admin']
        }
    }
];
