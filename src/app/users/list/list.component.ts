import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  responseData: any;
  userData: any;
  tableData: any = [];
  searchBy: any;
  p: number = 1;
  bronze_badge: any;
  sortAttr: any;
  sortOrder: boolean = true;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.usersService.getUserList().subscribe((res: any) => {
      if (res.items.length != 0) {
        this.tableData = [];
        this.tableData = res.items;
      }
    })
  }
  getUserById(id) {
    this.usersService.getUserById(id).subscribe(ret => {
        this.responseData = ret;
        this.userData = this.responseData.items[0];
        console.log(this.responseData.items[0]);
        
    });
  }
  sortAttribute(attr, type?) {
    if (this.sortAttr == attr) {
      this.sortOrder = !this.sortOrder;
    }
    this.sortAttr = attr;
    this.tableData = this.usersService.sortChar(this.tableData, this.sortAttr, this.sortOrder, type);
  }
}
