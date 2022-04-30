import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'galoaExercicio';

  fontColor = "blue"
  sayHelloId = 1
  canClick = false
  canEdit = false
  message = "hello"

  sayMessage(){
    alert(this.message)
  }

  onCanEdit(){
    this.canEdit = !this.canEdit
    debugger
    if(this.canEdit){
      this.message = "u can edit me"
    } else {
      this.message = "now u cant edit me"
    }
  }
}
