import { Component } from '@angular/core';
import { Course } from './data.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  courses: Course[] = [
    {
      sujet: 'Réalisation d’une application de musculation',
      title: 'Application Android (Spartan Fitnes)-SPMTI',
      duration: 'java 8 \ XML \ SQLite',
    },
    {
      sujet: 'Réalisation d’un site web Dynamique pour achat des pets',
      title: 'Site E-commerce-SUPMTI',
      duration: 'javaEE - MySQL - Html \ Css \ Javascript',
    },
    {
      sujet: 'Réalisation d’une application permet de programmer<br> des séances avec des psychiatres online',
      title: ' PFA : Application Android-SPMTI',
      duration: 'java 8 \ XML \ Firebase Firestore',
    },
    {
      sujet: 'Réalisation d’une application de gestion de stock',
      title: 'Stage: Application desktop-ministére dabita',
      duration: 'C# avec La technologie Ado.net \ MySQL',
    },
  ];
}
