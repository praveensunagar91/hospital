import { Component, OnInit } from '@angular/core';
import { HospitaldataService } from './hospitaldata.service';
import { Hospital } from './hospital';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from "primeng/api";
import * as _ from "lodash";

@Component({
  selector: 'app-hospitaldisplay',
  templateUrl: './hospitaldisplay.component.html',
  styleUrls: ['./hospitaldisplay.component.css'],

})
export class HospitaldisplayComponent implements OnInit {

  arr: Hospital[] = [];




  id: string;
  name: string;
  description: string;
  isactive: string;


  config: any;
  collection: Hospital[] = [];

  searchstr: string;
search: string;

  constructor(private data: HospitaldataService, private router: Router, private confirmationService: ConfirmationService) {

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.length
    };

   }

  ngOnInit() {
   this.allHospitalData();


  }

  public allHospitalData(){
    this.data.getAllData().subscribe(
      (data: Hospital[]) => {
         this.arr = data;
      }
    );
  }

//   onSaveData(f){
//     var req= {
//       id:f.value.id,
//       name:f.value.name,
//       description:f.value.description,
//       isactive:f.value.isactive
//     }

//     this.data.getInsertData(req).subscribe(
//       (data:any)=>{
//         alert("inserted");

//       }
//     );



//  }
onUserSave(f)
    {
      this.data.getInsertData(f.value).subscribe((data: any) => {
        this.data.getAllData().subscribe(
          (data: Hospital[]) =>
          {
           this.arr = data
          }

        );
        alert("record Addded ");
      });

    }

    pageChanged(event){
      this.config.currentPage = event;
    }

  onDelete(id: number){
    this.data.getDeleteData(id).subscribe(
      (data: any) => {
        this.ngOnInit();
      // alert("deleted");
      }
    );

  }
  editHospital(editData)
  {
    this.id = editData.id;
    this.name = editData.name;
    this.description = editData.description;
    // this.i1=i;
  }

  Updatedata(f1)
  {
    var req = {
      id: this.id,
      // organizationId:this.arr[this.i1].organizationId,
      name: f1.value.name,
      description: f1.value.description,
      }
      console.log(req);
      this.data.getInsertData(req).subscribe((data: any) => {
        this.data.getAllData().subscribe(
          (data: Hospital[]) =>
          {
           this.arr = data
          }

        );
        alert("record edited");
      });


  //     for (let i = 0; i < this.arr.length; i++) {
  //       if (i == data) {
  //         this.arrDesig[i].name = this.name;
  //         this.arrDesig[i].description = this.description ;
  //         console.log(this.arrDesig);


  //         this.name = '';
  //         this.description = '';
 }

  confirmDelete(id: number) {
    console.log(id);
    this.confirmationService.confirm({
        message: "Are you sure that you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
            this.onDelete(id);
            // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  }
//   onSearch(value) {
//     console.log(value);
//     if (!_.isEmpty(value)) {
//         var arry = this.arr.filter(
//             x => x.name.indexOf(value) != -1
//         );
//         this.arr = _.forEach(this.arr, f => {

//             var m =  _.some(f.name, el => _.includes(value, el));
//             if (m == false) {
//                 return f;
//             }
//         });
//     } else {
//         this.data.getAllData().subscribe(
//             (data:  Hospital[]) => {
//                 this.arr = data;
//             },
//             function(error) {
//                 this.allHospitalData();
//             }
//         );
//     }
// }

}


