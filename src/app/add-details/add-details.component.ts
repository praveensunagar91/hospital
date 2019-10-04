import { Component, OnInit } from '@angular/core';
import { HospitaldataService } from '../hospitaldisplay/hospitaldata.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

id:string;
name:string;
description:string;
isactive:string;




  constructor(private data:HospitaldataService) { }

  ngOnInit() {
  }
  onSaveData(f){
  var req= {
    id:f.value.id,
 name:f.value.name,
    description:f.value.description,
    isactive:f.value.isactive
  }
     this.data.getInsertData(req).subscribe(
       (data:any)=>{
         console.log(req);

       }
     );



  }

}
