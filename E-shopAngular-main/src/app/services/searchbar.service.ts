import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  searchChanged = new EventEmitter<string>();

  emitSearchChanged(search: string): void {
    this.searchChanged.emit(search);

  }
}
