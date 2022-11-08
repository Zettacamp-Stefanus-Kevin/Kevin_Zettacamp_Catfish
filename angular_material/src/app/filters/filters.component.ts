import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { FiltersService } from '../service/filters.service';
import { filter } from '../service/filters';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  private subs = new SubSink();
  filter:filter[]=[]

  filterName = new FormControl('')

  constructor(
    private filtersService : FiltersService
  ) { }


  ngOnInit(): void {
    this.filterName.valueChanges.subscribe((search: any) => {
      if (search.length > 3) {
        this.subs.sink = this.filtersService
          .filterUser(search)
          .subscribe((resp: any) => {
            this.filter = resp.data.GetAllUsers;
          });
      } else {
        this.filter = [];
      }
    });
  }

}
