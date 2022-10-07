import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public optionsVerbs: any[] = [
    {
      value: 5,
      description: '5 verbos'
    },
    {
      value: 10,
      description: '10 verbos'
    },
    {
      value: 15,
      description: '15 verbos'
    },
    {
      value: 20,
      description: '20 verbos'
    },
    {
      value: 25,
      description: '25 verbos'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
