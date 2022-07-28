import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  links = [
    {
      name: 'Linkedin',
      link: 'www.linkedin.com/in/cleyton-oliveira-programmer/',
    },
    {
      name: 'GitHub',
      link: 'github.com/devcleyton',
    },
    {
      name: 'Instagram',
      link: 'www.instagram.com/oliveiraa_.cleyton/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  goLink(url: string) {
    window.open('//' + url, '_blank');
  }
}
