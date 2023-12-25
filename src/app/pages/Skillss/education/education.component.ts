import { Component } from '@angular/core';
import { Educate } from './edudata.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Educate[] = [
    {
      diplome: 'Diplôme d’ingénieur en informatique',
      Anne: ' 2021-2024',
      Option: 'ingénierie des système d’information',
      etablisment: 'SUPMTI - Oujda',
    },
    {
      diplome: 'Diplôme de Technicien Spécialisé',
      Anne: ' 2019 – 2021',
      Option: 'Réseaux Informatiques',
      etablisment: 'OFPPT – Oujda',
    },
    {
      diplome: 'Baccalauréat Scientifique',
      Anne: ' 2018 – 2019',
      Option: 'Sciences Physiques',
      etablisment: 'Lycée ISLY – Oujda',
    },
  ];
}
