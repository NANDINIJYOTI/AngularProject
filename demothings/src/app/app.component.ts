import { Component } from '@angular/core';
import {NgForm}from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Project';
  a='Simplilearn';

  show=false;
  getValue()
  {
    return"Jyoti Nandini";
  }
  getReturns()
  {
    console.warn("This is a warning message");
  }
  getOutput()
  {
    alert("This is my output message");
  }
  getOutputs(msg:any)
  {
    alert(msg);
  }

getFunny()
{
  alert("This is my function");
}

// color='parrot';
// horse="peak";
//example="instance";
//example="instance2";
// example="instance6";

//users=['Sakshi Goyal','Jyoti Nandini','Garima','Swati','Neha'];
usersinfo=[{Name:'Jyoti Nandini',EmailId:'jyo.nandi.in@gmail.com',Phone:7096789765},
           {Name:'Jayesh',EmailId:'jayesh.in@gmail.com',Phone:7096789765},
           {Name:'Ram',EmailId:'Ramesh.in@gmail.com',Phone:7096789765},
          {Name:'Kuntilesh',EmailId:'Kuntilesh@gmail.com',Phone:7096789765} ,]

        
u1=[{EmployeeName:'Rishi',UserId:101,languages:['Hindi','English']},
{EmployeeName:'Amrinder Nath',UserId:104,languages:['Gujarati','English']},
{EmployeeName:'Mehta Nath',UserId:107,languages:['Marathi','English']},
{EmployeeName:'Ashok Nath',UserId:120,languages:['Kortha','English']
},]

color="green";

bgColor="orange";
userData:any={};
changecolor()
{
  this.color="blue";
  this.bgColor="skyblue";
}

getData(data:NgForm)
{
  console.warn(data);
  this.userData=data;
}
display=true;
toggle()
{
  this.display=!this.display;
}
}