<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 3
      h1 Métricas del videojuego a partir de impresiones de detalles de eventos #[i (debug.log)]
    .dual-txt-deco2.mb-4(data-aos="fade-right")
      p(style="position: relative; z-index: 2") Es un conjunto de herramientas de análisis que proporcionan información acerca de la experiencia que tienen los usuarios con el uso del producto y de esta forma medir su calidad. Esta información puede ser utilizada para realizar mejoras en todos los aspectos del juego.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img1.png').m-auto
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Métricas de Unity
    p(data-aos="fade-down") El motor de videojuegos Unity utiliza el sistema Analytics, servicio que se configura automáticamente al ser instalado el programa y que contiene las siguientes métricas:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
      .row(titulo="Métricas del jugador").justify-content-center
        .col-lg-11
          p.mb-0 Proporciona información sobre el número de jugadores que inician una sesión durante las 24 horas del día; con lo cual se pueden obtener las estadísticas del porcentaje mensual de participantes activos tanto nuevos como los que regresan.
      .row(titulo="Métricas de sesión").justify-content-center
        .col-lg-11
          p.mb-0 Se refiere al número total de sesiones que juegan en promedio los usuarios por día y el tiempo de juego promedio de estos.
      .row(titulo="Métrica de retención").justify-content-center
        .col-lg-11
          p.mb-0 Proporciona el porcentaje de jugadores que regresan al juego al siguiente día de jugar por primera vez, los que regresaron a los siete días y los que regresaron a los 30 días.
      .row(titulo="Métrica de monetización").justify-content-center
        .col-lg-11
          p.mb-0 Hace referencia a los ingresos promedio por usuario que juegan en un día, los cuales pueden ser obtenidos de los anuncios. Para esto Unity hace la verificación mediante la función Analytics Transaction.
      .row(titulo="Métrica de Ads").justify-content-center
        .col-lg-11
          p.mb-0 O métrica de anuncios, hace referencia a los ingresos promedios por anuncios que ven los jugadores durante el juego, al igual que los ingresos totales. Los anuncios de video que se reproducen en el juego y los ingresos estimados por 1000 impresiones de anuncios.
      .row(titulo="Generador de segmentos").justify-content-center
        .col-lg-11
          p Dentro de la base de datos de los jugadores, Unity forma grupos diferenciados aspectos como:
          ul.lista-ul--color.lista-ul
            li.d-flex
              i.fas.fa-gamepad(style="color: #8979F3")
              |
              p.mb-0 #[b Segmentos del ciclo de vida]: número de días que jugaron desde que ingresaron por primera vez: (1-3) días; (4-7) días; (8-14) días; (7-30) días; (31 -90) días.
            li.d-flex
              i.fas.fa-gamepad(style="color: #8979F3")
              |
              p.mb-0 #[b Segmentos geográficos]: de acuerdo con la dirección IP desde donde se conecta el jugador Unity lo geolocaliza. El desarrollador puede definir las zonas geográficas o países que va a incluir.
            li.d-flex
              i.fas.fa-gamepad(style="color: #8979F3")
              |
              p.mb-0 #[b Segmentos de monetización]: agrupa los jugadores de acuerdo con la cantidad de dinero que gastan en el juego.
            li.d-flex
              i.fas.fa-gamepad(style="color: #8979F3")
              |
              p.mb-0 #[b Segmentos por plataforma]: clasifica a los jugadores de acuerdo con dos plataformas, los que utilizan Android o los que utilizan IOS.
            li.d-flex
              i.fas.fa-gamepad(style="color: #8979F3")
              |
              p.mb-0 #[b Segmentos personalizados]: es una categoría de jugadores que se crea combinando reglas de los segmentos anteriores.
    p(data-aos="fade-left") Para hacer uso de las métricas de Unity el juego debe estar por lo menos en la versión Beta, en la cual se hacen pruebas de usuario para medir su experiencia. Los pasos a seguir son:
    .tarjeta.tarjeta--azul1.mb-5(data-aos="fade-right")
      .p-4
        SlyderA
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Los desarrolladores deben abrir el proyecto del videojuego y en la ventana del inspector hacer clic en la pestaña Servicio:]
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span Ampliar imagen
                |
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
            .col-lg-5
              figure.mb-2
                img(src='@/assets/curso/tema3/img2.png', style="width:450px").m-auto
              p.txt-c2.mb-0 Servicio de análisis del videojuego
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              p #[b Una vez cargada la pestaña de servicios de Unity se hace clic en el botón ir al tablero: #[i Go to dashboard] para acceder a las diferentes métricas de análisis.]
              p Las métricas que se observan en la figura, aparecen en (0), debido a que el juego se está desarrollando y todavía no se han convocado usuarios para comprobar las funciones 1.
              a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                span Ampliar imagen
                |
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
            .col-lg-5
              figure.mb-2
                img(src='@/assets/curso/tema3/img3.png', style="width:550px").m-auto
              p.txt-c2.mb-0 Métricas de un juego en fase de diseño
    ModalA(:abrir-modal.sync="modal1")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema3/img2.png', style="width:400px").m-auto
          p.txt-c3.mb-0 Servicio de análisis del videojuego
    ModalA(:abrir-modal.sync="modal2")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema3/img3.png', style="width:550px").m-auto
          p.txt-c3.mb-0 Servicio de análisis del videojuego
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Método #[i debug.log ]
    .row.bg-c9.mb-5(data-aos="fade-right")
      .col-12
        .px-5
          .row
            .col-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img10.svg', style="width:450px").m-auto
            .col-lg-7.mb-4.mb-lg-0
              p.mt-4.mt-lg-3 En Unity el método debug.log consiste en una función que se utiliza para imprimir mensajes en la ventana de la consola con el objeto de visualizar los eventos del juego, en cuanto al comportamiento de los objetos y componentes que se han colocado en las escenas, inspeccionando el flujo de las acciones con el propósito de depurarlas, por ejemplo, se va a inspeccionar el evento A: rotación del cubo en la escena del juego de acuerdo con las coordenadas iniciales (X=0, Y=1, Z=0) a las coordenadas finales (X = 0, Y = 0.01, Z = 0), como se muestra a continuación:
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img4.png', style="width:270px").m-auto
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 4]
          p.mb-0 Evento A
        figure
          img(src='@/assets/curso/tema3/img1.gif').m-auto
          figcaption.mt-3 Nota. Flujo del evento A. Hektor docs, (2021). Tipos de datos. https://docs.hektorprofe.net/unity/visual-scripting/tipos-datos/
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width:50px").m-auto
      .col
        h3.mb-0 Función #[i debug.log]
    .dual-txt-deco3.mb-5(data-aos="fade-right")
      p(style="position: relative; z-index: 2") El  flujo de transformación se puede imprimir en la ventana de la consola de Unity a través de la función debug.log, como se puede detallar en la siguiente imagen interactiva, donde se observan términos que corresponden a las líneas de código relacionadas con el evento.
    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/img6.svg')
          figcaption Nota. adaptado de la Utilización de la función debug.log para inspeccionar el evento A. Hektor docs, (2021). Tipos de datos. https://docs.hektorprofe.net/unity/visual-scripting/tipos-datos/
      .tarjeta.color-acento-contenido.p-3(x="88%" y="31%" numero="+")
        p.mb-0 Hace referencia a los datos de las coordenadas finales o de llegada del objeto.
      .tarjeta.color-acento-contenido.p-3(x="66%" y="31%" numero="+")
        p.mb-0 Hace referencia a los datos de las coordenadas iniciales o de partida del objeto.
      .tarjeta.color-acento-contenido.p-3(x="42%" y="21.2%" numero="+")
        p.mb-0 La función #[i debug.log] imprime el mensaje correspondiente en la consola, dependiendo del comportamiento del evento.
      .tarjeta.color-acento-contenido.p-3(x="27.8%" y="30.9%" numero="+")
        p.mb-0 Cumplimiento de una condición.
        p.mb-0 Para este caso del evento A, la condición es que la variable sea verdadera para que el cubo haga la rotación; de lo contrario no rota.
      .tarjeta.color-acento-contenido.p-3(x="24.3%" y="6.6%" numero="+")
        p.mb-0 Corresponde a datos de tipo carácter, es decir, la escritura del mensaje “El objeto SÍ se mueve” o “El Objeto NO se mueve”.
      .tarjeta.color-acento-contenido.p-3(x="30.4%" y="85%" numero="+")
        p.mb-0 Corresponde a datos de tipo carácter, es decir, la escritura del mensaje “El objeto SÍ se mueve” o “El Objeto NO se mueve”.
      .tarjeta.color-acento-contenido.p-3(x="16.8%" y="25.3%" numero="+")
        p.mb-0 Corresponde al modo de actualización de los eventos o acciones del juego.
      .tarjeta.color-acento-contenido.p-3(x="13.1%" y="69.6%" numero="+")
        p.mb-0 Es un tipo de dato lógico que puede asumir dos valores: #[i True] o #[i False].
      .tarjeta.color-acento-contenido.p-3(x="31%" y="54%" numero="+")
        p.mb-0 Se cumple la condición si el valor de la variable #[i Boolean] es #[b #[i True]], si es #[b #[i False]] no ocurre nada.
    p.mb-5(data-aos="fade-right") Obsérvese en la figura que el mensaje en la ventana de la consola indica que el cubo efectivamente ha rotado de una coordenada inicial a una final: “el objeto SI se mueve”:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 5]
          p.mb-0 Mensajes consola
        figure
          img(src='@/assets/curso/tema3/img6.png').m-auto
          figcaption.mt-3 Nota. Impresión de mensajes del evento A en la ventana de la consola. Hektor docs, (2021). Tipos de datos. https://docs.hektorprofe.net/unity/visual-scripting/tipos-datos/
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width:50px").m-auto
      .col
        h3.mb-0 Crear #[i Script]
    p.mb-4(data-aos="fade-right") Cuando se necesita manipular el objeto e imprimir el flujo del evento con mensajes propios se debe crear el #[i Script] mediante los siguientes pasos:
    .tarjeta.tarjeta--azul1.mb-5(data-aos="fade-left")
      .p-4
        SlyderA
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h3 Crear C# #[i Script]
                  p Ingresar al menú Assets, dar clic en Create y elegir la opción C# #[i Script]:
                  ul.lista-ul--color.lista-ul
                    li.d-flex
                      i.fas.fa-gamepad(style="color: #8979F3")
                      |
                      p.mb-0 Menu -> Assets -> Create -> C# Script
                  p Al crear el archivo C# #[i Script] y colocarle el nombre se abre la ventana del Inspector con las líneas de código, que por defecto coloca el programa Unity y que corresponden a la inicialización del programa o #[i #[b Start]], la actualización de los objetos y componentes #[i #[b Update]].
                  a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                    span Ampliar imagen
                    |
                    i.fas.fa-search
                    .indicador--click(v-if="mostrarIndicador")
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema3/img7.png', style="width:550px").m-auto
                  p.txt-c2.mb-0 Creando un #[i Script] para imprimir mensajes del evento
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h3 #[i Script] mensaje
                  p Al #[i Script] se le ha colocado el nombre Mensajes, el cual aparece en la parte superior de la ventana del Inspector con el icono de archivo C# y en la parte inferior de la ventana aparecen las líneas de código que se han escrito para imprimir los mensajes en la consola.
                  a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                    span Ampliar imagen
                    |
                    i.fas.fa-search
                    .indicador--click(v-if="mostrarIndicador")
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema3/img8.png', style="width:550px").m-auto
                  p.txt-c2.mb-0 #[i Script] para imprimir los eventos en la consola
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h3 Código del #[i Script]
                  p Para visualizar mejor las líneas de código se abre el editor Visual Studio y se escriben las líneas de código. Se observa #[b #[i public class Mensajes]], que indica que se ha creado un #[i Script] que puede ser utilizado sin restricción en diferentes #[i GameObjects] del juego, porque se ha declarado de clase pública. La línea de código #[b #[i Debug.Log](“Bienvenid@ a la escena del Juego”)] indica que se imprimirá este texto en la consola al aplicar el #[i Script] a un #[i GameObject] de la escena y se active el juego.
                  a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                    span Ampliar imagen
                    |
                    i.fas.fa-search
                    .indicador--click(v-if="mostrarIndicador")
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema3/img9.png', style="width:550px").m-auto
                  p.txt-c2.mb-0 Se anexó la función #[i Debug.Log]
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h3 Aplicar #[i Script]
                  p Para aplicar el #[i Script] a la escena se debe seleccionar uno de los objetos; en este caso se seleccionó el primer cubo y después se arrastra con el mouse sostenido el #[i Script Mensajes] hacia la ventana de jerarquía al texto Cube. Después se activa el #[I script] haciendo clic en el botón avanzar.
                  a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
                    span Ampliar imagen
                    |
                    i.fas.fa-search
                    .indicador--click(v-if="mostrarIndicador")
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema3/img10.png', style="width:550px").m-auto
                  p.txt-c2.mb-0 Aplicación del #[i Script Mensajes] a un #[i GameObject] de la escena. Unity
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h3 Impresión de evento
                  p En la figura se puede observar la impresión del mensaje del evento en la consola precedido de un icono blanco, los iconos rojos indican un error en la colocación de la cámara en la escena que puede corregirse ubicándola de nuevo.
                  a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
                    span Ampliar imagen
                    |
                    i.fas.fa-search
                    .indicador--click(v-if="mostrarIndicador")
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema3/img11.png', style="width:550px").m-auto
                  p.txt-c2.mb-0 #[i Debug.log] que imprime la bienvenida al juego
    ModalA(:abrir-modal.sync="modal3")
      .row
        .col-12.p-4
          figure
            img(src='@/assets/curso/tema3/img7.png', style="width:950px").m-auto
          p.txt-c3.mb-0 Creando un #[i Script] para imprimir mensajes del evento
    ModalA(:abrir-modal.sync="modal4")
      .row
        .col-12.p-4
          figure
            img(src='@/assets/curso/tema3/img8.png', style="width:1000px").m-auto
          p.txt-c3.mb-0 #[i Script] para imprimir los eventos en la consola
    ModalA(:abrir-modal.sync="modal5")
      .row
        .col-12.p-4
          figure
            img(src='@/assets/curso/tema3/img9.png', style="width:1000px").m-auto
          p.txt-c3.mb-0 Se anexó la función #[i Debug.Log]
    ModalA(:abrir-modal.sync="modal6")
      .row
        .col-12.p-4
          figure
            img(src='@/assets/curso/tema3/img10.png', style="width:800px").m-auto
          p.txt-c3.mb-0 Aplicación del #[i Script Mensajes] a un #[i GameObject] de la escena. Unity
    ModalA(:abrir-modal.sync="modal7")
      .row
        .col-12.p-4
          figure
            img(src='@/assets/curso/tema3/img11.png', style="width:750px").m-auto
          p.txt-c3.mb-0 #[i Debug.log] que imprime la bienvenida al juego
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.bg-c8.p-4.p-lg-0
        .row.align-items-center
          .col-lg-3.mb-4.mb-lg-0.pe-0
            figure
              img(src='@/assets/curso/tema1/img13.svg', style="width:200px").m-auto
          .col-lg-9
            p.mb-0 Para profundizar en el tema consultar en Unity Documentation: #[b “Métricas, segmentos y terminología de Analytics”] y #[b “Depurar”] que se encuentran en el material complementario. 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
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
