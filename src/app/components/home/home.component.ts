import { Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  standalone: true,
   imports: [RouterOutlet,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  title = 'SIGNGEN';
  nameDoc: string = 'Dra. Depool Angulo Ines Maria.';
  cmpDoc: string = 'CMP.';
  rneDoc: string = 'RNE.';
  espDoc:string='Especialidad:'


  /////GESTIÓN DE LA IMAGEN
  public selectedImageUrl: string | null = null;
  private imageFile: File | null = null;

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.imageFile = fileInput.files[0];
      this.createBlobUrl();
    }
  }

  createBlobUrl(): void {
    if (this.selectedImageUrl) {
      // Revocar la URL anterior para evitar fugas de memoria
      URL.revokeObjectURL(this.selectedImageUrl);
    }
    if (this.imageFile) {
      // Crear la nueva URL
      this.selectedImageUrl = URL.createObjectURL(this.imageFile);
    }
  }

  ngOnDestroy(): void {
    // Revocar la URL al destruir el componente
    if (this.selectedImageUrl) {
      URL.revokeObjectURL(this.selectedImageUrl);
    }
  }
  /////FIN DE GESTION DE LA IMAGEN





  ///DESCARGA DE LA FIRMA
  @ViewChild('contenidoParaCapturar') contenidoParaCapturar!: ElementRef;

  convertirAImagen() {
    if (this.contenidoParaCapturar) {
      html2canvas(this.contenidoParaCapturar.nativeElement).then(canvas => {
        // El `canvas` es la representación del elemento HTML como una imagen
        // Ahora puedes trabajar con él para descargarlo o mostrarlo

        // Opción 1: Descargar la imagen
        const imgData = canvas.toDataURL('image/jpge');
        const link = document.createElement('a');
        link.download = 'firmare.jpge';
        link.href = imgData;
        link.click();

        // Opción 2: Mostrar la imagen en otro lugar de la página
        const imgElement = document.getElementById('imagenGenerada') as HTMLImageElement;
        if (imgElement) {
          imgElement.src = imgData;
        }
      });
    }
  }

  //FIN DE DESCARGA DE LA FIRMA


}
