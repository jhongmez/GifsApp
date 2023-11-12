import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
	selector: 'gifs-search-box',
	template: `
		<h5>Buscar:</h5>
		<input 
		type="text" 
		class="form-control" 
		placeholder="buscar gifs..."
		(keyup.enter)="searchTag()"
		#txtTagInput
		/>
	`,
})
export class SearchBoxComponent {
	
	// * VIEWCHILD: Nos sirve para tomar una referencia local
	// * VIEWCHILDREN: Toma todos los input y regresa un arreglo de los elementos HTML
	
	@ViewChild('txtTagInput')
	tagInput!: ElementRef<HTMLInputElement>;

	constructor( private gifsService: GifsService) { }
	
	// * Se utilizo el #txtTagInput como referencia para no crear un formsmodule o ngmodels para este manejo
	searchTag() {
		const newTag = this.tagInput.nativeElement.value;
		
		this.gifsService.searchTag( newTag );

		this.tagInput.nativeElement.value = '';
	}

}
