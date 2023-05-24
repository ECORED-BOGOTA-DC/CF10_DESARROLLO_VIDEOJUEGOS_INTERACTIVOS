<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 2
      h1 Prototipado digital con paquetes prefabricados
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Los prefabricados o #[i prefabs] como se les conoce en los prototipos de los videojuegos son un tipo de #[i asset] que guardan copias de objetos a los que se les ha colocado características y propiedades que pueden ser reutilizadas en el videojuego cuantas veces sea necesario. Los #[i prefabs] actúan como plantillas que se pueden utilizar en cualquier momento para no repetir las características de un objeto.
        .cajon.color-primario.p-4
          p.mb-0 Se debe recordar que los #[i asset] son cualquier tipo de recurso que se utilice en el videojuego como, por ejemplo, luces, sistema de partículas, imágenes, texturas, materiales, sonidos, objetos dentro del escenario como rocas, pasto, entre otros.
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width:600px").m-auto
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width:50px").m-auto
      .col
        h3.mb-0 Paquetes #[i prefabs]
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-8.col-lg-4.mb-4
        .row
          .col-12.mb-4
            figure
              img(src='@/assets/curso/tema2/img2.png', style="width:450px").m-auto
          .col-12
            p Cuando se habla de paquetes prefabricados se hace referencia a que no es necesario crear los #[i prefabs], sino que ya el sector de la industria de videojuegos ha desarrollado una serie de objetos que pueden ser utilizados de manera libre o paga, si lo que se busca no está dentro los que se pueden descargar de manera gratuita.
      .col-md-8.col-lg-4.mb-4
        .row
          .col-12.mb-4
            figure
              img(src='@/assets/curso/tema2/img3.png', style="width:450px").m-auto
          .col-12
            p Estos paquetes están agrupados por categorías de acuerdo con lo que puede requerir un juego para armar las escenas de la historia; por ejemplo, sistema de partículas, medio ambiente, vehículos, efectos especiales, terrenos, edificaciones, entre otros.
      .col-md-8.col-lg-4
        .row
          .col-12.mb-4
            figure
              img(src='@/assets/curso/tema2/img4.png', style="width:450px").m-auto
          .col-12
            p Si se está utilizando el motor de Unity para diseñar y desarrollar un juego, desde las opciones del menú el programa permite la creación de #[i prefabs] o la importación de paquetes prefabricados estándar e igualmente gratuitos o comprados de los que ofrece la tienda Unity Asset Store.
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema2/img2.svg', style="width:50px").m-auto
      .col
        h3.mb-0 Crear un #[i prefabs] desde las opciones del menú de Unity
    p.mb-4(data-aos="fade-right") Para este #[i prefabs] se  va a suponer que la escena necesita varios cubos iguales colocados en el mismo espacio, para lo cual se debe crear un #[i prefabs] del cubo de acuerdo con los siguientes pasos:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row(titulo="Crear el objeto").justify-content-center
        .col-lg-11
          p Desde el menú en la opción #[i GameObject] se va a seleccionar un objeto 3D que corresponde al cubo:
          ul.lista-ul--color.lista-ul
            li 
              i.fas.fa-gamepad(style="color: #8979F3")
              | Menú -> GameObject -> 3D Object -> Cube
          .row
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-2
                img(src='@/assets/curso/tema2/img5.png', style="width:650px").m-auto
              p.txt-c2.mb-0 Creando un #[i GameObject] en Unity
            .col-lg-8
              figure.mb-2
                img(src='@/assets/curso/tema2/img6.png', style="width:750px").m-auto
              p.txt-c2.mb-0 Cubo que se va a utilizar como #[i Prefabs]
      .row(titulo="Crear un material").justify-content-center
        .col-lg-11
          p Ahora se le van a colocar el atributo de color verde para lo cual es necesario crear un Material:
          ul.lista-ul--color.lista-ul
            li 
              i.fas.fa-gamepad(style="color: #8979F3")
              | Menú -> Asset -> Create -> Material
          .row
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-2
                img(src='@/assets/curso/tema2/img7.png', style="width:650px").m-auto
              p.txt-c2.mb-0 Creando un material para asignar el atributo color al cubo
            .col-lg-8
              figure.mb-2
                img(src='@/assets/curso/tema2/img8.png', style="width:750px").m-auto
              p.txt-c2.mb-0 Material con atributo de color verde para aplicar al cubo
      .row(titulo="Aplicación de color").justify-content-center
        .col-lg-11
          p Arrastrar con el mouse el material creado hasta el cubo para que se aplique el color.
          .row
            .col-12
              figure.mb-2
                img(src='@/assets/curso/tema2/img9.png', style="width:1250px").m-auto
              p.txt-c2.mb-0 El color del material quedó aplicado en el cubo
      .row(titulo="Crear el <em>prefabs</em>").justify-content-center
        .col-lg-11
          p Hacer clic sostenido en la palabra cube que aparece en la ventana de Jerarquía y soltarla en la ventana de proyecto, lo cual da como resultado el #[i prefabs] que se distingue del material porque tiene la forma del cubo y el nombre está resaltado en azul.
          .row
            .col-12
              figure.mb-2
                img(src='@/assets/curso/tema2/img10.png', style="width:1250px").m-auto
              p.txt-c2.mb-0 Creación del #[i prefabs]
      .row(titulo="Dar atributo <em>Rigidbody</em>").justify-content-center
        .col-lg-11
          p Al #[i prefabs] se le puede incorporar este atributo que significa que se puede mover libremente si se desea cuando se desarrollen líneas de código.
          .row
            .col-12
              figure.mb-2
                img(src='@/assets/curso/tema2/img11.png', style="width:1250px").m-auto
              p.txt-c2.mb-0 Adición del componente #[i Rigidbody] al #[i Prefabs]
      .row(titulo="Hacer repeticiones del <em>prefabs</em>").justify-content-center
        .col-lg-11
          p Una vez creado el #[i prefabs] se pueden hacer cuantas repeticiones o instancias se necesiten de este elemento dentro de la escena; solamente arrastrando el #[i prefabs] a la ventana de la escena del juego.
          .row
            .col-12
              figure.mb-2
                img(src='@/assets/curso/tema2/img12.png', style="width:1250px").m-auto
              p.txt-c2.mb-0 Instancias del #[i Prefabs] en la escena del juego
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema2/img2.svg', style="width:50px").m-auto
      .col
        h3.mb-0 Importar un paquete prefabricado estándar
    p.mb-4(data-aos="fade-right") El motor de Unity tiene incorporados #[i asset] que actúan como recursos prefabricados llamados activos estándar, los cuales facilitan la creación de una escena, proporcionando elementos tales como medio ambiente, personajes y sistemas de partículas entre otros:
    .tarjeta.tarjeta--azul1.mb-5(data-aos="fade-left")
      .p-4
        SlyderA
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              h3 Importar paquete
              p Cuando se ha creado el proyecto en el programa Unity se podrá incorporar cualquiera de estos #[i asset] accionando del menú la opción #[i Assets], clic en importar paquete y seleccionar uno de la lista desplegable; en este caso se incorporará el paquete de medio ambiente:
              p Menu -> Assets -> Import Package -> Environment
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span Ampliar imagen
                |
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
            .col-lg-5
              figure.mb-2
                img(src='@/assets/curso/tema2/img13.png', style="width:650px").m-auto
              p.txt-c2.mb-0 #[i Import Package]
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              h3 #[i Prefabs Environment]
              p Cuando se ha seleccionado el paquete, el programa muestra todos los archivos que importará al proyecto una vez se haga clic en el botón #[i Import].
              a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                span Ampliar imagen
                |
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
            .col-lg-5
              figure.mb-2
                img(src='@/assets/curso/tema2/img14.png', style="width:250px").m-auto
              p.txt-c2.mb-0 #[i Prefabs] de medio ambiente que se incorporarán en el proyecto.
          .row.justify-content-center
            .col-10
              h3 #[i Assets] en carpeta
              p En la figura se pueden observar los activos prefabricados que se trasladaron a la carpeta de asset del proyecto del videojuego en la ventana Project.
              figure.mb-2
                img(src='@/assets/curso/tema2/img15.png', style="width:1250px").m-auto
              p.txt-c2.mb-0 #[i Assets] estándar de #[i Environmet] trasladados al proyecto.
          .row.justify-content-center
            .col-10
              h3 #[i Prefabs WaterProD]
              p Al hacer clic en la carpeta #[i Environment] se selecciona la carpeta de #[i prefabs] y se observan dos recursos que tienen que ver con agua. Se puede seleccionar cualquiera, por ejemplo, el primero.  
              figure.mb-2
                img(src='@/assets/curso/tema2/img16.png', style="width:1250px").m-auto
              p.txt-c2.mb-0 Seleccionando uno de los #[i prefabs] para la escena del videojuego.
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              h3 Escena de agua
              p Si se arrastra el #[i prefabs] seleccionado al espacio de la escena donde se copiaron los cubos anteriormente; entonces estos quedan sobre el agua como se observa en la figura.
              a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                span Ampliar imagen
                |
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
            .col-lg-5
              figure.mb-2
                img(src='@/assets/curso/tema2/img17.png', style="width:650px").m-auto
              p.txt-c2.mb-0 #[i GameObjects] sobre agua
    ModalA(:abrir-modal.sync="modal1")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema2/img13.png', style="width:550px").m-auto
          p.txt-c3.mb-0 #[i Import Package]
    ModalA(:abrir-modal.sync="modal2")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema2/img14.png', style="width:290px").m-auto
          p.txt-c3.mb-0 #[i Prefabs] de medio ambiente que se incorporarán en el proyecto.
    ModalA(:abrir-modal.sync="modal3")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema2/img17.png', style="width:950px").m-auto
          p.txt-c3.mb-0 #[i GameObjects] sobre agua
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema2/img2.svg', style="width:50px").m-auto
      .col
        h3.mb-0 Importar paquete de #[i Asset Store]
    p.mb-4(data-aos="fade-right") Cuando en los paquetes estándar no están los recursos necesarios para el videojuego se pueden importar de la tienda de Unity, esta acción se puede realizar estando en el motor de Unity:
    .tarjeta.tarjeta--azul1.p-4.mb-5(data-aos="fade-left")
      PasosB.color-acento-contenido
        .row.justify-content-center(titulo="")
          .col-11
            .row
              .col-lg-6.mb-4.mb-lg-0
                h3 Tienda Unity
                p Haciendo clic en la pestaña #[i Asset Store] e inmediatamente el programa se conecta en línea con la tienda.
                a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                  span Ampliar imagen
                  |
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema2/img18.png', style="width:650px").m-auto
                p.txt-c2.mb-0 Utilizando la tienda Unity para importar paquetes prefabricados.
        .row.justify-content-center(titulo="")
          .col-11
            .row
              .col-lg-6.mb-4.mb-lg-0
                h3 #[i Asset Free]
                p En este caso se seleccionó un paquete de ciencia ficción de descarga gratuita llamado #[i LowPoly SciFi], el cual se debe descargar haciendo clic en el botón #[i Download].
                a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                  span Ampliar imagen
                  |
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema2/img19.png', style="width:650px").m-auto
                p.txt-c2.mb-0 Descargando el #[i Asset Free LowPoly Scifi].
        .row.justify-content-center(titulo="")
          .col-11
            .row
              .col-lg-6.mb-4.mb-lg-0
                h3 Adición de #[i Assets Free]
                p Cuando el paquete ha sido descargado e importado se adiciona a la carpeta de #[i Assets] del proyecto de videojuego que se está desarrollando.
                a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
                  span Ampliar imagen
                  |
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema2/img20.png', style="width:400px").m-auto
                p.txt-c2.mb-0 Paquete #[i LowPoly SciFi] adicionado a la carpeta de #[i Assets] en la ventana #[i Project].
        .row.justify-content-center(titulo="")
          .col-11
            .row
              .col-lg-6.mb-4.mb-lg-0
                h3 Prototipo
                p A continuación se observa un prototipo diseñado con los #[i prefabs] del paquete importado #[i LowPoly SciFi Pack], los cuales se pueden disponer en escena de acuerdo con las necesidades del videojuego y la lógica de las mecánicas.
                a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
                  span Ampliar imagen
                  |
                  i.fas.fa-search
                  .indicador--click(v-if="mostrarIndicador")
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema2/img21.png', style="width:600px").m-auto
                p.txt-c2.mb-0 Armado de un prototipo con los #[i Prefabs] de #[i LowPoly SciFi Pack].
    ModalA(:abrir-modal.sync="modal4")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema2/img18.png', style="width:750px").m-auto
          p.txt-c3.mb-0 Utilizando la tienda Unity para importar paquetes prefabricados.
    ModalA(:abrir-modal.sync="modal5")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema2/img19.png', style="width:750px").m-auto
          p.txt-c3.mb-0 Descargando el #[i Asset Free LowPoly Scifi].
    ModalA(:abrir-modal.sync="modal6")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema2/img20.png', style="width:500px").m-auto
          p.txt-c3.mb-0 #[i LowPoly SciFi] adicionado a la carpeta de #[i Assets] en la ventana #[i Project].
    ModalA(:abrir-modal.sync="modal7")
      .row
        .col-12.p-4
          figure.mb-2
            img(src='@/assets/curso/tema2/img21.png', style="width:700px").m-auto
          p.txt-c3.mb-0 Armado de un prototipo con los #[i Prefabs] de #[i LowPoly SciFi Pack].
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.bg-c8.p-4.p-lg-0
        .row.align-items-center
          .col-lg-3.mb-4.mb-lg-0.pe-0
            figure
              img(src='@/assets/curso/tema1/img13.svg', style="width:200px").m-auto
          .col-lg-9
            p.mb-0 Para profundizar en el tema consultar en el material complementario los siguientes artículos:
            p.mb-0 #[b Instanciar un objeto en Unity 3D y #[i Prefabs]].

</template>

<script>
export default {
  name: 'Tema2',
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
