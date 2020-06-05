import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

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

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
