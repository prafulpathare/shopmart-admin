import { Component, OnInit } from '@angular/core';
import { UserService } from '../../serv/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userServ: UserService
  ) { }

  ngOnInit(): void {
  }

}
