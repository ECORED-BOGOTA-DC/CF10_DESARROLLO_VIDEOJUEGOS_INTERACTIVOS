export default {
  global: {
    componenteFormativo: 'Verificación y ajustes de funcionalidad',
    descripcionCurso:
      'El componente de formación presentado describe la forma de verificar el funcionamiento del prototipo digital elaborado, aplicando metodologías ágiles y herramientas propias del motor de Unity.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diseño del ciclo de iteraciones - <em>backlog</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prototipado digital con paquetes prefabricados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Métricas del videojuego a partir de impresiones de detalles de eventos (<em>debug.log</em>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Métricas de Unity',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Método <em>debug.log</em>',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Verificación del videojuego',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Verificación basada en el modelo SCRUM',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Verificación basada en el modelo SUM',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Verificación y ajustes en el entorno de desarrollo (consola, modo edición)',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diseño del ciclo de iteraciones - </em>backlog<em>',
      referencia:
        'Deloitte. (s.f). <em>Artefactos Scrum: las 3 herramientas clave de gestión</em>.',
      tipo: 'Página web',
      link:
        'https://www2.deloitte.com/es/es/pages/technology/articles/artefactos-scrum.html',
    },
    {
      tema: 'Prototipado digital con paquetes prefabricados',
      referencia:
        'Monteserín, P. (s.f). <em>Instanciar un objeto en Unity 3D</em>.',
      tipo: 'Blog',
      link: 'https://pablomonteserin.com/curso/unity-3d/instanciar/',
    },
    {
      tema: 'Prototipado digital con paquetes prefabricados',
      referencia: 'Unity. Documentation. (2016). <em>Prefabs</em>.',
      tipo: 'Manual web',
      link: 'https://docs.unity3d.com/es/530/Manual/Prefabs.html',
    },
    {
      tema:
        'Métricas del videojuego a partir de impresiones de detalles de eventos (<em>debug.log</em>)',
      referencia:
        'Unity. Documentation. (2020). <em>Métricas, segmentos y terminología de Analytics</em>.',
      tipo: 'Manual web',
      link:
        'https://docs.unity3d.com/es/2019.4/Manual/UnityAnalyticsTerminology.html',
    },
    {
      tema:
        'Métricas del videojuego a partir de impresiones de detalles de eventos (<em>debug.log</em>)',
      referencia: 'Unity. Documentation. (2021). <em>Depurar</em>.',
      tipo: 'Manual web',
      link: 'https://docs.unity3d.com/ScriptReference/Debug.html',
    },
    {
      tema: 'Verificación basada en el modelo SCRUM',
      referencia: 'Trigas, M. (s.f). <em>Metodología Scrum</em>.',
      tipo: 'PDF',
      link:
        'http://openaccess.uoc.edu/webapps/o2/bitstream/10609/17885/1/mtrigasTFC0612memoria.pdf',
    },
    {
      tema: 'Verificación basada en el modelo SUM',
      referencia: 'SUM. (s.f). <em>SUM para desarrollo de videojuegos</em>.',
      tipo: 'Página web',
      link: 'http://www.gemserk.com/sum/',
    },
    {
      tema:
        'Verificación y ajustes en entorno de desarrollo (consola, modo edición)',
      referencia:
        'Unity Technologies. (2021). <em>Prueba el código de tu juego con Unity Test Framework</em>.',
      tipo: 'Manual web',
      link:
        'https://unity.com/es/how-to/unity-test-framework-video-game-development',
    },
  ],
  glosario: [
    {
      termino: '<em>Backlog</em>',
      significado:
        'Listado del trabajo pendiente por realizar y ordenado jerárquicamente por prioridad (García, 2019).',
    },
    {
      termino: '<em>Debug.log</em>',
      significado:
        'Método que facilita la depuración mientras se está desarrollando el juego (Unity Documentation, 2021).',
    },
    {
      termino: 'Métricas',
      significado:
        'Mecanismos para evaluar e identificar la jugabilidad de un videojuego para detectar si es o no jugable (Gonzáles & Gutiérrez, s.f).',
    },
    {
      termino: 'SCRUM',
      significado:
        'Marco de trabajo que sirve para ayudar a generar valor en la solución de problemas complejos a las personas, equipos de trabajo y organizaciones (Schwaber & Sutherland, 2020).',
    },
    {
      termino: 'SUM',
      significado:
        'Metodología ágil utilizada para el desarrollo de videojuegos de calidad en menor tiempo y a menor costo, con resultados fácilmente predecibles (Acerenza, et al, 2009).',
    },
    {
      termino: 'Verificación',
      significado:
        'Proceso de análisis y pruebas en cada fase del desarrollo del software que consiste en revisión de requisitos, diseño, líneas de código y aplicación de pruebas (Hernández & Pérez, 2017).',
    },
  ],
  referencias: [
    {
      referencia:
        'Acerenza, N. Et al. (2009). <em>Una metodología para desarrollo de videojuegos</em>. ',
      link:
        'https://www.fing.edu.uy/sites/default/files/biblio/22811/asse_2009_16.pdf',
    },
    {
      referencia: 'García, R. (2019). <em>¿Qué es el Backlog?</em> ',
      link: 'https://muyagile.com/que-es-el-backlog/',
    },
    {
      referencia:
        'Gonzáles, J. & Gutiérrez, F. (s.f.). <em>Jugabilidad como medida de calidad en el desarrollo de videojuegos</em>. ',
      link: 'http://ceur-ws.org/Vol-1196/cosecivi14_submission_23.pdf',
    },
    {
      referencia:
        'Hernández, A. & Pérez, K. (2017). <em>Criterios para verificar y validar mecanismos en el desarrollo de videojuegos</em>.',
      link: 'https://zenodo.org/record/2617300/files/n12a1.pdf',
    },
    {
      referencia:
        'Schwaber, K. & Stherland, J. (2020). <em>La guía de Scrum</em>. ',
      link:
        'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-Latin-South-American.pdf',
    },
    {
      referencia: 'Unity Documentation. (2021). <em>Depurar</em>. ',
      link: 'https://docs.unity3d.com/ScriptReference/Debug.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdron',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Olga Lucía Mogollón Carvajal',
          cargo: 'Experta temática',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico Ecosistema RED',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
