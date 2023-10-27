import { Component, ElementRef, ViewChild } from '@angular/core';

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

	constructor() { }
	
	// * Se utilizo el #txtTagInput como referencia para no crear un formsmodule o ngmodels para este manejo
	searchTag() {
		const newTag = this.tagInput.nativeElement.value;
		console.log({ newTag });
	}

}
