import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-template-url',
  templateUrl: './current-template-url.component.html',
  styleUrls: ['./current-template-url.component.css']
})
export class CurrentTemplateUrlComponent implements OnInit {

  currentUrl:string='';
  constructor(private route:ActivatedRoute){
    this.currentUrl=this.route.snapshot.url.join('/');
  }

  ngOnInit(): void {
      
  }

}
