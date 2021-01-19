import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  homeContent = {
    video: {
      url: 'https://www.youtube.com/embed/4-wyj3CSl6I'
    }
  };

  programContent = {
    descripcion: {
      content: `El Doctorado en Química fue creado con el propósito fundamental de promover el desarrollo de la investigación científica en Química a nivel nacional.<br><br>
      El Programa tiene por objetivo formar científicos de excelente nivel,  capaces de generar conocimiento y adaptar el conocimiento que se necesite para el quehacer industrial y el desarrollo científico (básico y aplicado) mediante estrategias innovadoras.<br><br>
      El Doctorado en Química es un programa de carácter académico, que está bajo la tuición de la Facultad de Química y Biología. El Doctorado exige una dedicación completa en una jornada diurna y su duración es de 8 semestres académicos.`
    },
    objetivos: {
      content: `<b>Objetivo General</b><br><br>
El Programa de Doctorado en Química fue creado con el propósito fundamental de entregar enfoques y perspectivas en la preparación de recursos humanos debidamente calificados, para apoyar y promover el desarrollo de la investigación científica del país en el ámbito de la Química.<br><br>
<b>Objetivo Específico</b><br><br>
Formar científicos en el área de la química de excelente nivel con un enfoque multidisciplinario, capaces de generar y adaptar conocimiento necesario para el desarrollo científico básico y aplicado del país.`
    },
    'dirigido-a': {
      content: 'Dirigido a quienes poseen el grado académico de Licenciado o Magíster en Química o en alguna ciencia afín.'
    },
    plan: {
      content: `El Plan de Estudios comprenderá al menos 146 créditos que se distribuyen en:<br><br>
<ul><li>Dos Asignaturas de Formación General (Química Orgánica, Química Inorgánica y Bioquímica) siendo la Físico Química obligatoria (nivel 1 y 2)</li>
<li>Dos Asignaturas de Tópicos de Especialidad (nivel 1 y 2)</li>
<li>Tres asignaturas de inglés (nivel 1, 2 y 3)</li>
<li>Un Seminario Bibliográfico (Unidad de investigación) (nivel 2)</li>
<li>Proyecto de Tesis (nivel 3)</li>
<li>Dos  Seminarios de Avance de Tesis (nivel 5 y 7)</li>
<li>Tesis de Grado (niveles 4 al 7)</li></ul><br>
Las asignaturas del  programa de  Doctorado  en Química deben ser aprobadas en primera instancia. La reprobación de una asignatura será causal de eliminación del alumno del programa de Doctorado en Química.<br><br>
<b>Tópicos de la Especialidad</b><br><br>
Química Ecológica, Simulación molecular y sus aplicaciones en sistemas orgánicos, Química Teórica, Química de Polímeros, Físico Química de Coloides,  Tópicos de Electroquímica, Métodos Electroquímicos, Magnetismo Molecular, Tópicos en Físico Química de Suelos, Tópicos en Química Analítica, Tópicos de Productos Naturales,  Tópicos de Fotoquímica, Metodologías de Calculo Químico Cuántico, Química Atmosférica, entre otros.<br><br>
<b>Proyecto de Tesis y Examen de Calificación</b><br><br>
En el tercer semestre de permanencia en el Programa el alumno(a) debe entregar su Proyecto de Tesis y solicitar al Comité de Postgrado su Examen de Calificación. El proyecto debe estar avalado por el profesor guía, el cual debe pertenecer al plantel regular de profesores del Programa. Este examen consistirá en la exposición pública y defensa de su Proyecto de Tesis, ante la Comisión de Examen de Calificación. En él se evaluarán tanto los conocimientos básicos del candidato(a), principalmente en relación con su área de formación, como la calidad del Proyecto.<br><br>
<b>Tesis</b><br><br>
Desarrolla el proyecto de tesis rindiendo cada año un avance ante la comisión de seguimiento. La Tesis es un trabajo de investigación original, en un área de la química que el candidato debe realizar para demostrar su creatividad en la formulación de una hipótesis en torno a un problema químico de actualidad, así como en la provisión de elementos que constituyan pruebas de su validez. El trabajo de Tesis estará restringido a las líneas de investigación que se desarrollan en la Facultad de Química y Biología, y que son financiadas por proyectos de investigación.<br><br>
El periodo máximo de permanencia en el programa es de cinco años.<br><br>
<b>Campo ocupacional</b><br><br>
El Doctor en Química puede desempeñarse en:<br><br>
<ul><li>Todas las áreas de la Industria Química, tales como: alimentos, metalmecánica, acero, galvanotecnia, petróleo, papel y celulosa, pintura y recubrimientos, cemento, cuero, agroindustria, plásticos, cosmética, minería, etc.</li>
<li>Como  Académico e investigador en las Universidades e Institutos de Investigación, en Centros de Desarrollo Tecnológico, entre otros.</li></ul><br>
<b>Graduación y Titulación</b><br><br>
<ul><li>Haber aprobado el plan de estudios completo de acuerdo a las normas establecidas.</li>
<li>Tener un promedio de calificaciones igual o superior a cinco en cada uno de los grupos de Asignaturas de Formación General y Tópicos de Especialidad.</li>
<li>Haber aprobado, con  el requisito de asistencia, las actividades indicadas en el punto 19, letra c, de las normas internas del programa.</li>
<li>Haber aprobado la Tesis de Doctorado,  Examen Privado y Examen de Grado.</li></ul>
      `
    },
    acreditacion: {
      content: 'Por definir ...'
    },
    investigacion: {
      content: `<b>Química Inorgánica:</b><br><br>
<ul><li>Química Inorgánica Computacional.
<li>Magnetismo Molecular.</li>
<li>Espintrónica Molecular.</li>
<li>Interacción de los metales con sistemas, moléculas o ambientes de origen biológico.</li>
<li>Estudio metales de transición (y otros metales) en solución acuosa con materiales biológicos, principalmente bacterias de interés médico e industrial.</li>
<li>Síntesis orgánica de ligandos.</li>
<li>Síntesis y Reactividad de Complejos Organometálicos.</li>
<li>Aplicación en Electrodos modificados.</li>
<li>Aplicación en Química médica (bioorganometálica).</li>
<li>Resonancia magnética nuclear.</li>
<li>Compuesto de coordinación de cobre.</li>
<li>Química supramolecular.</li>
<li>Magnetismo Molecular y espintrónica (utilización del espín).</li>
<li>Estructura Electrónica de sistemas de valencia mixta.</li>
<li>Química de coordinación de lantánidos (Tierras raras).</li>
<li>Polioxometalatos.</li>
<li>Nanotubos de Carbono funcionalizados.</li>
<li>Recubrimientos nanoestructurados autolimpiantes.</li>
<li>Sistemas laminares para fotodegradación.</li>
<li>Síntesis de compuestos de coordinación.</li>
<li>Química supramolecular.</li>
<li>Reconocimiento de ADN a través de interacciones no covalentes con complejos metálicos.</li></ul><br>
<b>Química Orgánica:</b><br><br>
<ul><li>Rol extracelular de ATP como mensajero intercelular.</li>
<li>Modulación alostérica de receptores, el caso de los receptores P2X.</li>
<li>Biología estructural de Receptores P2X agonismo alostérico.</li>
<li>Polifenoles como moduladores alostéricos de eNOS y otros mecanismos celulares.</li>
<li>Farmacología de nanopartículas y nanociencia.</li>
<li>Química Computacional.</li>
<li>Química Médica.</li>
<li>Preparación y caracterización de materiales nanocompositos en base a polímeros con aplicación en campo médico y envases de alimentos.</li>
<li>Preparación de andamios a partir de polímeros biodegradables para su uso en bioingeniería de tejidos.</li>
<li>Materiales de Construcción a partir de polímeros reciclados.</li>
<li>Fisiología Vegetal.</li>
<li>Biotecnología Vegetal.</li>
<li>Mecanismo de control del hongo fitopatógeno Botrytis cinerea utilizando extractos, compuestos naturales o compuestos hemisintéticos.</li>
<li>Síntesis de compuestos azaheterocíclicos.</li>
<li>Reacciones de acoplamiento cruzado catalizadas por Pd.</li>
<li>Síntesis y caracterización fotofísica de tintes orgánicos.</li>
<li>Estudios computacionales de mecanismos de reacción y propiedades espectrales de compuestos orgánicos.</li>
<li>Química de Productos Naturales y evaluación de sus actividades inmunoestimulantes y antimicrobianas contra patógenos que atacan salmones.</li>
<li>Biopolimeros y Bioproductos.</li>
<li>Química de Recursos Naturales.</li>
<li>Catálisis Homogénea.</li>
<li>Líquidos iónicos.</li>
<li>Química verde.</li>
<li>Revalorización de residuos industriales mediante biocatálisis.</li>
<li>Síntesis de prebióticos derivados de lactosa.</li>
<li>Inmovilización de enzimas.</li>
<li>Síntesis enzimática de tensoactivos.</li>
<li>Modelación y simulación de procesos enzimáticos.</li></ul><br>
<b>Química Analítica:</b><br><br>
<ul><li>Síntesis de Nanopartículas.</li>
<li>Química de Superficies.</li>
<li>Medioambiente.</li>
<li>Remoción de contaminantes en sistemas acuosos.</li>
<li>Microbiología básica y aplicada.</li>
<li>Toxicidad y resistencia bacteriana a metal(oid)es.</li>
<li>Biosíntesis de nanoestructura utilizando flavoproteínas reductoras de metal(oid)es.</li>
<li>Identificación y producción de enzimas de extremófilos.</li>
<li>Biotecnología de enzimas.</li>
<li>Smog fotoquímico.</li>
<li>Ozono Troposférico.</li>
<li>Química de las aguas de rocíos en zonas urbanas y niveles atmosféricos de compuestos fenólicos.</li>
<li>Estudio de las emisiones provenientes de la quema de biomasa y su oxidabilidad..</li>
<li>Estudio de Trazadores de la quema de madera.</li>
<li>Tratamiento de Aguas.</li>
<li>Electroanálisis.</li>
<li>Química Ambiental.</li>
<li>Cromatografía.</li>
<li>Tratamiento de muestras.</li>
<li>Síntesis y caracterización de polímeros para la remoción de contaminantes.</li>
<li>Tecnología de membranas para el tratamiento de agua.</li>
<li>Nanomateriales para el monitoreo y tratamiento de contaminantes.</li>
<li>Materiales derivados de biomasa para la generación de bionanocompositos.</li>
<li>Físico química de suelos y medio ambiente.</li>
<li>Ciencias del suelo.</li>
<li>Físico química de suelos y medio ambiente.</li>
<li>Detección de metales pesados a nivel de trazas y ultratrazas en muestras ambientales, empleando electrodos químicamente modificados (EQM).</li>
<li>Evolución de la reacción de hidrógeno/oxígeno.</li>
<li>Reacción de reducción del oxígeno.</li>
<li>Síntesis y modelación de la reducción del dióxido de carbono.</li></ul><br>
<b>Fisicoquímica:</b><br><br>
<ul><li>Química de Radicales Libres en medios microheterogéneos.</li>
<li>Interacción de nanopartículas con radicales libres.</li>
<li>Fotoquímica de sondas solvatofluorcrómicas.</li>
<li>Diseño y estudio de sondas fluorescentes.</li>
<li>Mecanismos de oxidación de proteínas y aminoácidos.</li>
<li>Radicales libres y antioxidantes.</li>
<li>Especies electrónicamente excitadas y radicales libres fotoinducidos.</li>
<li>Mecanismos de transferencia de carga y Transporte de carga.</li>
<li>Descriptores de reactividad DFT global y local.</li>
<li>Propiedades de óptica lineal y no lineal.</li>
<li>Aromaticidad y densidades de corriente inducidas magnéticamente.</li>
<li>Propiedades derivadas de la teoría cuántica de átomos en moléculas.</li>
<li>Físico – Química de Superficies y Sistemas a Nanoescala.</li>
<li>Aplicaciones electroquímicas.</li>
<li>Electrocatálisis y fotoelectrocatálisis.</li>
<li>Degradación de Compuestos.</li>
<li>Contaminantes, clorofenoles antibióticos.</li>
<li>Electrodos Modificados.</li>
<li>Celdas solares.</li>
<li>Dióxido de titanio.</li>
<li>Degradación de compuestos orgánicos fotolizados usando irradiación UV-Vis en suspensiones semiconductoras.</li>
<li>Comportamiento Cinético y Fotoquímico de compuestos orgánicos en sistemas homogéneos y heterogéneos.</li>
<li>Capacidad Antioxidante y Radicales Libres.</li>
<li>Electrónica Molecular.</li>
<li>Electrocatálisis.</li></ul><br>
<b>Electroquímica:</b><br><br>
<ul><li>Electrocatálisis.</li>
<li>Electroanálisis.</li>
<li>Electroquímica de Vino y Polifenoles.</li>
<li>Líquidos Iónicos.</li>
<li>Baterías de Li-aire.</li>
<li>Química verde: electroquímica.</li>
<li>Anodizado de Aluminio.</li>
<li>Recubrimientos anticorrosivos.</li>
<li>Biocorrosión.</li>
<li>Comportamiento electroquímico de metales ActivoPasivos.</li>
<li>Fisicoquímica de superficies, electrocatalisis, sensores electroquímicos, nanotecnología.</li>
<li>Electroquímica.</li>
<li>Desarrollo de materiales de electrodos para la conversión de energía y para sensores electroquímicos.</li>
<li>Nuevos materiales para baterías de litio.</li>
<li>Electrodos con actividad para la degradación de especies orgánicas contaminantes en aguas.</li>
<li>Regulación de la actividad electrocatalítica en la electrooxidación de alcoholes.</li></ul><br>`
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

  getHomeVideo(): any {
    return this.homeContent.video;
  }

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
