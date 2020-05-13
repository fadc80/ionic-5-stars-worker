import { ProfessionService } from './../../services/profession/profession.service';

import { Component } from '@angular/core';
import { WorkerService } from 'src/app/services/worker/worker.service';
import { Worker } from 'src/app/model/worker.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedProfession: string;
  filteredWorkers: Worker[];
  allProfessions: string[];
  allWorkers: Worker[];

  constructor(
    private workerService: WorkerService,
    private professionService: ProfessionService) {}

  ngOnInit() {
    this.listProfessions();
    this.listWorkers();
  }

  listProfessions(): void {
    this.professionService.listAll().subscribe(
      professions => {
        this.allProfessions = professions;
      },
      error => {
        console.log(error);
      });
  }

  listWorkers(): void {
    this.workerService.listAll().subscribe(
      workers => {
        this.allWorkers = workers;
        this.filteredWorkers = workers;
      },
      error => {
        console.log(error);
      });
  }

  filterWorkers(event: any) {
    this.filteredWorkers = this.allWorkers.filter(
      worker => worker.professions.includes(event.srcElement.value))
  }
}
