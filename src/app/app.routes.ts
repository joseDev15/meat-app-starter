import { AboutComponent } from './about/about.component';
import { HomeComponent } from "./home/home.component";
import { Route, Routes } from "@angular/router";

export const ROUTES: Routes =
[
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent }
];
