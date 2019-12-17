import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-timeline',
  templateUrl: './default-timeline.component.html',
  styleUrls: ['./default-timeline.component.css']
})
export class DefaultTimelineComponent implements OnInit {
 RequestHistory : any
  constructor() { }

  ngOnInit() {
    this.RequestHistory = [{ 'LatestStatus': 'Open', 'Timestamp': '6-May-2019 9:00 AM', 'LastUpdatedBy': 'Name 1' },
    { 'LatestStatus': 'Re-Open', 'Timestamp': '6-May-2019 9:05 AM', 'LastUpdatedBy': 'Name 2' },
    { 'LatestStatus': 'Closed', 'Timestamp': '6-May-2019 10:00 AM', 'LastUpdatedBy': 'Name 3' }
    ];
  }

}