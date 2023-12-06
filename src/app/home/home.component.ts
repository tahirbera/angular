import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  myData: any;
  myDataArray: any[] = [];
  p: number = 1;
  collection: any[] = this.myDataArray;  

  constructor(private myDataService: MyDataService){}


  
  drop(event: CdkDragDrop<any[0]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex)
  }

  ngOnInit(): void {
    this.myDataService.getData().subscribe((data) => {
      
      console.log('Received data:', data);

      this.myData = data;
      this.myDataArray = Object.values(data);
      console.log(this.myDataArray);
    });

    
  }
}
