<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 4
      h1 Verificación del videojuego
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0  Para que la comprobación y los ajustes de un videojuego se realicen rápidamente es importante hacer uso de un método ágil, que permita un trabajo fluido y un incremento del proyecto a través de cada entregable aprobado por el cliente.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Verificación basada en el modelo SCRUM
    p(data-aos="fade-right") Al utilizar un método como SCRUM se deben planear no solo el diseño y desarrollo sino también la verificación del producto, llevando a cabo las diferentes fases del método:
    .tarjeta.color-primario.p-3.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema4/img1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Modelo #[i Scrum]
              p.text-small Infografía
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                span(style="color: #12263F !important") Descargar
                i.fas.fa-file-download(style="color: #12263F !important")
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10.bg-c8.p-4.p-lg-0
        .row.align-items-center
          .col-lg-3.mb-4.mb-lg-0.pe-0
            figure
              img(src='@/assets/curso/tema1/img13.svg', style="width:200px").m-auto
          .col-lg-9
            p.mb-0 Para ampliar los conocimientos relacionados con este tema consultar el artículo #[b “Metodología #[i Scrum”]] que se encuentra en el material complementario.
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Verificación basada en el modelo SUM
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Bajo la metodología SUM el videojuego se desarrolla en cinco fases donde en cada una se debe lograr un objetivo específico, realizando un proceso de mejora continua para obtener resultados administrando eficientemente los recursos y los riesgos. 
        p La etapa Beta es la primera versión completa del videojuego y en la siguiente figura se observa que en la “Fase 4: Beta” se encuentra la “Verificación del videojuego”, puesto que ya las funcionalidades se pueden probar:
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img2.png', style="width:550px").m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 6]
          p.mb-0 Metodología SUM
        figure
          img(src='@/assets/curso/tema4/img2.svg').m-auto
          figcaption.mt-3 Nota. Fases de la metodología SUM. Adaptado de Acerenza. Et al. (2009). Una metodología para desarrollo de videojuegos.  https://www.fing.edu.uy/sites/default/files/biblio/22811/asse_2009_16.pdf
    p.text-center.mb-5(data-aos="fade-right") #[b La fase 4 está constituida por los siguientes elementos:]
    SlyderF.mb-5(columnas="col-md-6 col-xl-4")(data-aos="fade-left")
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img3.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .p-4
            h3.text-center Verificadores Beta
            p.text-center Son los designados para hacer la verificación de las funciones del videojuego, pueden tener experiencia en probar el software de videojuegos, o no poseerla, haber jugado o no.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img4.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .p-4
            h3.text-center Cliente
            p.text-center Está en casi todas las etapas del diseño y desarrollo del videojuego, puesto que se encarga de definir el concepto del juego, especificar y priorizar las características y las tareas que le dan más valor, evalúa el producto obtenido al finalizar cada iteración, prioriza la corrección de los errores y valida las versiones del producto.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img5.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .p-4
            h3.text-center Equipo de desarrollo
            p.text-center Está conformado por diseñadores estructurales, diseñadores gráficos y programadores. Aportan a la definición del concepto, realizan la estimación del tiempo, definen las tareas, las asignan y realizan para producir el videojuego. Evalúan el proceso y colocan los correctivos a los problemas.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img6.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .p-4
            h3.text-center Aspectos por verificar
            p.text-center Son las características funcionales y no funcionales que deben comprobar los verificadores Beta.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img7.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .p-4
            h3.text-center Videojuego
            p.text-center Es la versión ejecutable del contenido que es reproducida para la verificación de los aspectos funcionales y no funcionales.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img8.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .p-4
            h3.text-center Evaluación y errores encontrados
            p.text-center Es la comprobación del funcionamiento del juego, en la cual se genera una lista de los aspectos a corregir, planificándose una iteración para priorizar las correcciones a los errores encontrados.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img9.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .p-4
            h3.text-center Lista de cambios priorizados
            p.text-center Es la lista de errores encontrados en el funcionamiento del juego y generada en la evaluación. Los errores se deben ordenar de acuerdo con el nivel de importancia y afectación en las funcionalidades del juego.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img10.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .p-4
            h3.text-center Realizar ajustes
            p.text-center Es la corrección de los errores que se encuentran en la lista de cambios priorizados, teniendo en cuenta la prioridad y los costos del ajuste a realizar.
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10.bg-c8.p-4.p-lg-0
        .row.align-items-center
          .col-lg-3.mb-4.mb-lg-0.pe-0
            figure
              img(src='@/assets/curso/tema1/img13.svg', style="width:200px").m-auto
          .col-lg-9
            p.mb-0 Para los conocimientos en el tema consultar el documento SUM para el desarrollo de videojuegos que se encuentra en el material complementario.
    Separador
    #t_4_3
    .titulo-segundo.color-acento-contenido
      h2 4.3 Verificación y ajustes en el entorno de desarrollo (consola, modo edición)
    .dual-txt-deco3.mb-5(data-aos="fade-right")
      p(style="position: relative; z-index: 2") La verificación de un videojuego desarrollado en el motor Unity consiste en la comprobación de la calidad y el funcionamiento de sus mecánicas, así como de los elementos y los recursos utilizados en él. Para ello, el programa tiene incorporado un paquete #[i Package Manager] que puede utilizar el desarrollador para realizar las pruebas que necesita.
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5tMXivm3xfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-right") Los desarrolladores pueden crear pruebas para testear cualquier cosa en los objetos que han colocado en una escena del juego. En el siguiente ejemplo se observa una escena que contiene una esfera de color verde encima de un cubo de color blanco que hace de piso; se quiere verificar que la esfera caiga bajo el efecto de la gravedad sobre el piso que es el cubo, mediante los siguientes pasos:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row(titulo="Esfera sobre cubo").justify-content-center
        .col-lg-11
          p Se quiere verificar con la función de testeo que la esfera posee el efecto de gravedad para que caiga sobre el cubo cuando se reproduzca la escena con el botón Play encerrado en el círculo rojo.
          figure.mb-2
            img(src='@/assets/curso/tema4/img11.png', style="").m-auto
          p.txt-c2.mb-0 La esfera está sobre el cubo suspendida en el aire.
      .row(titulo="Testear").justify-content-center
        .col-lg-11
          p Se va a escribir una prueba unitaria (Test) ayudado de la función Test Runner de Unity para hacer la verificación. Para ello debe activar la función de la siguiente manera:
          ul.lista-ul--color.lista-ul
            li.d-flex
              i.fas.fa-gamepad(style="color: #8979F3")
              |
              p.mb-0 Menú -> Window -> Test Runner
          .row.align-items-end
            .col-lg-5
              figure.mb-2
                img(src='@/assets/curso/tema4/img12.png', style="width: 350px").m-auto
              p.txt-c2.mb-0 Activación de función Test Runner para verificar funcionamiento del juego.
            .col-lg-7
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true").mb-0.mb-lg-5
                span Ampliar imagen
                |
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
      .row(titulo="Ventana <em>Test Runner</em>").justify-content-center
        .col-lg-11
          p Una vez abierta la ventana de #[i Test Runner] se puede arrastrar y ubicar en la parte inferior dentro del espacio de la ventana de proyecto.
          figure.mb-2
            img(src='@/assets/curso/tema4/img13.png', style="").m-auto
          p.txt-c2.mb-0 La ventana de Test Runner es colocada en la ventana de #[i Project].
      .row(titulo="<em>Script</em> de <em>Test</em>").justify-content-center
        .col-lg-11
          p En la ventana de #[i Project] se crea una carpeta que va a contener el #[i Script] donde se van a escribir las líneas de código para verificar que la esfera caiga bajo el efecto de la gravedad sobre el piso que es el cubo. Se va a realizar la prueba en modo #[i play], por lo tanto, se coloca Test Runner en PlayMode y se crea el archivo de la siguiente manera:
          ul.lista-ul--color.lista-ul
            li.d-flex
              i.fas.fa-gamepad(style="color: #8979F3")
              |
              p.mb-0 Menú -> Assets -> Create -> Testing -> PlayMode Test C# Script
          figure.mb-2
            img(src='@/assets/curso/tema4/img14.png', style="").m-auto
          p.txt-c2.mb-0 Creación del Script que va a contener el código a ejecutar.
      .row(titulo="<em>Script MyTest</em>").justify-content-center
        .col-lg-11
          p A la carpeta que se creó se le dio el nombre _Test y al #[i Script] el nombre MyTest tal como se muestra en la figura.
          figure.mb-2
            img(src='@/assets/curso/tema4/img15.png', style="").m-auto
          p.txt-c2.mb-0 Creación del Script de verificación.
      .row(titulo="Visual <em>Studio</em>").justify-content-center
        .col-lg-11
          p Las líneas de código del archivo se escriben en el editor de texto de Unity Visual #[i Studio]. El #[i Script] lo que pretende es que la esfera caiga a los 5 segundos de reproducir la escena en modo #[i Game] haciendo clic en el botón #[i play] del programa.
          .row
            .col-lg-5.mb-4.mb-lg-0
              p En las líneas de código marcadas en los puntos:
              ul.lista-ul--color.lista-ul
                li.d-flex
                  i.fas.fa-gamepad(style="color: #8979F3")
                  |
                  p.mb-0 El espacio #[i MyTest] se declara público con los GameObject sphere y #[i cube].
                li.d-flex
                  i.fas.fa-gamepad(style="color: #8979F3")
                  |
                  p.mb-0 Se declaran las variables #[i sphere] y #[i cube] que más adelante tomaran el valor de las posiciones.
                li.d-flex
                  i.fas.fa-gamepad(style="color: #8979F3")
                  |
                  p.mb-0 Se carga la escena llamada “ScenaSphere”.
                li.d-flex
                  i.fas.fa-gamepad(style="color: #8979F3")
                  |
                  p.mb-0 Indica que el #[i Script] se va a ejecutar en PlayMode en el Test Runner.
                li.d-flex
                  i.fas.fa-gamepad(style="color: #8979F3")
                  |
                  p.mb-0 La sphere está sobre el cube - 5 * mientras la esfera no cambie la posición en el eje y el valor de la variable es nulo. 
                li.d-flex
                  i.fas.fa-gamepad(style="color: #8979F3")
                  |
                  p.mb-0 Si el valor actual de la posición y de la sphera es mayor que el valor y de la posición del cubo, la esfera no cae.
                li.d-flex
                  i.fas.fa-gamepad(style="color: #8979F3")
                  |
                  p.mb-0 La esfera cambia la posición en el eje y el valor de la variable es 5.
                li.d-flex
                  i.fas.fa-gamepad(style="color: #8979F3")
                  |
                  p.mb-0 Si el valor actual de la posición y de la sphera es menor que el valor y de la posición del cubo la esfera cae.
              a.boton.color-acento-botones.indicador__container(@click="modal2 = true").mb-0.mb-lg-5
                span Ampliar imagen
                |
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
            .col-lg-7
              figure.mb-2
                img(src='@/assets/curso/tema4/img16.png', style="").m-auto
              p.txt-c2.mb-0 Líneas de código escritas en el editor de texto Visual #[i Studio].
      .row(titulo="Activar <em>Test</em>").justify-content-center
        .col-lg-11
          p Para correr el #[i Test] diríjase al motor Unity a la ventana de Test Runner y observe que el programa a adicionado archivos que necesita para ejecutar el #[i Script]; la escena debe estar en modo #[i Game], Test Runner debe estar en PlayMode y simplemente se debe hacer clic en Run All.
          .row.align-items-end
            .col-lg-5
              figure.mb-2
                img(src='@/assets/curso/tema4/img17.png', style="width: 350px").m-auto
              p.txt-c2.mb-0 Ejecución de los #[i Scripts] que aparecen en Test Runner.
            .col-lg-7
              a.boton.color-acento-botones.indicador__container(@click="modal3 = true").mb-0.mb-lg-5
                span Ampliar imagen
                |
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
      .row(titulo="Mensaje de error").justify-content-center
        .col-lg-11
          p Al ejecutar Run All; en la Consola aparece un error en la línea 7 del #[i Script] para ello, se debe ir al editor y resolverlo para volver a ejecutar el #[i Test].
          figure.mb-2
            img(src='@/assets/curso/tema4/img18.png', style="").m-auto
          p.txt-c2.mb-0 Generación de error en la consola del programa.
      .row(titulo="Modo edición").justify-content-center
        .col-lg-11
          p Cuando la verificación se hace utilizando el modo de edición, entonces en la ventana de Test Runner se hace clic en EditMode. Como se mencionó anteriormente este modo es usado cuando se quiere verificar que un elemento realiza adecuadamente un comportamiento que requiere de cálculo y no se ejecuta en tiempo real.
          figure.mb-2
            img(src='@/assets/curso/tema4/img19.png', style="").m-auto
          p.txt-c2.mb-0 Uso del modo edición en  el testeo.
      .row(titulo="<em>Script</em> de edición").justify-content-center
        .col-lg-11
          p Una vez activado el modo edición en Test Runner se debe proceder a crear la prueba que se va a utilizar para hacer la verificación del comportamiento de los elementos en la escena:
          ul.lista-ul--color.lista-ul
            li.d-flex
              i.fas.fa-gamepad(style="color: #8979F3")
              |
              p.mb-0 Menu -> Assets -> Create -> Testing -> EditMode Test C# Script
          figure.mb-2
            img(src='@/assets/curso/tema4/img20.png', style="").m-auto
          p.txt-c2.mb-0 Creación de Script para verificación en modo edición.
      .row(titulo="<em>Script My_Test</em> edición").justify-content-center
        .col-lg-11
          p El #[i Script] My_Test edición que va a servir de testeo se ha creado bajo la carpeta Editor, automáticamente ensamblada por el programa.
          figure.mb-2
            img(src='@/assets/curso/tema4/img21.png', style="width: 550px")
          p.mb-0 Creación del #[i Script] de testeo en la carpeta ensamblada por el programa.
      .row(titulo="Clase <em>Test</em>").justify-content-center
        .col-lg-11
          p La diferencia del EditMode con el modo PlayMode, radica en que cuando se escriban las líneas de código en el editor de Visual #[i Studio] se deben realizar bajo la clase #[i Test], ya que la clase Unity Test corresponde al modo #[i Play] o Run time.
          .row.align-items-end
            .col-lg-5
              figure.mb-2
                img(src='@/assets/curso/tema4/img22.png', style="width: 350px").m-auto
              p.txt-c2.mb-0 Utilización de la clase #[i Test] para escribir la prueba en modo edición.
            .col-lg-7
              a.boton.color-acento-botones.indicador__container(@click="modal4 = true").mb-0.mb-lg-5
                span Ampliar imagen
                |
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema4/img12.png', style="width:450px").m-auto
          p.txt-c3.mb-0 Activación de función Test Runner para verificar funcionamiento del juego.
    ModalA(:abrir-modal.sync="modal2")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema4/img16.png', style="width:480px").m-auto
          p.txt-c3.mb-0 Líneas de código escritas en el editor de texto Visual #[i Studio].
    ModalA(:abrir-modal.sync="modal3")
      .row
        .col-12
          figure.mb-2
            img(src='@/assets/curso/tema4/img17.png', style="width:520px").m-auto
          p.txt-c3.mb-0 Ejecución de los #[i Scripts] que aparecen en Test Runner.
    ModalA(:abrir-modal.sync="modal4")
      .row
        .col-12
          figure.mb-2
            img(src='@/assets/curso/tema4/img22.png', style="width:620px").m-auto
          p.txt-c3.mb-0 Utilización de la clase #[i Test] para escribir la prueba en modo edición.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.bg-c8.p-4.p-lg-0
        .row.align-items-center
          .col-lg-3.mb-4.mb-lg-0.pe-0
            figure
              img(src='@/assets/curso/tema1/img13.svg', style="width:200px").m-auto
          .col-lg-9
            p.mb-0.me-0.me-lg-3 Para profundizar en el tema con algunos consejos sobre cómo usar Unity Test Framework, consultar el tema #[b “Prueba el código de tu juego con #[i Unity Test Framework”]] que se encuentra dentro del material complementario.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
