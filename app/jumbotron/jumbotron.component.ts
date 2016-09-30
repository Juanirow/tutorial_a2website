import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
    private jbtHeading : string;
    private text : string;
    private btnText : string;
    private btnUrl : string;

    constructor() {
       this.jbtHeading = "Hello World";
       this.text= `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Error, sunt consequuntur consectetur velit id voluptatem qui,
              esse? Ex hic magnam, suscipit, delectus quibusdam ducimus quia reiciendis, vitae autem quisquam cupiditate."`;
    this.btnText = 'Read More!';
    this.btnUrl = 'http://test.com'
              
        
    }
 }