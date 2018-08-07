
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl:'./parentcomponent.html' 
})
export class ParentComponent { 
title = 'Angular 6 - ngfor';
users = [
    {name: "Ritu Kashyap", qualifications: ["B.Tech", "MCA", "B.A", "M.Tech"]},
    {name: "Pratyush Sharma", qualifications: ["BA", "MA", "BTC"]}
  ];
}