import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchbarService } from '../services/searchbar.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  search: string = '';

  constructor(private searchbarService: SearchbarService) {}

  onSearch(): void {
    console.log(this.search)
    this.searchbarService.emitSearchChanged(this.search);
  }

}
