import { NewDirectoryService } from '../../services/new-directory.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-family',
  templateUrl: './search-family.component.html',
  styleUrls: ['./search-family.component.scss'],
})
export class SearchFamilyComponent implements OnInit {
  searchString: FormControl = new FormControl();
  displayedColumns: string[] = [
    'sno',
    'familyName',
    'contact',
    'email',
    'isActive',
    'remarks',
    'actions',
  ];
  dataSource: any;

  constructor(private newDirectoryService: NewDirectoryService) {}

  ngOnInit(): void {
    this.searchString.valueChanges.subscribe((searchString) => {
      this.newDirectoryService
        .fetchFamilyMembership(searchString)
        .subscribe((res: any) => {
          this.dataSource = res.body;
          console.log(res);
        });
    });
  }
}
