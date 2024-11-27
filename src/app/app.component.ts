import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'challengingislambangla.github.io';

  constructor(private router: Router) {}

  goToData(dataType: string) {
    this.router.navigate([`/data/${dataType}`]);
  }

}
