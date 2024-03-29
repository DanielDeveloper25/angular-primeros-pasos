import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];
  public DeletedHero?: string;

  removeLastHero(): void{
    this.DeletedHero = this.heroNames.pop();
  }

}
