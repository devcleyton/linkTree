import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  linkPerfil: string =
    'https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg';

  username: string = '@cleytoonoliver'
  constructor() {}

  ngOnInit(): void {}
}
