// En esta lección, crearemos un HeroService donde toda las vistas de la aplicación podrán usar para obtener héroes.
// Los servicios son una excelente manera de compartir información entre cases que no se conocen entre sí.
import { Injectable } from '@angular/core';

@Injectable({
  // El decorador @Injectable() acepta metadatos del objeto del servicio, de la misma manera que con el decorador @Component() que hicimos para la clase de componentes.
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
}
