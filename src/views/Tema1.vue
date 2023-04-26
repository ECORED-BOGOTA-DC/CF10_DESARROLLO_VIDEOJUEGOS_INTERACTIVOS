<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 1
      h1 Diseño del ciclo de iteraciones - #[i backlog]
    p.mb-4(data-aos="fade-right") Según García (2019) #[i backlog] es una palabra de origen inglés que significa una pila de tareas almacenadas que están esperando para ser evacuadas, igualmente, este término es usado cuando se define el ciclo de vida de un sistema de información en sus fases de análisis, diseño, desarrollo e implementación, también está asociado a metodologías de trabajo ágiles para el desarrollo y entrega de productos en menor tiempo y con mayor eficiencia.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width:600px").m-auto
      .col-lg-6(data-aos="fade-left")
        .row.mb-4
          .col-12.bg-c2
            .p-4
              p.mb-0 En el contexto del método ágil el diseño de los ciclos de trabajo o iteraciones se acuña el término #[b #[i “Product backlog”]], el cual García define como una lista ordenada y priorizada de tareas a ejecutar en un periodo de tiempo corto para completar un entregable del producto y los ciclos se repiten hasta que se obtenga el producto final.
        p.mb-0 El #[i backlog] que se observa en la Figura 1, está ordenado de acuerdo con las funciones o requisitos más importantes considerados por el cliente o dueño del producto y colocados en la parte superior del #[i backlog], dejando en la base los de menor relevancia:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1]. #[i Backlog]
        figure
          img(src='@/assets/curso/tema1/img1.svg').m-auto
          figcaption.mt-4 Nota. Adaptado del Conjunto de tareas priorizadas del #[i backlog], García (2019).
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center.mb-0 Durante la iteración se pueden cambiar las prioridades de las tareas según el valor que aporten al cliente las diferentes funciones que se estén desarrollando en el ítem (tarea).
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center.mb-0 El tamaño de los ítems (requisitos) depende del grado de detalle o refinamiento proporcionado por el cliente, ya que se deben ejecutar muy pronto, entre más pequeños sean mayor es el refinamiento o detalle, por eso los de tamaño más grande están en la parte inferior.
      .col-md-8.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center.mb-0 Durante el ciclo iterativo se puede decidir que un requisito no se va a ejecutar y se puede eliminar tranquilamente de la pila de requisitos o adicionar uno que no se había tenido en cuenta para completar la entrega.
    .row.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .dual-txt-deco1
          p(style="position: relative; z-index: 2") El #[i backlog] se materializa en un documento que contiene los requisitos necesarios para obtener el producto final esperado por el cliente. Los aspectos que lo caracterizan se pueden resumir a continuación:
        ul.lista-ul--color.lista-ul
          li 
            i.fas.fa-gamepad(style="color: #8979F3")
            | Los ítems o requisitos considerados se deben colocar en una lista en orden de importancia para el cliente, siendo los primeros los de mayor relevancia.
          li 
            i.fas.fa-gamepad(style="color: #8979F3")
            | El #[i backlog] se puede modificar a lo largo del ciclo iterativo adicionando o eliminando ítems  de acuerdo con las prioridades que vayan surgiendo durante el proceso de desarrollo.
          li 
            i.fas.fa-gamepad(style="color: #8979F3")
            | El refinamiento de los ítems depende de los detalles proporcionados por el cliente, siendo los más refinados aquellos que se colocan al comienzo de la lista.
          li 
            i.fas.fa-gamepad(style="color: #8979F3")
            | El tamaño de los ítems depende del grado de refinamiento (detalles) que posean, siendo los más pequeños aquellos que estén provistos del mayor número de detalles y por el contrario, los de mayor tamaño son los de menor refinamiento.
          li 
            i.fas.fa-gamepad(style="color: #8979F3")
            | Cada ítem del #[i backlog] debe asociar la función que se va a desarrollar para cumplir el requisito en un lenguaje claro y entendible por el cliente. 
          li 
            i.fas.fa-gamepad(style="color: #8979F3")
            | Cada ítem del #[i backlog] debe ser independiente uno del otro para poder cambiar el orden de ejecución si así se requiere. 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width:550px").m-auto
    p.mb-5(data-aos="fade-up") Cuando se desarrolla un videojuego utilizando metodologías ágiles como por ejemplo SCRUM se debe tener en cuenta:
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-md-8.col-lg-10
        .row.mb-4
          .col-lg-2.bg-c3
            .p-4
              figure
                img(src='@/assets/curso/tema1/img5.svg', style="width:90px").m-auto
          .col-lg-10.bg-c4
            .p-4.h-100
              .row.align-items-center.h-100
                .col-12
                  p.mb-0 Lo primero que se diseña para empezar las tareas es el #[i Product backlog]; que en este caso sería la lista priorizada de las características principales del juego.
        .row.mb-4
          .col-lg-2.bg-c3
            .p-4
              figure
                img(src='@/assets/curso/tema1/img6.svg', style="width:90px").m-auto
          .col-lg-10.bg-c4
            .p-4.h-100
              .row.align-items-center.h-100
                .col-12
                  p.mb-0 El #[i Product Owner] (PO) es el que decide la prioridad de dichas características, ya que es el responsable ante el cliente de la calidad del producto terminado. Para establecer dicha prioridad es necesario identificar los aspectos más importantes para el jugador en su experiencia con el producto.
        .row.mb-4
          .col-lg-2.bg-c3
            .p-4
              figure
                img(src='@/assets/curso/tema1/img7.svg', style="width:90px").m-auto
          .col-lg-10.bg-c4
            .p-4.h-100
              .row.align-items-center.h-100
                .col-12
                  p.mb-0 El #[i Scrum Team] (SC) o equipo desarrollador del videojuego establecerá los ítems de la lista que se trabajarán en cada ciclo iterativo que en adelante se llamará #[i Sprint]; por lo tanto, cada #[i Sprint] es el tiempo de duración de cada ciclo de tareas que puede ser de 1 a 4 semanas, dependiendo del grado de complejidad de los ítems.
        .row.mb-4
          .col-lg-2.bg-c3
            .p-4
              figure
                img(src='@/assets/curso/tema1/img8.svg', style="width:90px").m-auto
          .col-lg-10.bg-c4
            .p-4.h-100
              .row.align-items-center.h-100
                .col-12
                  p.mb-0 Antes de comenzar cada #[i Sprint], el Scrum Team revisa la lista de ítems a desarrollar, selecciona los ítems del #[i Sprint] definiendo su objetivo y cada persona del equipo asume una responsabilidad sobre los componentes de cada ítem que se compromete a desarrollar, colocando estos elementos en una nueva lista llamada #[i Sprint backlog].
    .row.bg-c5.mb-5(data-aos="fade-dow")
      .col-12
        .px-5
          .row
            .col-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img10.svg', style="width:450px").m-auto
            .col-lg-7.mb-4.mb-lg-0
              p.mt-4.mt-lg-2 Cuando se desarrolla un proyecto de un videojuego, no necesariamente se hace una entrega después de terminar un #[i Sprint]; puesto que pueden necesitarse varios #[i Sprints] para lograr terminar una funcionalidad o mecánica del juego, de manera que tenga sentido para el jugador que lo va a probar. 
              p Cada vez que se realiza una entrega se pueden determinar los #[i bugs] o errores que puede arrojar el producto cuando sea comprobado por el cliente, lo cual garantiza que antes de que esté 100% terminado debe contener el mínimo de fallos.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img3.png', style="width:450px").m-auto
    p.mb-5(data-aos="fade-right") En el siguiente gráfico se observa el ciclo completo de un #[i Sprint] en la metodología SCRUM:
    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img11.svg')
      .tarjeta.color-acento-contenido.p-3(x="1%" y="20%" numero="1")
        .titulo-sexto.color-primario.mb-2
          h3.mb-0 #[i Product Owner]
        p.mb-0 Se responsabiliza de elaborar con el cliente la lista de características o requisitos principales que ha de tener el videojuego o #[i Product Backlog].
      .tarjeta.color-acento-contenido.p-3(x="14%" y="50%" numero="2")
        .titulo-sexto.color-primario.mb-2
          h3.mb-0 #[i Development Team]
        p.mb-0 El equipo desarrollador del producto, observando la lista que determina los items a ejecutar por cada #[i Sprint], comprometiéndose cada miembro con tareas específicas por desarrollar, lo que genera una nueva lista o #[i Sprint Backlog].
      .tarjeta.color-acento-contenido.p-3(x="10%" y="80%" numero="3")
        .titulo-sexto.color-primario.mb-2
          h3.mb-0 #[i Scrum Master]
        p.mb-0 Se asegura de que haya claridad sobre los objetivos y el alcance del producto a desarrollar e igualmente elimina cualquier impedimento para maximizar la productividad.
      .tarjeta.color-acento-contenido.p-3(x="27%" y="30%" numero="4")
        .titulo-sexto.color-primario.mb-2
          h3.mb-0 #[i Product Owner]
        p.mb-0 Se responsabiliza de elaborar con el cliente la lista de características o requisitos principales que ha de tener el videojuego o #[i Product Backlog].
      .tarjeta.color-acento-contenido.p-3(x="50%" y="50%" numero="5")
        .titulo-sexto.color-primario.mb-2
          h3.mb-0 #[i Sprint Planning Meeting]
        p.mb-0 El equipo reunido realiza la planeación del #[i Sprint] determinando el tiempo que durará de acuerdo con la lista del #[i Sprint Backlog].
      .tarjeta.color-acento-contenido.p-3(x="47%" y="10%" numero="6")
        .titulo-sexto.color-primario.mb-2
          h3.mb-0 #[i Daily Scrum]
        p.mb-0 Se realiza una reunión diariamente para asegurarse de que el proceso se está llevando a cabo satisfactoriamente.
      .tarjeta.color-acento-contenido.p-3(x="83%" y="20%" numero="7")
        .titulo-sexto.color-primario.mb-2
          h3.mb-0 #[i Sprint review meeting]
        p.mb-0 Se revisa el objetivo y el alcance del #[i Sprint] donde se verifica que las tareas que se están desarrollando, están dando cumplimiento a los ítems del #[i Product Backlog].
      .tarjeta.color-acento-contenido.p-3(x="90%" y="50%" numero="8")
        .titulo-sexto.color-primario.mb-2
          h3.mb-0 #[i Sprint Retrospective]
        p.mb-0 Cada día se realiza una retrospectiva del trabajo realizado para identificar los puntos clave en los que se puede mejorar la productividad.
      .tarjeta.color-acento-contenido.p-3(x="92%" y="81%" numero="9")
        .titulo-sexto.color-primario.mb-2
          h3.mb-0 #[i Software Increment]
        p.mb-0 Al finalizar el #[i Sprint] se obtiene una parte que incrementa las características definidas para el producto final.
    .row
      .col-12.bg-c6
        .row.justify-content-center
          .col-lg-6.mb-4
            h3.text-center.mt-5.txt-c1(data-aos="fade-right") Para la elaboración de los #[i Product blacklog] y los #[i Sprint blacklog] se pueden utilizar diferentes maneras
          .col-lg-10.mb-4(data-aos="fade-down")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Se puede diseñar un formato para elaborar el #[i Product backlog], el cual debe indicar claramente la prioridad y la descripción del ítem que debe desarrollar el #[i Scrum Team], observar  el ejemplo de la tabla a continuación:
          .col-lg-8.mb-5(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Tabla 1]. Ejemplo #[i Product Backlog]
            .tabla-b.color-acento-contenido.mb-5
              .tabla-b__header
                h4.mb-0.text-white Nombre del videojuego: La isla de los tesoros escondidos
              table
                tr(style="background-color: #D6D0FB")
                  th(style="width: 20%").text-center Prioridad del ítem
                  th.text-center Descripción
                tr(style="background-color: #FFF")
                  th.text-center 1
                  td Interfaz principal donde se visualice la isla y los activos que la componen, colocación de los tesoros en el nivel más bajo para que no se vean.
                tr(style="background-color: #F6F6F6")
                  th.text-center 2
                  td Diseño del personaje principal que buscará los tesoros escondidos. Crear animaciones con acciones de correr, saltar, mirar mapa, caer, caminar.
                tr(style="background-color: #FFF")
                  th.text-center 3
                  td Mapa de navegación que es consultado por el personaje para ubicarse en la isla.
                tr(style="background-color: #F6F6F6")
                  th.text-center 4
                  td Efecto del día y de la noche.
                tr(style="background-color: #FFF")
                  th.text-center 5
                  td Diseño de animales feroces que atacan al personaje principal, movimientos y funciones de ataque.
                tr(style="background-color: #F6F6F6")
                  th.text-center 6
                  td Diseño del primer tesoro, caja contenedora, elementos brillantes.
                tr(style="background-color: #FFF")
                  th.text-center 7
                  td Recompensa de 300 monedas por encontrar el primero de 5 tesoros.
                tr(style="background-color: #F6F6F6")
                  th.text-center 8
                  td Mundo 2: otra perspectiva de la isla pasa al siguiente nivel después de encontrar el primer tesoro.
            .row
              .col-12.bg-c7
                .px-4.pt-4
                  .row.align-items-center
                    .col-lg-9.mb-4.mb-lg-0
                      p.mb-0 La lista puede contener muchos ítems  de acuerdo con la magnitud del proyecto a desarrollar y, para una elaboración detallada se debe consultar el documento de diseño del juego, ya que es allí donde se encuentra la lógica de la historia y todos los detalles de los elementos y mecánicas que la componen.
                    .col-lg-3
                      figure
                        img(src='@/assets/curso/tema1/img4.png', style="width:240px").m-auto
          .col-lg-10.mb-4(data-aos="fade-down")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span b
                | También se puede diseñar el formato del #[b #[i Sprint Backlog]] con el cual el equipo de desarrollo determinará las tareas a ejecutar en cada Sprint, como se observa en la siguiente tabla:
          .col-lg-8.mb-5(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Tabla 2]. #[i Sprint Backlog]
            .tabla-b.color-acento-contenido.mb-5
              table
                tr
                  th.text-center(rowspan="4" style="background-color: #8979F3").text-white Objetivo Sprint #1
                  th.text-center(rowspan="4" colspan="3" style="background-color: #8979F3").text-white Realizar las funciones del mundo 1
                  th(colspan="2" style="background-color: #8979F3").text-white Fecha inicio del Sprint
                  td(style="background-color: #FFFFFF").text-center dd/mm/aaaa
                tr
                  th(colspan="2" style="background-color: #8979F3").text-white Fecha final del Sprint
                  td(style="background-color: #FFFFFF").text-center dd/mm/aaaa
                tr
                  th(colspan="2" style="background-color: #8979F3").text-white Nº de días del Sprint
                  td(style="background-color: #FFFFFF").text-center 30
                tr
                  th(colspan="2" style="background-color: #8979F3").text-white Nº horas de trabajo x día
                  td(style="background-color: #FFFFFF").text-center 8
                tr(style="background-color: #D6D0FB")
                  th(colspan="2").text-center Ítem del Product Backlog
                  th.text-center Prioridad en el Product Backlog
                  th.text-center Horas estimadas totales
                  th.text-center Horas de trabajo/día
                  th.text-center Responsable
                  th.text-center Estado (sin iniciar, progreso, terminado)
                tr(style="background-color: #EDEBFE")
                  th(colspan="2") Interfaz principal
                  th(colspan="7") 1
                tr(style="background-color: #FFFFFF")
                  td.text-center Tarea
                  td.text-center Estructura de contenedores
                  td.text-center
                  td.text-center 3
                  td.text-center 3
                  td.text-center XXXXXXXXXX
                  td.text-center T
                tr(style="background-color: #FFFFFF")
                  td.text-center Tarea
                  td.text-center Selección de activos
                  td.text-center
                  td.text-center 2
                  td.text-center 2
                  td.text-center HHHHHHHHHH
                  td.text-center T
                tr(style="background-color: #FFFFFF")
                  td.text-center Tarea
                  td.text-center Integración de activos
                  td.text-center
                  td.text-center 5
                  td.text-center 3
                  td.text-center VVVVVVVV
                  td.text-center P
                tr(style="background-color: #FFFFFF")
                  td.text-center Tarea
                  td.text-center Configurar nivel de componentes
                  td.text-center
                  td.text-center 4
                  td.text-center 0
                  td.text-center GGGGGGGG
                  td.text-center S
                tr(style="background-color: #EDEBFE")
                  th(colspan="2") Personaje principal
                  th(colspan="7") 2
                tr(style="background-color: #FFFFFF")
                  td.text-center Tarea
                  td.text-center Seleccionar personaje
                  td.text-center
                  td.text-center 3
                  td.text-center 2
                  td.text-center KKKKKKKKK
                  td.text-center P
                tr(style="background-color: #FFFFFF")
                  td.text-center Tarea
                  td.text-center Crear 6 animaciones
                  td.text-center
                  td.text-center 30
                  td.text-center 8
                  td.text-center LLLLLLLL
                  td.text-center P
            .row
              .col-lg-6.mb-4.mb-lg-0
                p El #[i Sprint Backlog] está compuesto por tareas que son medidas en horas, teniendo en cuenta las disciplinas de las personas comprometidas en cada tarea y el número de personas con las que el equipo cuenta para llevar a cabo el #[i Sprint].
                p Por ejemplo, si se deben crear 6 animaciones para el juego y solo se cuenta con una persona que se demora 8 horas por día, quiere decir que tardará más de 4 semanas para su elaboración, sobrepasando la duración del #[i Sprint]; lo que quiere decir que esta tarea se debe dividir en subtareas que harán parte de otros Sprint o en su defecto, contactar otro especialista para repartir el trabajo.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/img5.png', style="width:350px").m-auto
          .col-lg-10.mb-4(data-aos="fade-down")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span c
                | Se pueden utilizar herramientas digitales gratuitas como Jira Software para la elaboración de los #[i Product Backlog] y los #[i Sprint Backlog]. Las plantillas son proporcionadas por el programa:
            p En la siguiente figura se observa el #[b #[i Product Backlog]] del juego “La isla de los tesoros escondidos”.
          .col-lg-8.mb-5(data-aos="fade-right")
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Figura 2]. Plantilla Jira Software
            figure
              img(src='@/assets/curso/tema1/img6.png').m-auto
              figcaption.mt-3 Nota. #[i Backlog] del juego La isla de los tesoros escondidos.
          .col-lg-10.mb-4(data-aos="fade-down")
            p Las tareas que se han definido en el #[i Sprint Backlog] el programa lo llama Flujo de trabajo, cuyo objetivo es realizar las funciones del mundo 1. Los estados de las tareas se indican por colores en la convención que se encuentra en la parte superior de la figura:
          .col-lg-8.mb-5(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Figura 3]. Flujo de trabajo
            figure
              img(src='@/assets/curso/tema1/img7.png').m-auto
              figcaption.mt-3 Nota. Estado de las tareas del #[i Sprint].
          .col-lg-10.bg-c8.p-4.p-lg-0(data-aos="fade-right")
            .row.align-items-center
              .col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img13.svg', style="width:200px").m-auto
              .col-lg-9
                p.mb-0 Para profundizar en el tema consultar el material complementario especialmente los artículos #[b Artefactos #[i Scrum]: las 3 herramientas clave de gestión y El #[i backlog] de producto].
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
