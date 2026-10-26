# lhds-3 · La Hermana de Shakespeare (avance)

Avance del sitio: el mismo diseño de [lhds-2](https://github.com/uiuaaxyz/lhds-2), pero con las partes
que todavía no están terminadas marcadas como **en construcción**. Sirve para presentar el proyecto
como versión de avance.

Para verlo, abre `index.html` en el navegador.

## Qué ya está
- Menú, portada con logo y manifiesto
- Cartelera con filtros por disciplina
- Convocatorias propias con bases en PDF y formulario de inscripción
- Muro de recuerdos (primeras fotos)
- Sobre nosotras: misión, visión, equipo y línea del tiempo
- Archivo histórico de 2024
- Pie de página con manifiesto y contacto

## Qué falta (marcado "en construcción" o "próximamente")
- Registro a eventos
- Red de convocatorias externas
- Puente con la revista (nombre y enlace)
- Resto de fotos del muro y archivo 2018–2023
- Dirección y mapa de la sede Sinarte
- Kit de prensa y boletín
- Redes sociales

## Cómo pasar a la versión final
Los avisos viven en `css/avance.css` y en los bloques `class="en-obra"` del HTML.
Al terminar cada parte, se reemplaza el bloque por el contenido real (como en lhds-2) y al final se quita `css/avance.css`.
