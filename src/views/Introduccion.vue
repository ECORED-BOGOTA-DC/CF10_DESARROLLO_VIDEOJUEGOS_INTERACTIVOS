<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF")
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          .dual-txt-deco
            p(style="position: relative; z-index: 2") Uno de los aspectos más importantes para el desarrollo de los videojuegos es verificar que cumple con las funcionalidades diseñadas en el concepto gráfico. El motor de Unity contiene una función de verificación que se incorpora cuando se instala el programa y es utilizada con mayor efectividad cuando el desarrollador crea las líneas de código para comprobar una mecánica específica, igualmente posee el servicio de análisis que verifica el funcionamiento actual en aras de poder hacer las mejoras y ajustes que requiera el juego.
            p No obstante es importante no solo contar con las herramientas de software sino también con las técnicas que permitan llevar a cabo comprobaciones por cada entregable del producto para ajustar inmediatamente lo que no está de acuerdo con las especificaciones iniciales o con las que van surgiendo a medida que evoluciona el producto. 
            p.mb-5 En este contenido formativo se abordarán las metodologías ágiles SCRUM y SUM como técnicas para verificar con eficacia los requisitos establecidos, mecánicas o niveles de los videojuegos como se explica en el siguiente video:
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          p.text-center.txt-c1 #[b ¡Buen aprendizaje!]
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
