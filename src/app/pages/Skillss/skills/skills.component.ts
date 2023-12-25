import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  availableColors: string[] = ["white", "#6244C5"];
  changeBackgroundColor: string | boolean = false;
  activeButtonIndex: number | null = null;
  experienceTextVisible: boolean = true;
  educationTextVisible: boolean = false;

  // Function to set the active button
  setActiveButton(index: number) {
    this.activeButtonIndex = index;
    this.experienceTextVisible = index === 0;
    this.educationTextVisible = index === 1;
  }

}
