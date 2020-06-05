import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-second-table',
  templateUrl: './second-table.component.html',
  styleUrls: ['./second-table.component.css']
})
export class SecondTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private rqst: ServiceService) { }

  comments: any = [];

  ngOnInit(): void {
    this.fetchData();

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  fetchData = () => {
    this.rqst.getData().subscribe(data => {
      this.comments = data

      this.dtTrigger.next();
    });
  }


}
