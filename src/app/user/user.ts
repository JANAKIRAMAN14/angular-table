import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 user = [
  {
  name : "janaki raman",
  mobile : 9025212741,
  email : "msjanakiraman32@gmail.com"
},
{
  name : "raman",
  mobile : 9025212741,
  email : "msjanakiraman32@gmail.com"
},
{
  name : "janaki raman",
  mobile : 9025212741,
  email : "msjanakiraman32@gmail.com"
},{
  name : "janaki raman",
  mobile : 9025212741,
  email : "msjanakiraman32@gmail.com"
}
];

}
