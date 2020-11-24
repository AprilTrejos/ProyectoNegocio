import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { AddfacturaComponent } from './addfactura/addfactura.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductoscategoriaComponent } from './productoscategoria/productoscategoria.component';
import { PagoComponent } from './pago/pago.component';
import { ConfirmapagoComponent } from './confirmapago/confirmapago.component';
import { RastreoComponent } from './rastreo/rastreo.component';
import { CaruselComponent } from './carusel/carusel.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import {AuthGuard} from './guards/auth.guard';
import { DesactivateGuard } from './guards/desactivate.guard';
//import {AuthGuardNO} from './guards/auth.guard';

const routes: Routes = [
 // {path: '', component: HeaderComponent, pathMatch: 'full'},
  //{path: '**', redirectTo: '/', pathMatch: 'full'},
 

  {path: 'home', component: HomeComponent},
  {path: 'home/:cat', component: HomeComponent},
  {path: 'lista', component: FacturasComponent},
  //{path: 'carritocompras/:carrito', component: CarritoComponent},
  {path: 'carritocompras', component: CarritoComponent, canActivate: [AuthGuard], canDeactivate:[DesactivateGuard]},
  {path: 'productoscategoria/:cat', component: ProductoscategoriaComponent},
  {path: 'pago', component: PagoComponent,  canActivate: [AuthGuard],  canDeactivate:[DesactivateGuard]},
  {path: 'confirmapago/:orden', component: ConfirmapagoComponent,  canActivate: [AuthGuard],  canDeactivate:[DesactivateGuard]},
  {path: 'rastreo', component: RastreoComponent,  canActivate: [AuthGuard],  canDeactivate:[DesactivateGuard]},
  {path: 'carusel', component: CaruselComponent },
  {path: 'user/login',  component: LoginComponent },
  {path: 'user/register',  component: RegisterComponent },
 { path: 'forgot-password', loadChildren: () => import('./user/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  {path: '**',  component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
