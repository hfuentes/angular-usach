import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  programContent = {
    descripcion: {
      content: 'Descripción: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.'
    },
    objetivos: {
      content: 'Objetivos: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    'dirigido-a': {
      content: 'Dirigido a: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including of Lorem Ipsum.'
    },
    plan: {
      content: 'Plan: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software Aldus PageMaker including versions of Lorem Ipsum.'
    },
    acreditacion: {
      content: 'Acreditacion: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.'
    },
    investigacion: {
      content: 'Investigacion: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
    }
  };

  admissionContent = {
    fechas: {
      content: 'Fechas: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including of Lorem Ipsum.'
    },
    requisitos: {
      content: 'Requisitos: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software Aldus PageMaker including versions of Lorem Ipsum.'
    },
    becas: {
      content: 'Becas: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus including versions of Lorem Ipsum.'
    },
    postula: {
      content: 'Postula: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
    }
  };

  newsContent = [{
    image: 'https://www.usach.cl/sites/default/files/field/noticia_image/Foto%20Nota%20Principal%20Efusach%20%28propuesta%202%29.jpg',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
  }, {
    image: 'https://www.usach.cl/sites/default/files/styles/actividad_portada3/public/field/noticia_image/Foto%20Nota%20Principal%20CTEO%20%28archivo%29_0.jpg?itok=1VW8FqVK',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
  }, {
    image: 'https://www.usach.cl/sites/default/files/field/noticia_image/Foto%20Nota%20Principal%20Efusach%20%28propuesta%202%29.jpg',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
  }, {
    image: 'https://www.usach.cl/sites/default/files/styles/actividad_portada3/public/field/noticia_image/Foto%20Nota%20Principal%20CTEO%20%28archivo%29_0.jpg?itok=1VW8FqVK',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
  }, {
    image: 'https://www.usach.cl/sites/default/files/field/noticia_image/Foto%20Nota%20Principal%20Efusach%20%28propuesta%202%29.jpg',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
  }, {
    image: 'https://www.usach.cl/sites/default/files/styles/actividad_portada3/public/field/noticia_image/Foto%20Nota%20Principal%20CTEO%20%28archivo%29_0.jpg?itok=1VW8FqVK',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
  }, {
    image: 'https://www.usach.cl/sites/default/files/field/noticia_image/Foto%20Nota%20Principal%20Efusach%20%28propuesta%202%29.jpg',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
  }, {
    image: 'https://www.usach.cl/sites/default/files/styles/actividad_portada3/public/field/noticia_image/Foto%20Nota%20Principal%20CTEO%20%28archivo%29_0.jpg?itok=1VW8FqVK',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker versions of Lorem Ipsum.'
  }];

  studentsContent = {
    graduates: [
      { name: 'Guadalupe Vinegra Guernica', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Marjorie Cerrudemos Siles', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Romina Aguiar Somalo', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Aitor Barria Jaraba', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Melissa Potes Arismendi', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Aloida Bueras Frago', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Norminanda Uncal Quesada', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Aguilda Loro Tramarria', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Falem Zabarte Luey', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Lucrea Heban Vela', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Yulma Terrilla Moneo', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Edson Espriella Galarza', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Romano Gabilondo Labastida', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Katary Ibio Segurola', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Faustino Charri Sanez', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Ryan Lagunilla Aranzabe', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Osiris Alaejos Guijano', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Aixa Fueyo Izmendi', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Nazario Usarralde Lino', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Alec Valero Baroja', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Magdalena Ogero Afonte', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Falem Barrios Reinosa', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Oriol Alcedo Pedroza', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Yaneling Garzona Cavadilla', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Ximena Guceño Fuentecilla', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Aday Lamadrid Churruca', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Aminta Carces Ladrada', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Isabel Ramallal Malvido', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Nazly Zuya Pozo', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Basilisa Espriella Vinambres', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Lennin Lainez Ontova', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Yans Calviño Rojas', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Dalia Campomanes Vaz', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Lourdes Cedofeita Charri', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Emely Calleja Barragan', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Debbie Gonzalo Leyarte', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Gumersindo Fierro Villarreal', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Herlinda Lombas Berlanga', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Eileen Zadaya Sesse', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Elsa Naredo Bernalda', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Narcelith Lagunez Alcocer', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Domnina Peñarroja Peñin', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Alejo Perdiz Arandia', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Erika Verdeja Cifuentes', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Lecely Portal Romillo', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Citlalli Igarza Bernedo', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Elidia Torga Velo', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Marianela Horihuela Gallegos', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Midyaliz Alzaga Villaño', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Citlalli Forcen Soto', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Paulina Rosell Balaunde', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Leo Ruescas Garonaga', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Pompeyo Vuelvetoros Borines', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Mariano Casar Rebenga', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Roder Porras Cotero', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Desideria Cabrales Aquejano', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Romyna Baranda Anduaga', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Zacarías Elorza Rodrigo', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Ataulfo Mones Tobia', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Deyanira Arruta Vivar', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Rainier Costeras Vada', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Isael Pacios Estevez', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Janina Torio Movellan', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Mariela Padriña Altamirano', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Celedonio Bocos Cadaval', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Dafne Garibay Aguilera', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Marciano Hurones Brasa', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Eva Alcedo Moyua', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Michel Barona Celis', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Lecely Diestro Coyences', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Amando Vinambres Susvilla', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Alondra Sedan Zabarte', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Jair Berganza Ochandio', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Sabel Ochandiano Tendiero', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Ligia Bascones Araña', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Jazmin Tavera Jerez', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Bartolomé Gorbea Barriola', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Doménica Raireta Pato', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Naela Moraina Abaurre', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Cristóbal Basanta Antequera', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Darina Buergo Elizondo', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Adriel Cachero Valseca', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Ramón Mendana Daroca', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Oscar Gurbista Suarbol', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Yara Partarroyo Araico', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Mayari Seco Banda', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Raúl Artigue Coello', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Ayoze Queipo Oña', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Xiomara Carriles Tocalanza', year: Math.floor(Math.random() * 20) + 2002 },
      { name: 'Electra Endaya Guia', year: Math.floor(Math.random() * 20) + 2002 },
    ],
    thesis: [
      {
        title: 'Mejoramiento de los aprendizajes matemáticos a través de tutorías',
        author: 'Sandra Araneda Fergadiotti', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Incorporación de las tecnologías informática y comunicación en educación parvularia. Una propuesta modular',
        author: 'Marcela Rodríguez Lama', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Optimización de la docencia en el área de dietoterapia del adulto en la carrera de nutrición y dietética. Una propuesta didáctica',
        author: 'Paula Cavieres Zepeda', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Optimización de la docencia en la cátedra de derecho laboral en el centro de formación técnica e instituto profesional diego portales de concepción',
        author: 'Fresia Cisterna Cabrera', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Sistema de rúbricas para la evaluación de habilidades y actitudes en la enseñanza del diseño',
        author: 'Williams Contreras Higuera', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Diseño de estrategia evaluativa del feedback en el escuchar activo para la formación de trabajadores sociales con un enfoque inclusivo',
        author: 'Elena Escobar Mejías', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Incorporación del humor en el proceso enseñanza-aprendizaje de la nutrición y dietética',
        author: 'José Luis Pino Villalón', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Modelo de evaluación por competencias para las asignaturas profesionales de la carrera de kinesiología',
        author: 'Ignacio Quinteros Muñoz', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Evaluación por competencias en el área de comunicación de la carrera de periodismo en la universidad santo tomás',
        author: 'Kurt Schweitzer Ocampo', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Innovación en el aula en el área de las asignaturas de formación económica',
        author: 'Miguel Alarcón Vera', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Propuesta para optimizar la docencia en el área de derecho procesal penal: el desarrollo de competencias en el juicio oral',
        author: 'Rodrigo Pavez González', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Impacto de la formación lógica matemática en los aprendizajes de las ciencias de la computación en los estudiantes del Instituto profesional Virginio Gómez – sede Concepción',
        author: 'Héctor Salazar Robinson', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Prácticas docentes en la evaluación de las actividades de taller en la carrera de diseño gráfico de la Universidad del Bío-Bío: diagnóstico y propuesta para la evaluación de habilidades y actitudes',
        author: 'Soledad Quezada Cáceres', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Alimentación saludable en el nivel de educación parvularia: diagnóstico y propuesta didáctica desde un estudio de caso',
        author: 'Monserrat Morales González', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Las web 2.0 como propuesta de apoyo didáctico a las práxis pedagógica del taller de diseño contextualizado iv de la escuela de diseño gráfico de la Universidad del Bío-Bío',
        author: 'Paula Riffo Fraga', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Concepciones didácticas y práxis docente en los procesos de planificación y desarrollo de la enseñanza. Un estudio de casos en un colegio particular subvencionado de chile',
        author: 'Mariana Tapia Cáceres', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Estrategias de aprendizaje cognitivos y desarrollo de las capacidades metacognitivas en estudiantes de la carrera de enfermería de la Universidad del Bío-Bío.',
        author: 'Corinne Mangeon', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Características de la praxis de la evaluación docente y proyecto de innovación pedagógica para el área de laboratorio de técnicas básicas de la carrera técnico de nivel superior en enfermería',
        author: 'Sandra Henríquez Figueroa', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Praxis evaluativa de los docentes supervisores de internado profesional de la carrera de Fonoaudiología de la Universidad del Bío-Bío',
        author: 'Virginia García Flores', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Praxis evaluativa de los docentes de asignaturas profesionales de la carrera de nutrición y dietética de la Universidad Tecnológica de Chile Inacap sede Concepción - Talcahuano',
        author: 'Rocío Mardones', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Descripción de la práxis evaluativa en evaluaciones orales de los docentes de la carrera de pedagogía en inglés del Instituto Profesional Valle Central sede Los Angeles',
        author: 'Mireya Molina Barriga', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Validación e implementación del mini-cex en la evaluación de prácticas clínicas de la asignatura de medicina interna en una escuela de medicina de una universidad chilena',
        author: 'Juan Vallet Merino', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Estudio comparativo de rendimiento académico durante la formación inicial docente y propuesta para la optimización de la formación profesional de la educación en estudiantes de pedagogía en educación general básica de la Universidad del Bío-Bío',
        author: 'Christian Loyola Salas', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Propuesta de diseño asignatura de formación integral prevención de riesgos para la carrera de Educación Parvularia',
        author: 'Viviana López', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Elementos de diseño y gestión en la construcción del proyecto educativo institucional. Investigación diagnostica y propuesta de innovación para optimizar la formación profesional docente',
        author: 'Pablo Jara', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Formación profesional y demanda laboral en la carrera de Nutrición y Dietética. Propuesta de malla curricular y plan de estudios',
        author: 'Natalia Muñoz Palma', year: Math.floor(Math.random() * 20) + 2002
      },
      {
        title: 'Propuesta de instrumento de evaluacion de practica industrial para alumnos de Ingenieria Civil en Industrias de la Madera',
        author: 'Claudia Pacheco', year: Math.floor(Math.random() * 20) + 2002
      },
    ]
  };

  academicsContent = [{
    id: 1,
    name: 'Dr. César Huiliñir C.',
    position: 'Director del Programa',
    email: 'cesar.huilinir@usach.cl',
    image: 'https://mma.ingenieria.usach.cl/sites/magister-medio-ambiente/files/styles/personas-normal/public/cesar_huilinir.jpg',
    degrees: [{
      title: 'Ingeniero Civil Químico',
      content: 'Departamento de Ingeniería Química. Universidad de Santiago de Chile, (1992). Tesis: "Modelación dinámica de secadores rotatorios tubulares"',
    }, {
      title: 'Ph.D en Ingeniería Ambiental',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005). Thesis: "Health Risk Assessment Posed by the Mobile Source Air Toxics on an Urban to Regional Area."'
    }, {
      title: 'Minor in Statistics',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005).'
    }],
    papers: [
      { content: 'Fidel Vallejo, Luis A. Díaz-Robles, Francisco Cubillos, Ricardo Vega, Jaime Gómez, Ernesto Pino-Cortés, Bastián Bascuñan, Paulina Carcamo, Francisca Parra, Ana Urzua, Samuel Carrasco; “Performance Evaluation of Biomass Blends with Additives Treated by Hydrothermal Carbonization”; Chemical Engineering Transactions, In Press, 2019.' },
      { content: 'Alvaro Paul, Daniel Ortega-Videla, Diego Lucas Ocampo Bravo, Ernesto Pino-Cortes, Jaime Gomez, Felipe Scott, Patricio Moreno-Casas, Luis A. Diaz-Robles, Alberto Vergara; “Effect of Pellet Structure and Pelletization Temperature on the Performance of HTC Pellets.”, Fuel Processing Technology, Submitted 2019.' },
      { content: 'Carrasco Samuel; Gómez, Jaime; Vallejo, Fidel; Díaz-Robles, Luis A.; Pino-Cortes, Ernesto; Campos, Valeria; Cubillos, Francisco; Pelz, Stefan K; Paczkowski, Sebastian; Silva, Javier; Cereceda-Balic, Francisco; Vergara-Fernández, Alberto; Lapuerta, Magin; Pazo, Amparo; Monedero, Esperanza; Fu, Joshua S; Hoekman, S. Kent; and Figueroa, Juan; “Experimental Study on Hydrothermal Carbonization of Lignocellulosic Biomass with Magnesium Chloride”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Ernesto Pino-Cortes, Luis A. Díaz-Robles, Francisco Cubillos, Francisco Cereceda, Joshua Fu, Samuel Carrasco. "Black and organic carbon fraction of particulate matter exposed" ; Science of the Total Environment; Submitted, 2019' },
      { content: 'Jaime Gómez, Giancarlo Corsi, Ernesto Pino-Cortés , Luis A. Díaz-Robles, Valeria Campos, Francisco Cubillos, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Amparo Pozo , Esperanza Monedero; “Modeling and simulation of a continuous hydrothermal carbonization process”; Journal of Chemical Engineering Communications; Submitted, 2019.' },
      { content: 'Constanza Corvalán, Luis A. Díaz-Robles*, Francisco Cubillos, Fidel Vallejo, Jaime Gómez, Ernesto Pino-Cortés, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Francisco Cereceda-Balic, Amparo Pozo, Esperanza Monedero, “Life cycle analysis of hydrothermal carbonization of urban organic solid waste and comparison with gasification process”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Victoria Knappe, Sebastian Paczkowski,, Julian Tejada, Luis Alonso Diaz Robles, Alain Gonzales, Stefan Pelz, “Low temperature microwave assisted hydrothermal carbonization (MAHC) reduces combustion emission precursors in short rotation coppice willow wood.”, Journal of Analytical and Applied Pyrolysis, Volume 134, September 2018, Pages 162-166' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Francisco Cereceda-Balic; Mario Toledo; Victor Vidal; Fabián Guerrero; Julio Acuña; Luis A. Díaz-Robles; Magin Lapuerta, “Emission Factors for PM2.5, CO, CO2, NOx, SO2 and particle size distributions from the combustion of wood species using a new controlled combustion chamber 3CE”, Science of the Total Environment, Volumes 584–585, 15 April 2017, Pages 901–910, (ISI, Q1).' }
    ],
    proyects: [
      { content: 'Proyecto FONDEF I+D ID18I10182 (2018-2020). Investigación y optimización de la producción de pellets de alta densidad energética a través de la HTC de diferentes mezclas de lodos orgánicos industriales y residuos sólidos orgánicos urbanos, y su posterior gasificación para generar energía calórica. (Director del Proyecto).' },
      { content: 'Proyecto FONDEF I+D ID18I10152 (2018-2020). Revalorización Energética de Residuos Sólidos de la Industria de la Celulosa Para la Fabricación de Pellets HTC. (Co-Investigador).' },
      { content: 'Proyecto FNDR-CONAMA (2007-2008) Araucanía, Universidad Católica de Temuco, “Laboratorio para la Medición de Emisiones de Calefactores a Leña.” UCT-FNDR 30040008-0. (Director del Proyecto).' },
      { content: 'Air Quality Initiative for the Great Smoky Mountains National Park. U.S. Environmental Protection Agency (EPA), University of Tennessee, (2002-2004).' },
      { content: 'Proyecto DIUCT 2006-2-03, (2007-2009), Dirección de Investigación, Universidad Católica de Temuco, “Estudio de la dispersión, química, destino y transporte de contaminantes en los recursos aire y suelo basado en arquitectura Cluster Beowulf de alto rendimiento como herramienta para resolver problemas complejos de cálculo científico. (Director del Proyecto).' },
      { content: 'Proyecto DIUCT (2007-2008), Dirección de Investigación, Universidad Católica de Temuco, “Estudio comparativo de la producción de etanol celulósico a partir de híbridos de álamos y eucalipto.” (Co-Investigador)' },
    ]
  }, {
    id: 2,
    name: 'Dr. Luis Díaz-Robles',
    position: 'Integrante Núcleo Académico',
    email: 'alonso.diaz.r@usach.cl',
    image: 'https://mma.ingenieria.usach.cl/sites/magister-medio-ambiente/files/styles/personas-normal/public/luisdiaz.jpg',
    degrees: [{
      title: 'Ingeniero Civil Químico',
      content: 'Departamento de Ingeniería Química. Universidad de Santiago de Chile, (1992). Tesis: "Modelación dinámica de secadores rotatorios tubulares"',
    }, {
      title: 'Ph.D en Ingeniería Ambiental',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005). Thesis: "Health Risk Assessment Posed by the Mobile Source Air Toxics on an Urban to Regional Area."'
    }, {
      title: 'Minor in Statistics',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005).'
    }],
    papers: [
      { content: 'Fidel Vallejo, Luis A. Díaz-Robles, Francisco Cubillos, Ricardo Vega, Jaime Gómez, Ernesto Pino-Cortés, Bastián Bascuñan, Paulina Carcamo, Francisca Parra, Ana Urzua, Samuel Carrasco; “Performance Evaluation of Biomass Blends with Additives Treated by Hydrothermal Carbonization”; Chemical Engineering Transactions, In Press, 2019.' },
      { content: 'Alvaro Paul, Daniel Ortega-Videla, Diego Lucas Ocampo Bravo, Ernesto Pino-Cortes, Jaime Gomez, Felipe Scott, Patricio Moreno-Casas, Luis A. Diaz-Robles, Alberto Vergara; “Effect of Pellet Structure and Pelletization Temperature on the Performance of HTC Pellets.”, Fuel Processing Technology, Submitted 2019.' },
      { content: 'Carrasco Samuel; Gómez, Jaime; Vallejo, Fidel; Díaz-Robles, Luis A.; Pino-Cortes, Ernesto; Campos, Valeria; Cubillos, Francisco; Pelz, Stefan K; Paczkowski, Sebastian; Silva, Javier; Cereceda-Balic, Francisco; Vergara-Fernández, Alberto; Lapuerta, Magin; Pazo, Amparo; Monedero, Esperanza; Fu, Joshua S; Hoekman, S. Kent; and Figueroa, Juan; “Experimental Study on Hydrothermal Carbonization of Lignocellulosic Biomass with Magnesium Chloride”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Ernesto Pino-Cortes, Luis A. Díaz-Robles, Francisco Cubillos, Francisco Cereceda, Joshua Fu, Samuel Carrasco. "Black and organic carbon fraction of particulate matter exposed" ; Science of the Total Environment; Submitted, 2019' },
      { content: 'Jaime Gómez, Giancarlo Corsi, Ernesto Pino-Cortés , Luis A. Díaz-Robles, Valeria Campos, Francisco Cubillos, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Amparo Pozo , Esperanza Monedero; “Modeling and simulation of a continuous hydrothermal carbonization process”; Journal of Chemical Engineering Communications; Submitted, 2019.' },
      { content: 'Constanza Corvalán, Luis A. Díaz-Robles*, Francisco Cubillos, Fidel Vallejo, Jaime Gómez, Ernesto Pino-Cortés, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Francisco Cereceda-Balic, Amparo Pozo, Esperanza Monedero, “Life cycle analysis of hydrothermal carbonization of urban organic solid waste and comparison with gasification process”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Victoria Knappe, Sebastian Paczkowski,, Julian Tejada, Luis Alonso Diaz Robles, Alain Gonzales, Stefan Pelz, “Low temperature microwave assisted hydrothermal carbonization (MAHC) reduces combustion emission precursors in short rotation coppice willow wood.”, Journal of Analytical and Applied Pyrolysis, Volume 134, September 2018, Pages 162-166' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Francisco Cereceda-Balic; Mario Toledo; Victor Vidal; Fabián Guerrero; Julio Acuña; Luis A. Díaz-Robles; Magin Lapuerta, “Emission Factors for PM2.5, CO, CO2, NOx, SO2 and particle size distributions from the combustion of wood species using a new controlled combustion chamber 3CE”, Science of the Total Environment, Volumes 584–585, 15 April 2017, Pages 901–910, (ISI, Q1).' }
    ],
    proyects: [
      { content: 'Proyecto FONDEF I+D ID18I10182 (2018-2020). Investigación y optimización de la producción de pellets de alta densidad energética a través de la HTC de diferentes mezclas de lodos orgánicos industriales y residuos sólidos orgánicos urbanos, y su posterior gasificación para generar energía calórica. (Director del Proyecto).' },
      { content: 'Proyecto FONDEF I+D ID18I10152 (2018-2020). Revalorización Energética de Residuos Sólidos de la Industria de la Celulosa Para la Fabricación de Pellets HTC. (Co-Investigador).' },
      { content: 'Proyecto FNDR-CONAMA (2007-2008) Araucanía, Universidad Católica de Temuco, “Laboratorio para la Medición de Emisiones de Calefactores a Leña.” UCT-FNDR 30040008-0. (Director del Proyecto).' },
      { content: 'Air Quality Initiative for the Great Smoky Mountains National Park. U.S. Environmental Protection Agency (EPA), University of Tennessee, (2002-2004).' },
      { content: 'Proyecto DIUCT 2006-2-03, (2007-2009), Dirección de Investigación, Universidad Católica de Temuco, “Estudio de la dispersión, química, destino y transporte de contaminantes en los recursos aire y suelo basado en arquitectura Cluster Beowulf de alto rendimiento como herramienta para resolver problemas complejos de cálculo científico. (Director del Proyecto).' },
      { content: 'Proyecto DIUCT (2007-2008), Dirección de Investigación, Universidad Católica de Temuco, “Estudio comparativo de la producción de etanol celulósico a partir de híbridos de álamos y eucalipto.” (Co-Investigador)' },
    ]
  }, {
    id: 3,
    name: 'Dra. Luisa Sepúlveda',
    position: 'Integrante Núcleo Académico',
    email: 'luisa.sepulveda@usach.cl',
    image: 'https://mma.ingenieria.usach.cl/sites/magister-medio-ambiente/files/styles/personas-normal/public/luisa_sepulveda.jpg',
    degrees: [{
      title: 'Ingeniero Civil Químico',
      content: 'Departamento de Ingeniería Química. Universidad de Santiago de Chile, (1992). Tesis: "Modelación dinámica de secadores rotatorios tubulares"',
    }, {
      title: 'Ph.D en Ingeniería Ambiental',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005). Thesis: "Health Risk Assessment Posed by the Mobile Source Air Toxics on an Urban to Regional Area."'
    }, {
      title: 'Minor in Statistics',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005).'
    }],
    papers: [
      { content: 'Fidel Vallejo, Luis A. Díaz-Robles, Francisco Cubillos, Ricardo Vega, Jaime Gómez, Ernesto Pino-Cortés, Bastián Bascuñan, Paulina Carcamo, Francisca Parra, Ana Urzua, Samuel Carrasco; “Performance Evaluation of Biomass Blends with Additives Treated by Hydrothermal Carbonization”; Chemical Engineering Transactions, In Press, 2019.' },
      { content: 'Alvaro Paul, Daniel Ortega-Videla, Diego Lucas Ocampo Bravo, Ernesto Pino-Cortes, Jaime Gomez, Felipe Scott, Patricio Moreno-Casas, Luis A. Diaz-Robles, Alberto Vergara; “Effect of Pellet Structure and Pelletization Temperature on the Performance of HTC Pellets.”, Fuel Processing Technology, Submitted 2019.' },
      { content: 'Carrasco Samuel; Gómez, Jaime; Vallejo, Fidel; Díaz-Robles, Luis A.; Pino-Cortes, Ernesto; Campos, Valeria; Cubillos, Francisco; Pelz, Stefan K; Paczkowski, Sebastian; Silva, Javier; Cereceda-Balic, Francisco; Vergara-Fernández, Alberto; Lapuerta, Magin; Pazo, Amparo; Monedero, Esperanza; Fu, Joshua S; Hoekman, S. Kent; and Figueroa, Juan; “Experimental Study on Hydrothermal Carbonization of Lignocellulosic Biomass with Magnesium Chloride”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Ernesto Pino-Cortes, Luis A. Díaz-Robles, Francisco Cubillos, Francisco Cereceda, Joshua Fu, Samuel Carrasco. "Black and organic carbon fraction of particulate matter exposed" ; Science of the Total Environment; Submitted, 2019' },
      { content: 'Jaime Gómez, Giancarlo Corsi, Ernesto Pino-Cortés , Luis A. Díaz-Robles, Valeria Campos, Francisco Cubillos, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Amparo Pozo , Esperanza Monedero; “Modeling and simulation of a continuous hydrothermal carbonization process”; Journal of Chemical Engineering Communications; Submitted, 2019.' },
      { content: 'Constanza Corvalán, Luis A. Díaz-Robles*, Francisco Cubillos, Fidel Vallejo, Jaime Gómez, Ernesto Pino-Cortés, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Francisco Cereceda-Balic, Amparo Pozo, Esperanza Monedero, “Life cycle analysis of hydrothermal carbonization of urban organic solid waste and comparison with gasification process”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Victoria Knappe, Sebastian Paczkowski,, Julian Tejada, Luis Alonso Diaz Robles, Alain Gonzales, Stefan Pelz, “Low temperature microwave assisted hydrothermal carbonization (MAHC) reduces combustion emission precursors in short rotation coppice willow wood.”, Journal of Analytical and Applied Pyrolysis, Volume 134, September 2018, Pages 162-166' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Francisco Cereceda-Balic; Mario Toledo; Victor Vidal; Fabián Guerrero; Julio Acuña; Luis A. Díaz-Robles; Magin Lapuerta, “Emission Factors for PM2.5, CO, CO2, NOx, SO2 and particle size distributions from the combustion of wood species using a new controlled combustion chamber 3CE”, Science of the Total Environment, Volumes 584–585, 15 April 2017, Pages 901–910, (ISI, Q1).' }
    ],
    proyects: [
      { content: 'Proyecto FONDEF I+D ID18I10182 (2018-2020). Investigación y optimización de la producción de pellets de alta densidad energética a través de la HTC de diferentes mezclas de lodos orgánicos industriales y residuos sólidos orgánicos urbanos, y su posterior gasificación para generar energía calórica. (Director del Proyecto).' },
      { content: 'Proyecto FONDEF I+D ID18I10152 (2018-2020). Revalorización Energética de Residuos Sólidos de la Industria de la Celulosa Para la Fabricación de Pellets HTC. (Co-Investigador).' },
      { content: 'Proyecto FNDR-CONAMA (2007-2008) Araucanía, Universidad Católica de Temuco, “Laboratorio para la Medición de Emisiones de Calefactores a Leña.” UCT-FNDR 30040008-0. (Director del Proyecto).' },
      { content: 'Air Quality Initiative for the Great Smoky Mountains National Park. U.S. Environmental Protection Agency (EPA), University of Tennessee, (2002-2004).' },
      { content: 'Proyecto DIUCT 2006-2-03, (2007-2009), Dirección de Investigación, Universidad Católica de Temuco, “Estudio de la dispersión, química, destino y transporte de contaminantes en los recursos aire y suelo basado en arquitectura Cluster Beowulf de alto rendimiento como herramienta para resolver problemas complejos de cálculo científico. (Director del Proyecto).' },
      { content: 'Proyecto DIUCT (2007-2008), Dirección de Investigación, Universidad Católica de Temuco, “Estudio comparativo de la producción de etanol celulósico a partir de híbridos de álamos y eucalipto.” (Co-Investigador)' },
    ]
  }, {
    id: 4,
    name: 'René Garrido',
    position: 'Integrante Núcleo Académico',
    email: 'rene.garridol@usach.cl',
    image: 'https://mma.ingenieria.usach.cl/sites/magister-medio-ambiente/files/styles/personas-normal/public/rene_garrido.jpg',
    degrees: [{
      title: 'Ingeniero Civil Químico',
      content: 'Departamento de Ingeniería Química. Universidad de Santiago de Chile, (1992). Tesis: "Modelación dinámica de secadores rotatorios tubulares"',
    }, {
      title: 'Ph.D en Ingeniería Ambiental',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005). Thesis: "Health Risk Assessment Posed by the Mobile Source Air Toxics on an Urban to Regional Area."'
    }, {
      title: 'Minor in Statistics',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005).'
    }],
    papers: [
      { content: 'Fidel Vallejo, Luis A. Díaz-Robles, Francisco Cubillos, Ricardo Vega, Jaime Gómez, Ernesto Pino-Cortés, Bastián Bascuñan, Paulina Carcamo, Francisca Parra, Ana Urzua, Samuel Carrasco; “Performance Evaluation of Biomass Blends with Additives Treated by Hydrothermal Carbonization”; Chemical Engineering Transactions, In Press, 2019.' },
      { content: 'Alvaro Paul, Daniel Ortega-Videla, Diego Lucas Ocampo Bravo, Ernesto Pino-Cortes, Jaime Gomez, Felipe Scott, Patricio Moreno-Casas, Luis A. Diaz-Robles, Alberto Vergara; “Effect of Pellet Structure and Pelletization Temperature on the Performance of HTC Pellets.”, Fuel Processing Technology, Submitted 2019.' },
      { content: 'Carrasco Samuel; Gómez, Jaime; Vallejo, Fidel; Díaz-Robles, Luis A.; Pino-Cortes, Ernesto; Campos, Valeria; Cubillos, Francisco; Pelz, Stefan K; Paczkowski, Sebastian; Silva, Javier; Cereceda-Balic, Francisco; Vergara-Fernández, Alberto; Lapuerta, Magin; Pazo, Amparo; Monedero, Esperanza; Fu, Joshua S; Hoekman, S. Kent; and Figueroa, Juan; “Experimental Study on Hydrothermal Carbonization of Lignocellulosic Biomass with Magnesium Chloride”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Ernesto Pino-Cortes, Luis A. Díaz-Robles, Francisco Cubillos, Francisco Cereceda, Joshua Fu, Samuel Carrasco. "Black and organic carbon fraction of particulate matter exposed" ; Science of the Total Environment; Submitted, 2019' },
      { content: 'Jaime Gómez, Giancarlo Corsi, Ernesto Pino-Cortés , Luis A. Díaz-Robles, Valeria Campos, Francisco Cubillos, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Amparo Pozo , Esperanza Monedero; “Modeling and simulation of a continuous hydrothermal carbonization process”; Journal of Chemical Engineering Communications; Submitted, 2019.' },
      { content: 'Constanza Corvalán, Luis A. Díaz-Robles*, Francisco Cubillos, Fidel Vallejo, Jaime Gómez, Ernesto Pino-Cortés, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Francisco Cereceda-Balic, Amparo Pozo, Esperanza Monedero, “Life cycle analysis of hydrothermal carbonization of urban organic solid waste and comparison with gasification process”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Victoria Knappe, Sebastian Paczkowski,, Julian Tejada, Luis Alonso Diaz Robles, Alain Gonzales, Stefan Pelz, “Low temperature microwave assisted hydrothermal carbonization (MAHC) reduces combustion emission precursors in short rotation coppice willow wood.”, Journal of Analytical and Applied Pyrolysis, Volume 134, September 2018, Pages 162-166' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Francisco Cereceda-Balic; Mario Toledo; Victor Vidal; Fabián Guerrero; Julio Acuña; Luis A. Díaz-Robles; Magin Lapuerta, “Emission Factors for PM2.5, CO, CO2, NOx, SO2 and particle size distributions from the combustion of wood species using a new controlled combustion chamber 3CE”, Science of the Total Environment, Volumes 584–585, 15 April 2017, Pages 901–910, (ISI, Q1).' }
    ],
    proyects: [
      { content: 'Proyecto FONDEF I+D ID18I10182 (2018-2020). Investigación y optimización de la producción de pellets de alta densidad energética a través de la HTC de diferentes mezclas de lodos orgánicos industriales y residuos sólidos orgánicos urbanos, y su posterior gasificación para generar energía calórica. (Director del Proyecto).' },
      { content: 'Proyecto FONDEF I+D ID18I10152 (2018-2020). Revalorización Energética de Residuos Sólidos de la Industria de la Celulosa Para la Fabricación de Pellets HTC. (Co-Investigador).' },
      { content: 'Proyecto FNDR-CONAMA (2007-2008) Araucanía, Universidad Católica de Temuco, “Laboratorio para la Medición de Emisiones de Calefactores a Leña.” UCT-FNDR 30040008-0. (Director del Proyecto).' },
      { content: 'Air Quality Initiative for the Great Smoky Mountains National Park. U.S. Environmental Protection Agency (EPA), University of Tennessee, (2002-2004).' },
      { content: 'Proyecto DIUCT 2006-2-03, (2007-2009), Dirección de Investigación, Universidad Católica de Temuco, “Estudio de la dispersión, química, destino y transporte de contaminantes en los recursos aire y suelo basado en arquitectura Cluster Beowulf de alto rendimiento como herramienta para resolver problemas complejos de cálculo científico. (Director del Proyecto).' },
      { content: 'Proyecto DIUCT (2007-2008), Dirección de Investigación, Universidad Católica de Temuco, “Estudio comparativo de la producción de etanol celulósico a partir de híbridos de álamos y eucalipto.” (Co-Investigador)' },
    ]
  }, {
    id: 5,
    name: 'Dr. Alejandro Reyes',
    position: 'Integrante Núcleo Académico',
    email: 'alejandro.reyes@usach.cl',
    image: 'https://mma.ingenieria.usach.cl/sites/magister-medio-ambiente/files/styles/personas-normal/public/alejandroreyes.jpg',
    degrees: [{
      title: 'Ingeniero Civil Químico',
      content: 'Departamento de Ingeniería Química. Universidad de Santiago de Chile, (1992). Tesis: "Modelación dinámica de secadores rotatorios tubulares"',
    }, {
      title: 'Ph.D en Ingeniería Ambiental',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005). Thesis: "Health Risk Assessment Posed by the Mobile Source Air Toxics on an Urban to Regional Area."'
    }, {
      title: 'Minor in Statistics',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005).'
    }],
    papers: [
      { content: 'Fidel Vallejo, Luis A. Díaz-Robles, Francisco Cubillos, Ricardo Vega, Jaime Gómez, Ernesto Pino-Cortés, Bastián Bascuñan, Paulina Carcamo, Francisca Parra, Ana Urzua, Samuel Carrasco; “Performance Evaluation of Biomass Blends with Additives Treated by Hydrothermal Carbonization”; Chemical Engineering Transactions, In Press, 2019.' },
      { content: 'Alvaro Paul, Daniel Ortega-Videla, Diego Lucas Ocampo Bravo, Ernesto Pino-Cortes, Jaime Gomez, Felipe Scott, Patricio Moreno-Casas, Luis A. Diaz-Robles, Alberto Vergara; “Effect of Pellet Structure and Pelletization Temperature on the Performance of HTC Pellets.”, Fuel Processing Technology, Submitted 2019.' },
      { content: 'Carrasco Samuel; Gómez, Jaime; Vallejo, Fidel; Díaz-Robles, Luis A.; Pino-Cortes, Ernesto; Campos, Valeria; Cubillos, Francisco; Pelz, Stefan K; Paczkowski, Sebastian; Silva, Javier; Cereceda-Balic, Francisco; Vergara-Fernández, Alberto; Lapuerta, Magin; Pazo, Amparo; Monedero, Esperanza; Fu, Joshua S; Hoekman, S. Kent; and Figueroa, Juan; “Experimental Study on Hydrothermal Carbonization of Lignocellulosic Biomass with Magnesium Chloride”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Ernesto Pino-Cortes, Luis A. Díaz-Robles, Francisco Cubillos, Francisco Cereceda, Joshua Fu, Samuel Carrasco. "Black and organic carbon fraction of particulate matter exposed" ; Science of the Total Environment; Submitted, 2019' },
      { content: 'Jaime Gómez, Giancarlo Corsi, Ernesto Pino-Cortés , Luis A. Díaz-Robles, Valeria Campos, Francisco Cubillos, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Amparo Pozo , Esperanza Monedero; “Modeling and simulation of a continuous hydrothermal carbonization process”; Journal of Chemical Engineering Communications; Submitted, 2019.' },
      { content: 'Constanza Corvalán, Luis A. Díaz-Robles*, Francisco Cubillos, Fidel Vallejo, Jaime Gómez, Ernesto Pino-Cortés, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Francisco Cereceda-Balic, Amparo Pozo, Esperanza Monedero, “Life cycle analysis of hydrothermal carbonization of urban organic solid waste and comparison with gasification process”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Victoria Knappe, Sebastian Paczkowski,, Julian Tejada, Luis Alonso Diaz Robles, Alain Gonzales, Stefan Pelz, “Low temperature microwave assisted hydrothermal carbonization (MAHC) reduces combustion emission precursors in short rotation coppice willow wood.”, Journal of Analytical and Applied Pyrolysis, Volume 134, September 2018, Pages 162-166' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Francisco Cereceda-Balic; Mario Toledo; Victor Vidal; Fabián Guerrero; Julio Acuña; Luis A. Díaz-Robles; Magin Lapuerta, “Emission Factors for PM2.5, CO, CO2, NOx, SO2 and particle size distributions from the combustion of wood species using a new controlled combustion chamber 3CE”, Science of the Total Environment, Volumes 584–585, 15 April 2017, Pages 901–910, (ISI, Q1).' }
    ],
    proyects: [
      { content: 'Proyecto FONDEF I+D ID18I10182 (2018-2020). Investigación y optimización de la producción de pellets de alta densidad energética a través de la HTC de diferentes mezclas de lodos orgánicos industriales y residuos sólidos orgánicos urbanos, y su posterior gasificación para generar energía calórica. (Director del Proyecto).' },
      { content: 'Proyecto FONDEF I+D ID18I10152 (2018-2020). Revalorización Energética de Residuos Sólidos de la Industria de la Celulosa Para la Fabricación de Pellets HTC. (Co-Investigador).' },
      { content: 'Proyecto FNDR-CONAMA (2007-2008) Araucanía, Universidad Católica de Temuco, “Laboratorio para la Medición de Emisiones de Calefactores a Leña.” UCT-FNDR 30040008-0. (Director del Proyecto).' },
      { content: 'Air Quality Initiative for the Great Smoky Mountains National Park. U.S. Environmental Protection Agency (EPA), University of Tennessee, (2002-2004).' },
      { content: 'Proyecto DIUCT 2006-2-03, (2007-2009), Dirección de Investigación, Universidad Católica de Temuco, “Estudio de la dispersión, química, destino y transporte de contaminantes en los recursos aire y suelo basado en arquitectura Cluster Beowulf de alto rendimiento como herramienta para resolver problemas complejos de cálculo científico. (Director del Proyecto).' },
      { content: 'Proyecto DIUCT (2007-2008), Dirección de Investigación, Universidad Católica de Temuco, “Estudio comparativo de la producción de etanol celulósico a partir de híbridos de álamos y eucalipto.” (Co-Investigador)' },
    ]
  }, {
    id: 6,
    name: 'José Luis Salazar',
    position: 'Integrante Núcleo Académico',
    email: '',
    image: 'https://mma.ingenieria.usach.cl/sites/magister-medio-ambiente/files/styles/personas-normal/public/jls.jpg',
    degrees: [{
      title: 'Ingeniero Civil Químico',
      content: 'Departamento de Ingeniería Química. Universidad de Santiago de Chile, (1992). Tesis: "Modelación dinámica de secadores rotatorios tubulares"',
    }, {
      title: 'Ph.D en Ingeniería Ambiental',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005). Thesis: "Health Risk Assessment Posed by the Mobile Source Air Toxics on an Urban to Regional Area."'
    }, {
      title: 'Minor in Statistics',
      content: 'Department of Civil and Environmental Engineering, The University of Tennessee – Knoxville (UTK), The U.S. (2005).'
    }],
    papers: [
      { content: 'Fidel Vallejo, Luis A. Díaz-Robles, Francisco Cubillos, Ricardo Vega, Jaime Gómez, Ernesto Pino-Cortés, Bastián Bascuñan, Paulina Carcamo, Francisca Parra, Ana Urzua, Samuel Carrasco; “Performance Evaluation of Biomass Blends with Additives Treated by Hydrothermal Carbonization”; Chemical Engineering Transactions, In Press, 2019.' },
      { content: 'Alvaro Paul, Daniel Ortega-Videla, Diego Lucas Ocampo Bravo, Ernesto Pino-Cortes, Jaime Gomez, Felipe Scott, Patricio Moreno-Casas, Luis A. Diaz-Robles, Alberto Vergara; “Effect of Pellet Structure and Pelletization Temperature on the Performance of HTC Pellets.”, Fuel Processing Technology, Submitted 2019.' },
      { content: 'Carrasco Samuel; Gómez, Jaime; Vallejo, Fidel; Díaz-Robles, Luis A.; Pino-Cortes, Ernesto; Campos, Valeria; Cubillos, Francisco; Pelz, Stefan K; Paczkowski, Sebastian; Silva, Javier; Cereceda-Balic, Francisco; Vergara-Fernández, Alberto; Lapuerta, Magin; Pazo, Amparo; Monedero, Esperanza; Fu, Joshua S; Hoekman, S. Kent; and Figueroa, Juan; “Experimental Study on Hydrothermal Carbonization of Lignocellulosic Biomass with Magnesium Chloride”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Ernesto Pino-Cortes, Luis A. Díaz-Robles, Francisco Cubillos, Francisco Cereceda, Joshua Fu, Samuel Carrasco. "Black and organic carbon fraction of particulate matter exposed" ; Science of the Total Environment; Submitted, 2019' },
      { content: 'Jaime Gómez, Giancarlo Corsi, Ernesto Pino-Cortés , Luis A. Díaz-Robles, Valeria Campos, Francisco Cubillos, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Amparo Pozo , Esperanza Monedero; “Modeling and simulation of a continuous hydrothermal carbonization process”; Journal of Chemical Engineering Communications; Submitted, 2019.' },
      { content: 'Constanza Corvalán, Luis A. Díaz-Robles*, Francisco Cubillos, Fidel Vallejo, Jaime Gómez, Ernesto Pino-Cortés, Stefan K. Pelz, Sebastian Paczkowski, Samuel Carrasco, Javier Silva, Magín Lapuerta, Francisco Cereceda-Balic, Amparo Pozo, Esperanza Monedero, “Life cycle analysis of hydrothermal carbonization of urban organic solid waste and comparison with gasification process”; Journal of Cleaner Production; Submitted, 2019.' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Victoria Knappe, Sebastian Paczkowski,, Julian Tejada, Luis Alonso Diaz Robles, Alain Gonzales, Stefan Pelz, “Low temperature microwave assisted hydrothermal carbonization (MAHC) reduces combustion emission precursors in short rotation coppice willow wood.”, Journal of Analytical and Applied Pyrolysis, Volume 134, September 2018, Pages 162-166' },
      { content: 'Alberto Vergara; Diana Yañez Sevilla; Paulina Morales; Felipe Scott; Germán Aroca; Luis Díaz-Robles; Patricio Moreno-Casas; “Biofiltration of benzo[a]pyrene, toluene and formaldehyde in air by a consortium of Rhodococcus erythropolis and Fusarium solani: effect of inlet loads, gas flow and temperature.” Chemical Engineering Journal, (ISI, Q1), Volume 332, 15 January 2018, Pages 702-710. https://doi.org/10.1016/j.cej.2017.09.095' },
      { content: 'Francisco Cereceda-Balic; Mario Toledo; Victor Vidal; Fabián Guerrero; Julio Acuña; Luis A. Díaz-Robles; Magin Lapuerta, “Emission Factors for PM2.5, CO, CO2, NOx, SO2 and particle size distributions from the combustion of wood species using a new controlled combustion chamber 3CE”, Science of the Total Environment, Volumes 584–585, 15 April 2017, Pages 901–910, (ISI, Q1).' }
    ],
    proyects: [
      { content: 'Proyecto FONDEF I+D ID18I10182 (2018-2020). Investigación y optimización de la producción de pellets de alta densidad energética a través de la HTC de diferentes mezclas de lodos orgánicos industriales y residuos sólidos orgánicos urbanos, y su posterior gasificación para generar energía calórica. (Director del Proyecto).' },
      { content: 'Proyecto FONDEF I+D ID18I10152 (2018-2020). Revalorización Energética de Residuos Sólidos de la Industria de la Celulosa Para la Fabricación de Pellets HTC. (Co-Investigador).' },
      { content: 'Proyecto FNDR-CONAMA (2007-2008) Araucanía, Universidad Católica de Temuco, “Laboratorio para la Medición de Emisiones de Calefactores a Leña.” UCT-FNDR 30040008-0. (Director del Proyecto).' },
      { content: 'Air Quality Initiative for the Great Smoky Mountains National Park. U.S. Environmental Protection Agency (EPA), University of Tennessee, (2002-2004).' },
      { content: 'Proyecto DIUCT 2006-2-03, (2007-2009), Dirección de Investigación, Universidad Católica de Temuco, “Estudio de la dispersión, química, destino y transporte de contaminantes en los recursos aire y suelo basado en arquitectura Cluster Beowulf de alto rendimiento como herramienta para resolver problemas complejos de cálculo científico. (Director del Proyecto).' },
      { content: 'Proyecto DIUCT (2007-2008), Dirección de Investigación, Universidad Católica de Temuco, “Estudio comparativo de la producción de etanol celulósico a partir de híbridos de álamos y eucalipto.” (Co-Investigador)' },
    ]
  }];

  footerLinks = [
    { content: 'Área de Gestión Institucional', url: 'http://www.usach.cl' },
    { content: 'Área de Docencia de Pregrado', url: 'http://www.usach.cl' },
    { content: 'Área de Investigación', url: 'http://www.usach.cl' },
    { content: 'Área de Docencia de Postgrado', url: 'http://www.usach.cl' },
    { content: 'Área de Vinculación con el Medio', url: 'http://www.usach.cl' },
    { content: 'Hasta octubre de 2020', url: 'http://www.usach.cl' }
  ];

  constructor() { }

  getProgramContent(key: string): any {
    return this.programContent[key] ? this.programContent[key].content : '';
  }

  getAdmissionContent(key: string): any {
    return this.admissionContent[key] ? this.admissionContent[key].content : '';
  }

  getNewsContent(limit: number): any {
    const l = this.newsContent.length;
    return this.newsContent.slice(limit > l ? 0 : l - limit, l);
  }

  getGraduatesContent(limit: number): any {
    this.studentsContent.graduates.sort((x, y) => {
      return y.year - x.year;
    });
    const l = this.studentsContent.graduates.length;
    return this.studentsContent.graduates.slice(limit > l ? 0 : l - limit, l);
  }

  getThesisContent(limit: number): any {
    this.studentsContent.thesis.sort((x, y) => {
      return y.year - x.year;
    });
    const l = this.studentsContent.thesis.length;
    return this.studentsContent.thesis.slice(limit > l ? 0 : l - limit, l);
  }

  getAcademicsContent(limit: number): any {
    const l = this.academicsContent.length;
    return this.academicsContent.slice(limit > l ? 0 : l - limit, l);
  }

  getAcademicContent(id: number): any {
    return this.academicsContent.find(x => x.id === id);
  }

  getFooterLinks(): any {
    return this.footerLinks;
  }
}
