import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit {
  data: any;
  dataType: string | null = null;
  // title: string | null = null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
  ) {
    // this.title = 'challengingislambangla.github.io/${filename}'
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dataType = params.get('dataType');
      if (this.dataType) {
        this.dataService.getData(this.dataType).subscribe(response => {
          this.data = JSON.stringify(response);
        });
      }
    });
  }
}
