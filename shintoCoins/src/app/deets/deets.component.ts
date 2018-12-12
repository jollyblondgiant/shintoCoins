import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-deets',
  templateUrl: './deets.component.html',
  styleUrls: ['./deets.component.css']
})
export class DeetsComponent implements OnInit {
  @Input() coinId: any
  constructor() { }

  ngOnInit() {
   
 
  }

}
