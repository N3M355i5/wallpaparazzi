import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private backend: BackEndService) {}

  ngOnInit(): void {
    this.onFetch();
  }

  onSave() {
    this.backend.saveData();
  }
  onFetch() {
    this.backend.fetchData();
    console.log('Fetch Called');
  }
}
