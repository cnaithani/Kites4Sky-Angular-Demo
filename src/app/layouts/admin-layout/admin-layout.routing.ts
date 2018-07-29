import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ComponentAndTemplateComponent } from '../../component-and-template/component-and-template.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'component-and-template',      component: ComponentAndTemplateComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
