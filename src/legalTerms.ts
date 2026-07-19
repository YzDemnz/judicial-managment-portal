export interface LegalTermSection {
  title: string
  body: string[]
}

export const legalEffectiveDate = '18 de julio de 2026'

export const legalIntro = [
  'Estos Términos y Condiciones constituyen un contrato electrónico entre el titular persona física del proyecto Judicial Managment, quien actúa por cuenta propia bajo la marca MR Legal/Judicial Managment, y toda persona que descargue, instale, acceda, use, configure o administre la aplicación, el portal, los instaladores, módulos, servicios conectados, bases de datos, documentos digitales, chats, notificaciones y herramientas relacionadas.',
  'Judicial Managment es software de distribución controlada y evolución continua. Puede recibir correcciones, actualizaciones de seguridad, cambios de compatibilidad y mejoras funcionales. No es un expediente judicial oficial, un servicio de fe pública, un sustituto del criterio profesional ni el único medio recomendado para resguardar información jurídica o controlar plazos.',
  'La aceptación ocurre cuando el usuario marca la casilla correspondiente o, después de que estos Términos se ponen claramente a su disposición, descarga, instala, crea una cuenta, inicia sesión, se une a un despacho, carga información, contrata un plan o continúa utilizando el servicio. Ninguna aceptación implica renuncia a derechos que la legislación mexicana considere irrenunciables.',
]

export const legalTermSections: LegalTermSection[] = [
  {
    title: 'Cuartilla 01. Identificacion del proyecto y naturaleza contractual',
    body: [
      'Judicial Managment es una aplicacion de escritorio y plataforma web de apoyo administrativo para despachos juridicos, abogados, auxiliares, colaboradores, pasantes y usuarios autorizados. Su finalidad es facilitar la organizacion de expedientes, clientes, movimientos, asuntos laborales, calendario, archivo, chat de despacho, documentos adjuntos y accesos rapidos a portales publicos. No constituye juzgado, tribunal, autoridad, fedatario, repositorio oficial, despacho juridico automatizado ni sistema publico de gestion judicial.',
      'El titular del proyecto es una persona fisica que pone a disposicion una herramienta tecnologica en desarrollo. En consecuencia, cualquier referencia a "el Titular", "nosotros", "proveedor", "desarrollador" o "responsable del proyecto" debe entenderse referida a dicha persona fisica, sin que ello implique constitucion de sociedad, firma legal, asociacion profesional, representacion juridica, mandato, comision mercantil ni relacion laboral con los usuarios.',
      'Estos Terminos regulan el uso de la tecnologia, no sustituyen contratos de prestacion de servicios legales entre abogados y clientes, ni modifican obligaciones profesionales, deontologicas, procesales, fiscales, administrativas, laborales, civiles o mercantiles que correspondan a cada usuario por su actividad propia.',
    ],
  },
  {
    title: 'Cuartilla 02. Distribución controlada y evolución del producto',
    body: [
      'El usuario reconoce que la aplicación se distribuye de forma controlada y se actualiza de manera continua. Puede contener defectos de programación, fallas de sincronización, incompatibilidades, interrupciones o comportamientos imprevistos aun después de pruebas razonables. Los reportes de uso y soporte permiten corregir el producto, pero no convierten al Titular en responsable de la operación profesional del despacho.',
      'El Titular podrá modificar módulos, diseño, compatibilidad, límites, proveedores o controles de seguridad por razones técnicas, legales, operativas o de protección de usuarios. Los cambios materiales a un servicio pagado se comunicarán con anticipación razonable y no reducirán retroactivamente prestaciones ya pagadas, salvo cuando una medida inmediata sea necesaria por seguridad, mandato legal o riesgo grave.',
      'El usuario no debe depender de la aplicación como fuente única para controlar términos judiciales, audiencias, vencimientos, notificaciones oficiales, documentos originales, pruebas o información esencial. Debe conservar respaldos independientes y verificar la información con el expediente y las fuentes oficiales correspondientes.',
    ],
  },
  {
    title: 'Cuartilla 03. Marco jurídico y límites de las exclusiones',
    body: [
      'Estos Términos se interpretan conforme a la legislación mexicana aplicable, incluidos el Código Civil Federal, el Código de Comercio, la Ley Federal de Protección al Consumidor y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares cuando corresponda, además de las normas imperativas locales que resulten competentes.',
      'Las partes pueden distribuir y limitar ciertos riesgos contractuales dentro de lo permitido por la ley. Ninguna cláusula autoriza dolo o mala fe, elimina responsabilidad legal irrenunciable, limita derechos de consumidores en forma prohibida, impide derechos ARCO ni traslada al usuario una obligación que legalmente corresponda al Titular.',
      'Si una autoridad determina que una disposición es excesiva, abusiva o ineficaz, se reducirá al alcance máximo legalmente válido y el resto conservará sus efectos. La finalidad es asignar riesgos tecnológicos de forma clara y proporcional, no privar a ninguna persona de protecciones de orden público.',
    ],
  },
  {
    title: 'Cuartilla 04. Uso dirigido a profesionales y no sustitucion de criterio juridico',
    body: [
      'Judicial Managment esta pensado para usuarios que cuentan con capacidad profesional o administrativa suficiente para entender que el software es una herramienta de apoyo. La aplicacion no emite resoluciones, no presenta promociones, no valida estrategias procesales, no revisa competencia, no calcula automaticamente todos los plazos legales, no sustituye estudio juridico, no garantiza resultados y no reemplaza la responsabilidad profesional del abogado o despacho.',
      'Cualquier informacion generada por modulos, listas, plantillas, reportes, calendario o referencias internas debe considerarse orientativa, administrativa y sujeta a revision humana. El usuario debe confirmar los datos con el expediente, con el juzgado, con la legislacion vigente, con acuerdos publicados, con sistemas oficiales y con su propio criterio profesional antes de tomar decisiones.',
      'El Titular no sera responsable por estrategias legales, omisiones procesales, perdida de oportunidades, multas, preclusiones, caducidades, prescripciones, sanciones, negligencia profesional, errores de captura, mala interpretacion de informacion, uso indebido de plantillas o confianza excesiva en recordatorios o reportes internos.',
    ],
  },
  {
    title: 'Cuartilla 05. Aceptacion electronica y prueba del consentimiento',
    body: [
      'La aceptacion de estos Terminos podra acreditarse mediante descarga, instalacion, inicio de sesion, confirmacion de correo, seleccion de casillas, uso continuado, registro de informacion, generacion de despachos, invitacion de colaboradores, carga de archivos, uso de chat o cualquier otro acto inequivo de aprovechamiento de la aplicacion. El usuario acepta que tales actos equivalen a consentimiento electronico para efectos contractuales.',
      'El usuario declara que tiene capacidad legal suficiente para obligarse, que no tiene impedimento para usar herramientas tecnologicas de gestion juridica y que, si actua en nombre de un despacho, cliente, sociedad, patron, colaborador o tercero, cuenta con autorizacion suficiente para aceptar estos Terminos y cargar informacion bajo su responsabilidad.',
      'La falta de firma autografa no invalida la aceptacion cuando el usuario ha realizado actos de uso. El registro de correo, fecha, hora, cuenta, dispositivo, direccion IP, instalacion, version, despacho, permisos y actividad podra utilizarse como evidencia tecnica de aceptacion, administracion, soporte, seguridad, auditoria o defensa de derechos.',
    ],
  },
  {
    title: 'Cuartilla 06. Cuenta, correo real y verificacion',
    body: [
      'Para usar la aplicacion puede requerirse una cuenta con correo electronico real, verificacion de correo, contrasena, autenticacion con proveedor externo, autenticacion multifactor y otros controles de seguridad. El usuario es responsable de proporcionar informacion veraz, mantener acceso a su correo, resguardar sus credenciales, cerrar sesion en dispositivos compartidos y avisar oportunamente sobre accesos no autorizados.',
      'El Titular podra negar, suspender o eliminar cuentas cuando detecte informacion falsa, uso indebido, abuso de invitaciones, cargas maliciosas, intentos de evadir restricciones, suplantacion, incumplimiento de estos Terminos, riesgo para otros usuarios o requerimiento de autoridad competente.',
      'La verificacion de correo no certifica identidad profesional, cedula, autorizacion para litigar, relacion con un despacho, poder para representar clientes ni legitimidad de la informacion subida. Cada usuario debe verificar por su cuenta la identidad y autorizacion de sus colaboradores.',
    ],
  },
  {
    title: 'Cuartilla 07. Despachos, bibliotecas y colaboracion',
    body: [
      'La funcion de crear despachos o bibliotecas permite separar espacios de trabajo. Cada despacho puede contener expedientes, clientes, movimientos, documentos, chat, configuraciones, perfiles de colaboradores y permisos. El propietario del despacho conserva facultades principales de administracion y puede invitar, remover, cambiar roles o solicitar eliminacion conforme a las funciones disponibles.',
      'Los codigos de invitacion y mecanismos de union son responsabilidad del propietario o administrador que los comparta. Si un usuario externo obtiene un codigo valido y se integra al despacho, se presumira que el propietario o administrador asumio el riesgo de haber compartido dicho codigo, salvo evidencia tecnica de falla imputable directamente al sistema dentro de los limites legales aplicables.',
      'Los colaboradores ingresaran inicialmente con permisos limitados cuando asi lo establezca la aplicacion. El propietario y administradores deben revisar roles antes de permitir edicion, carga de documentos, descarga de archivos o acceso a informacion sensible. La aplicacion facilita permisos, pero no reemplaza protocolos internos de confidencialidad del despacho.',
    ],
  },
  {
    title: 'Cuartilla 08. Roles, permisos y responsabilidad del propietario',
    body: [
      'Los roles pueden incluir propietario, administrador, editor, solo lectura u otros equivalentes. El propietario es responsable de decidir quien puede ver, editar, descargar, subir, borrar o administrar informacion. El administrador podra tener funciones amplias, pero no necesariamente podra transferir propiedad si el sistema reserva esa facultad al propietario.',
      'La asignacion de permisos no garantiza que un colaborador actue correctamente. El Titular no responde por filtraciones, errores, eliminaciones, descargas, capturas de pantalla, copias externas, envio de documentos, comentarios, acciones maliciosas o negligencia de usuarios autorizados por el propietario o por administradores del despacho.',
      'Cuando un despacho tenga informacion de terceros, clientes o contrapartes, el propietario debe contar con base legal, autorizacion o interes juridico para almacenarla. El usuario que sube informacion declara que tiene derecho para hacerlo y que su tratamiento no viola secreto profesional, confidencialidad, proteccion de datos, acuerdos privados, disposiciones judiciales ni instrucciones de clientes.',
    ],
  },
  {
    title: 'Cuartilla 09. Informacion del usuario y titularidad de datos',
    body: [
      'La informacion cargada por el usuario, incluyendo expedientes, documentos, movimientos, clientes, comentarios, fechas, archivos, imagenes, PDF, Word, notas, conversaciones, perfiles y configuraciones, pertenece al usuario o a quien legalmente corresponda. El Titular no reclama propiedad sobre el contenido juridico del usuario.',
      'El usuario concede al Titular y a los proveedores tecnologicos necesarios una autorizacion limitada, no exclusiva y tecnica para almacenar, procesar, transmitir, respaldar, mostrar, indexar, asegurar y operar dicha informacion exclusivamente en la medida necesaria para prestar, mantener, depurar, mejorar o proteger la aplicacion.',
      'El usuario es responsable de la calidad, exactitud, licitud, oportunidad y suficiencia de sus datos. La aplicacion no garantiza que un numero de expediente, juzgado, materia, fecha, documento o nota sea correcto si fue capturado incorrectamente o si cambio la informacion oficial fuera de la aplicacion.',
    ],
  },
  {
    title: 'Cuartilla 10. Datos personales y aviso de privacidad',
    body: [
      'El uso de la aplicación puede implicar tratamiento de datos personales de usuarios y de terceros incluidos en expedientes. Respecto de los datos de cuenta, soporte y contratación, el Titular actúa como responsable en los términos del aviso de privacidad. Respecto de la información que un despacho carga sobre clientes, partes, testigos o contrapartes, el despacho o profesional que decide sus finalidades conserva la calidad jurídica que le corresponda y el Titular presta tratamiento técnico limitado para operar el servicio.',
      'El usuario declara que cuenta con una base jurídica, autorización, deber profesional o consentimiento suficiente para cargar cada dato, especialmente información sensible, patrimonial, financiera, médica, biométrica, de menores o sujeta a secreto. También debe aplicar minimización, permisos internos y plazos de conservación adecuados.',
      'El Titular pondrá a disposición un aviso de privacidad, medios para ejercer derechos ARCO y medidas razonables de seguridad. Nada en estos Términos elimina obligaciones irrenunciables de confidencialidad, seguridad, información, atención de derechos o notificación de vulneraciones previstas por la legislación aplicable.',
    ],
  },
  {
    title: 'Cuartilla 11. Medidas de seguridad y ausencia de garantia absoluta',
    body: [
      'El Titular implementara medidas razonables de seguridad tecnica, administrativa y organizacional acordes con la fase de desarrollo, los recursos disponibles, el riesgo y los proveedores tecnologicos utilizados. Estas medidas pueden incluir autenticacion, verificacion de correo, roles, permisos, almacenamiento en servicios de terceros, politicas de acceso, registros tecnicos, cifrado de comunicaciones y controles de base de datos.',
      'El usuario reconoce que ningun sistema conectado a internet, dispositivo local, base de datos, proveedor de nube, correo electronico, instalador o aplicacion de escritorio puede garantizar seguridad absoluta. Existen riesgos de fallas, errores humanos, malware, perdida de credenciales, ataques, interrupciones, bugs, corrupcion de datos, fallas de proveedores y eventos de fuerza mayor.',
      'La seguridad tambien depende del usuario: contrasenas fuertes, autenticacion multifactor, actualizaciones del sistema operativo, antivirus, resguardo fisico del equipo, no compartir credenciales, no instalar software inseguro, no abrir archivos sospechosos y mantener respaldos propios. El incumplimiento de estas medidas puede excluir o reducir cualquier responsabilidad imputable al Titular.',
    ],
  },
  {
    title: 'Cuartilla 12. Pérdida de datos, respaldos y asignación de riesgos',
    body: [
      'El usuario acepta que cualquier sistema digital puede sufrir pérdida, corrupción, duplicación, desincronización, retraso, incompatibilidad, eliminación accidental o inaccesibilidad. Se obliga a mantener respaldos externos verificables y actualizados de documentos, expedientes, calendarios, fechas críticas, contratos, evidencias e información que resulte esencial para su actividad.',
      'En la máxima medida permitida, el Titular no será responsable por pérdidas causadas por errores de captura, actos del usuario o de colaboradores autorizados, credenciales comprometidas, equipos del usuario, servicios de internet, terceros, proveedores, fuerza mayor, archivos maliciosos o por utilizar la aplicación como repositorio único. El usuario deberá mitigar cualquier daño, suspender el uso afectado y notificar el incidente sin demora injustificada.',
      'Esta asignación no excluye dolo, mala fe, conducta intencional, incumplimientos no renunciables ni obligaciones que una autoridad determine directamente imputables al Titular. Si existe responsabilidad directa legalmente limitable, se aplicará el tope previsto en la Cuartilla 38 y no una exención absoluta.',
    ],
  },
  {
    title: 'Cuartilla 13. Deber reforzado de respaldo del usuario',
    body: [
      'El usuario acepta que el respaldo de informacion juridica es una obligacion propia y continua. Debe conservar copias fisicas o digitales independientes de expedientes, promociones, acuerdos, sentencias, contratos, identificaciones, poderes, anexos, constancias, recibos, convenios, documentos laborales y cualquier archivo que pueda ser necesario para defensa, prueba, auditoria, cumplimiento o atencion al cliente.',
      'La aplicacion no debe utilizarse como archivo unico, archivo maestro, caja fuerte digital exclusiva, sistema de fe publica, repositorio oficial o sustituto de obligaciones profesionales de conservacion documental. La existencia de funciones de carga de PDF, Word, imagenes o notas no cambia esta obligacion.',
      'Si el usuario decide operar sin respaldos externos, lo hace bajo su propio riesgo. La ausencia de respaldo podrá considerarse falta de mitigación o incumplimiento de una medida elemental de prudencia al valorar daños que razonablemente pudieron evitarse.',
    ],
  },
  {
    title: 'Cuartilla 14. Proveedores externos y servicios de nube',
    body: [
      'La aplicacion puede usar proveedores externos para autenticacion, base de datos, almacenamiento, correo, descarga de instaladores, hosting, analitica tecnica, repositorios, sistemas operativos, navegador, componentes Electron, librerias de codigo abierto y otros servicios necesarios. El usuario reconoce que la disponibilidad y seguridad tambien dependen de dichos proveedores.',
      'El Titular no controla todos los aspectos tecnicos, comerciales, legales o operativos de proveedores externos. Por tanto, en la maxima medida permitida por la ley, no sera responsable por interrupciones, cambios de politica, bloqueos, caidas, latencia, perdida de disponibilidad, vulnerabilidades, restricciones, limites de uso, modificaciones de API, suspensiones o errores imputables a terceros.',
      'Cuando un proveedor externo tenga sus propios terminos, avisos, politicas o condiciones, el usuario acepta que dichos documentos pueden aplicar adicionalmente. En caso de conflicto, prevalecera lo que resulte legalmente obligatorio y necesario para operar el servicio.',
    ],
  },
  {
    title: 'Cuartilla 15. Instalador, compatibilidad y entorno local',
    body: [
      'El instalador de Windows se proporciona para equipos compatibles y puede requerir sistema operativo actualizado, permisos de instalacion, librerias del sistema, conexion a internet, espacio de almacenamiento, permisos de seguridad, certificado o autorizacion del antivirus. El Titular no garantiza compatibilidad con todos los equipos, versiones, configuraciones, dominios corporativos, redes, firewalls o politicas de TI.',
      'El usuario es responsable de verificar que su equipo pueda ejecutar la aplicacion, que no infrinja politicas internas, que tenga permisos de instalacion y que el uso sea permitido por su organizacion. En entornos empresariales, el usuario debe consultar a su responsable de tecnologia antes de instalar.',
      'La aplicacion puede actualizarse, reinstalarse o requerir instaladores nuevos. Versiones antiguas pueden dejar de recibir soporte, presentar fallas o ser incompatibles con cambios de base de datos. El usuario debe instalar actualizaciones recomendadas y conservar respaldos antes de actualizar.',
    ],
  },
  {
    title: 'Cuartilla 16. Precio, prueba gratuita y cambios comerciales',
    body: [
      'La aplicación puede ofrecer acceso gratuito, prueba temporal, planes limitados, funciones premium o suscripciones. Antes de contratar se informarán de forma clara el precio total, impuestos cuando correspondan, periodicidad, funciones incluidas, límites, vigencia, medios de pago, renovación, cancelación y política de reembolsos aplicable.',
      'Una función gratuita no crea derecho indefinido a conservarla sin costo. Los cambios futuros de precio o plan se aplicarán hacia adelante y serán comunicados antes de la siguiente contratación o renovación; no alterarán retroactivamente el periodo ya pagado.',
      'Todo cobro recurrente requerirá consentimiento expreso e informado. El usuario podrá cancelar de manera inmediata y sin penalización indebida por el mismo canal o por un mecanismo de dificultad equivalente al de contratación, sin perjuicio de servicios ya prestados o saldos legítimamente causados.',
    ],
  },
  {
    title: 'Cuartilla 17. Cambios de funciones y ausencia de derecho adquirido',
    body: [
      'El usuario acepta que las funciones de expedientes, archivo, clientes, movimientos, calendario, laboral, chat, documentos, dashboard, seguridad, 2FA, descarga, invitaciones, roles y reportes pueden modificarse por mejoras, correcciones, seguridad, costo, viabilidad legal o decisiones justificadas de producto.',
      'El Titular podrá cambiar nombres de módulos, orden de pantallas, colores, iconos, flujos, permisos, estructuras de datos, límites de archivos, integraciones y reglas de colaboración. La modificación de una función no esencial no será incumplimiento, salvo una obligación específica pactada por escrito.',
      'El usuario debe revisar notas de versión o comunicados. Si no acepta un cambio futuro material, podrá dejar de usar la aplicación, cancelar renovaciones y exportar o respaldar su información en la medida disponible.',
    ],
  },
  {
    title: 'Cuartilla 18. Juris, modelos locales y ausencia de asesoría jurídica automatizada',
    body: [
      'Juris y cualquier modelo local son herramientas de asistencia técnica. Pueden resumir, buscar referencias, proponer borradores o usar documentos aportados por el despacho, pero no ejercen la abogacía, no representan al usuario, no presentan escritos, no certifican hechos, no sustituyen una revisión profesional y no garantizan que una cita, plazo, criterio, norma o formato sea correcto o vigente.',
      'Los modelos pueden producir información falsa, incompleta, desactualizada o no aplicable. Los formatos privados que cargue el usuario tendrán prioridad operativa como referencia cuando la función esté disponible; la biblioteca general será supletoria. Esa prioridad no acredita autenticidad, vigencia, licitud ni adecuación al caso.',
      'El usuario debe revisar íntegramente cada resultado, contrastar fuentes oficiales, eliminar datos innecesarios y aprobar personalmente cualquier documento antes de firmarlo, enviarlo o presentarlo. En la máxima medida legal, el Titular no responde por decisiones profesionales basadas en una salida no verificada ni por el comportamiento, instalación, disponibilidad o límites de modelos locales de terceros.',
    ],
  },
  {
    title: 'Cuartilla 19. Calendario, notificaciones y terminos judiciales',
    body: [
      'El calendario y las notificaciones son herramientas auxiliares. Pueden depender de permisos del sistema operativo, navegador, equipo, celular, proveedor de notificaciones, zona horaria, conexion, fecha capturada por el usuario, categoria del movimiento y configuracion local. No se garantiza que una notificacion llegue, llegue a tiempo, sea visible o refleje todos los terminos legales aplicables.',
      'El usuario es responsable de calcular, confirmar y controlar plazos procesales, audiencias, vencimientos, citatorios, prevenciones, requerimientos, fechas de conciliacion, promociones, recursos y obligaciones. La aplicacion no reemplaza agenda profesional, acuerdos oficiales, listas, boletines, estrados, notificaciones personales ni consulta directa con autoridades.',
      'El Titular no sera responsable por perdida de terminos, inasistencia a audiencias, sanciones, caducidades, prescripciones, preclusiones o consecuencias legales derivadas de fallas de calendario, errores de captura o confianza exclusiva en notificaciones.',
    ],
  },
  {
    title: 'Cuartilla 20. Expedientes, juzgados y materias',
    body: [
      'La organizacion por materias, juzgados, tipos de juicio y estatus tiene fines administrativos. La inclusion de nombres de juzgados, materias o categorias no garantiza exactitud permanente, competencia, existencia, jurisdiccion, cambios administrativos, reorganizaciones judiciales ni vigencia de denominaciones oficiales.',
      'El usuario debe verificar juzgado, numero, partes, via, materia, competencia, radicacion, etapa, estatus, acuerdos y cualquier informacion procesal con fuentes oficiales. Si un juzgado cambia de denominacion, competencia o sistema, el usuario debe actualizar sus registros.',
      'La aplicacion puede permitir archivar, editar, clasificar o mover expedientes. Estas acciones son internas y no tienen efecto legal ante autoridades. Archivar dentro de la aplicacion no equivale a archivo judicial, baja oficial, conclusion del asunto ni destruccion autorizada de expediente fisico o digital.',
    ],
  },
  {
    title: 'Cuartilla 21. Movimientos, documentos y acuerdos',
    body: [
      'Los movimientos sirven para llevar una cronologia interna. El usuario debe capturar informacion correcta, fechas, descripcion, tipo de movimiento y documentos anexos. La aplicacion puede sugerir crear eventos en calendario cuando el usuario registra audiencias u otras categorias, pero esa funcion no garantiza interpretacion correcta de todo texto.',
      'Los documentos adjuntos pueden incluir PDF, imagenes, Word u otros formatos permitidos. El usuario es responsable de que los archivos no contengan malware, informacion ilicita, datos innecesarios, documentos falsos, secretos no autorizados o material que vulnere derechos de terceros.',
      'La carga de un documento no implica validacion de autenticidad, integridad, firma, cadena de custodia, valor probatorio, legibilidad o aceptacion por autoridad. El usuario debe conservar originales y verificar versiones finales antes de presentar o compartir.',
    ],
  },
  {
    title: 'Cuartilla 22. Clientes y datos de terceros',
    body: [
      'El modulo de clientes permite capturar informacion economica, adeudos, pagos, movimientos y datos de contacto. El usuario debe contar con base legal para tratar dichos datos y debe informar a sus clientes conforme a sus propias obligaciones profesionales y de privacidad.',
      'El Titular no es responsable por cobros indebidos, calculos incorrectos, convenios privados, honorarios, facturacion, impuestos, conflictos con clientes, incumplimientos de pago, intereses, cargos o cualquier disputa entre abogado y cliente derivada de informacion capturada por el usuario.',
      'Cuando se carguen datos patrimoniales, financieros o sensibles, el usuario debe extremar cuidado, limitar acceso, asignar permisos adecuados, mantener respaldos y evitar almacenar informacion innecesaria. La app proporciona herramienta tecnica, no criterio de minimizacion legal del despacho.',
    ],
  },
  {
    title: 'Cuartilla 23. Chat, mensajes y archivos compartidos',
    body: [
      'El chat de despacho esta destinado a comunicacion interna entre colaboradores autorizados. Los mensajes, archivos y comentarios pueden contener informacion confidencial. Cada usuario debe comunicarse con prudencia y evitar subir informacion que no deba compartirse con todos los integrantes del despacho.',
      'El Titular no revisa de manera preventiva todos los mensajes y no asume responsabilidad por opiniones, instrucciones, archivos, errores, insultos, datos personales, documentos, acuerdos internos o filtraciones realizadas por usuarios del despacho. El propietario debe administrar colaboradores y permisos.',
      'El usuario acepta que archivos compartidos en chat pueden descargarse por personas autorizadas y salir del control de la aplicacion. Por tanto, la aplicacion no puede impedir copias externas, capturas, reenvios, impresiones o almacenamiento fuera del sistema una vez que un usuario autorizado accede a la informacion.',
    ],
  },
  {
    title: 'Cuartilla 24. Eliminacion, recuperacion y borrado diferido',
    body: [
      'La aplicacion puede incluir funciones de eliminacion, archivo, restauracion temporal o borrado diferido, como periodos de recuperacion de despachos. Estos mecanismos son de conveniencia y no garantizan recuperacion absoluta si existe falla tecnica, vencimiento del periodo, eliminacion definitiva, corrupcion, cambios de version o acciones del proveedor de base de datos.',
      'El usuario debe tratar cualquier eliminacion como potencialmente definitiva y respaldar informacion antes de borrar despachos, expedientes, documentos, movimientos, clientes o conversaciones. El propietario asume responsabilidad por confirmar eliminaciones y por comunicar internamente los efectos de sus decisiones.',
      'La restauracion puede estar condicionada a disponibilidad tecnica, estado de la base de datos, permisos, integridad de archivos y tiempo transcurrido. El Titular no garantiza recuperacion cuando el usuario excedio plazos, elimino datos de forma definitiva o no mantuvo respaldos externos.',
    ],
  },
  {
    title: 'Cuartilla 25. Confidencialidad profesional',
    body: [
      'Los abogados, auxiliares y colaboradores deben cumplir sus deberes de secreto profesional, confidencialidad, reserva, lealtad, minimización y resguardo de expedientes. El uso de la aplicación no transfiere al Titular la decisión profesional sobre qué información puede digitalizarse, compartirse o procesarse mediante un modelo local.',
      'El usuario no deberá subir información sin autorización suficiente, sujeta a una prohibición de tratamiento, ajena a la finalidad del despacho, excesiva para el servicio o accesible a colaboradores sin necesidad de conocerla. Antes de usar documentos reales como referencia de Juris deberá anonimizar o seudonimizar los datos cuando el caso lo permita.',
      'El Titular aplicará controles razonables de seguridad y confidencialidad al tratamiento técnico que le corresponda. No asume por ese solo hecho el secreto profesional propio del abogado ni la calidad de custodio oficial de expedientes, sin perjuicio de sus obligaciones legales directas sobre los datos que trate.',
    ],
  },
  {
    title: 'Cuartilla 26. Conductas prohibidas',
    body: [
      'Queda prohibido usar la aplicacion para actividades ilicitas, fraude, suplantacion, acoso, espionaje, robo de informacion, distribucion de malware, carga de contenido ilegal, violacion de derechos de autor, revelacion no autorizada de datos, ataques, scraping abusivo, ingenieria inversa no permitida, elusion de controles, reventa no autorizada o acceso a despachos sin permiso.',
      'Tambien esta prohibido intentar vulnerar la base de datos, obtener llaves, tokens o credenciales de otros usuarios, manipular invitaciones, modificar el instalador, distribuir versiones alteradas, usar automatizaciones abusivas, interferir con el servicio o explotar errores sin reportarlos de buena fe.',
      'El incumplimiento podra causar suspension, eliminacion de cuenta, retiro de acceso, conservacion de registros para defensa, notificacion a propietarios de despachos afectados o entrega de informacion a autoridades cuando exista obligacion legal.',
    ],
  },
  {
    title: 'Cuartilla 27. Propiedad intelectual',
    body: [
      'El nombre Judicial Managment, marca MR Legal cuando se use asociada al proyecto, logotipos, disenos, interfaces, textos propios, codigo, compilaciones, estructura visual, bases de conocimiento, materiales, documentacion y elementos no aportados por el usuario pertenecen al Titular o a sus licenciantes, salvo componentes de codigo abierto sujetos a sus licencias respectivas.',
      'El usuario recibe una licencia limitada, revocable, no exclusiva, no transferible y condicionada al cumplimiento de estos Términos para instalar y usar la aplicación durante el periodo autorizado. No se otorga venta de código fuente, cesión de marca, derecho de sublicencia ni derecho a explotar comercialmente la plataforma salvo acuerdo escrito.',
      'El usuario conserva la titularidad que le corresponda sobre sus datos y documentos, pero autoriza el tratamiento técnico necesario para operar el servicio. Las sugerencias o comentarios podrán utilizarse para mejorar el producto sin obligación de compensación, salvo acuerdo escrito distinto.',
    ],
  },
  {
    title: 'Cuartilla 28. Codigo abierto y componentes de terceros',
    body: [
      'La aplicacion puede estar construida con tecnologias como Electron, React, Vite, Supabase, librerias de iconos, dependencias de npm y otros componentes. Cada componente puede tener licencias propias. El uso de tales herramientas no implica que el Titular sea propietario de ellas ni que pueda modificar sus condiciones.',
      'El usuario acepta que ciertas fallas, vulnerabilidades, incompatibilidades o cambios pueden provenir de componentes de terceros. El Titular hara esfuerzos razonables para mantener dependencias, pero no garantiza correccion inmediata de vulnerabilidades o defectos ajenos.',
      'Cuando una licencia de codigo abierto exija avisos, creditos o terminos adicionales, estos se entenderan incorporados en la medida aplicable. El usuario no debera remover avisos de propiedad, creditos, marcas o referencias tecnicas cuando ello contravenga licencias.',
    ],
  },
  {
    title: 'Cuartilla 29. Soporte, mantenimiento y tiempos de respuesta',
    body: [
      'Salvo un plan o acuerdo de nivel de servicio que indique lo contrario, el soporte se presta conforme a disponibilidad y sin tiempo de respuesta garantizado. El usuario puede reportar errores, solicitudes o fallas, pero el Titular no está obligado a implementar toda sugerencia ni a resolver asuntos ajenos al alcance contratado.',
      'El mantenimiento puede requerir interrupciones, actualizaciones, migraciones, reinicios, pruebas o cambios de estructura. Se procurará reducir afectaciones y comunicar mantenimientos previsibles cuando resulte razonable.',
      'El usuario debe describir errores de forma clara, evitar enviar datos sensibles innecesarios y conservar respaldos antes de permitir pruebas o diagnosticos. El soporte no incluye asesoria juridica, reparacion de equipos, recuperacion garantizada de datos ni administracion interna del despacho.',
    ],
  },
  {
    title: 'Cuartilla 30. Disponibilidad y continuidad',
    body: [
      'La aplicacion puede no estar disponible de forma continua. Puede fallar por internet, servidor, proveedor de base de datos, mantenimiento, cambios de version, errores de autenticacion, bloqueo de correo, antivirus, firewall, expiracion de sesion, problemas de instalacion o causas no imputables al Titular.',
      'Salvo acuerdo escrito específico, el Titular no garantiza disponibilidad 24/7, un porcentaje mínimo de actividad, recuperación inmediata ni ausencia total de errores. El usuario debe contar con planes alternos para trabajar y cumplir obligaciones cuando el sistema no esté disponible.',
      'La indisponibilidad temporal no libera al usuario de sus obligaciones profesionales, procesales, laborales, fiscales o contractuales. La app es una herramienta auxiliar y no debe ser el unico medio de operacion critica.',
    ],
  },
  {
    title: 'Cuartilla 31. Actualizaciones obligatorias y migraciones',
    body: [
      'El Titular podrá requerir actualizaciones para corregir errores, atender vulnerabilidades, mantener compatibilidad, migrar datos o incorporar funciones. Las versiones antiguas pueden perder soporte o interoperabilidad cuando mantenerlas implique un riesgo razonable.',
      'Las actualizaciones automáticas sustituyen archivos de la aplicación y no deben eliminar deliberadamente la información del usuario almacenada en servicios conectados. No obstante, toda migración implica riesgos residuales; por ello el usuario debe conservar respaldos externos y no interrumpir una instalación en curso.',
      'Si el usuario rechaza una actualización de seguridad necesaria, puede perder compatibilidad o soporte. Los cambios contractuales materiales no se tendrán por aceptados únicamente por una actualización silenciosa cuando la ley requiera aviso o consentimiento expreso.',
    ],
  },
  {
    title: 'Cuartilla 32. Distribución controlada, admisión y baja de usuarios',
    body: [
      'La distribución controlada puede limitar usuarios, despachos, colaboradores, archivos, almacenamiento, invitaciones o funciones. El Titular podrá admitir o rechazar altas por capacidad técnica, seguridad, prevención de abuso, incumplimiento o necesidad razonable de controlar la operación.',
      'Una invitación no otorga acceso indefinido ni propiedad sobre el servicio. El Titular podrá cerrar registros, modificar límites futuros o suspender nuevas altas, respetando los periodos pagados y los derechos irrenunciables que resulten aplicables.',
      'Se procurará avisar los cambios relevantes. En casos de seguridad, fraude, abuso, falla grave, mandato de autoridad o riesgo para terceros, el acceso afectado podrá suspenderse de inmediato mientras se investiga, con oportunidad razonable de aclaración cuando no se comprometa la protección del sistema.',
    ],
  },
  {
    title: 'Cuartilla 33. Comunicaciones oficiales',
    body: [
      'Las comunicaciones oficiales podrán realizarse por correo registrado, avisos dentro de la aplicación, página web, portal, documentos publicados o cualquier medio razonable. El usuario debe mantener sus datos actualizados y revisar avisos.',
      'El Titular no responde si el usuario no lee correos, si su proveedor los envia a spam, si perdio acceso al correo, si compartio credenciales o si no reviso actualizaciones disponibles. La obligacion de mantenerse informado recae tambien en el usuario.',
      'Los avisos sobre cambios de Terminos, privacidad, precios, funciones o seguridad surtiran efectos conforme al texto indicado en el aviso o, en su defecto, desde su publicacion o puesta a disposicion, salvo que la ley exija plazo o consentimiento especifico.',
    ],
  },
  {
    title: 'Cuartilla 34. Modificación de términos',
    body: [
      'El Titular podrá actualizar estos Términos por cambios legales, técnicos, de seguridad, producto, proveedores o modelo comercial. La versión vigente, su fecha y un medio de consulta permanente estarán disponibles en el portal.',
      'Los cambios materiales se comunicarán con anticipación razonable y surtirán efectos hacia adelante. Cuando alteren de forma esencial un plan pagado o la ley exija consentimiento expreso, no bastará una cláusula de aceptación automática ni se afectará retroactivamente el periodo contratado.',
      'Si el usuario no acepta una modificación futura podrá dejar de usar el servicio, cancelar renovaciones y respaldar su información. Las correcciones no materiales, aclaraciones, medidas urgentes de seguridad y cambios favorables podrán aplicarse desde su publicación.',
    ],
  },
  {
    title: 'Cuartilla 35. Terminacion por el usuario',
    body: [
      'El usuario puede dejar de usar la aplicacion en cualquier momento. Antes de hacerlo debe descargar, exportar o respaldar informacion que necesite conservar, siempre que la funcion correspondiente este disponible y que tenga permisos para acceder a dicha informacion.',
      'La desinstalacion local no necesariamente elimina cuentas, datos en nube, despachos, archivos compartidos o informacion asociada a otros colaboradores. El usuario debera solicitar eliminacion o ejercer derechos aplicables por los canales disponibles.',
      'Si el usuario pertenece a un despacho de otro propietario, su baja puede no eliminar los datos del despacho. La informacion cargada puede quedar bajo control del propietario o conforme a obligaciones legales, contractuales o profesionales aplicables.',
    ],
  },
  {
    title: 'Cuartilla 36. Terminacion o suspension por el Titular',
    body: [
      'El Titular podrá suspender o terminar el acceso por incumplimiento, riesgo de seguridad, uso abusivo, falta de pago, cierre del servicio, requerimiento de autoridad, violación de derechos de terceros o conducta que comprometa la operación.',
      'Cuando sea posible y no exista riesgo, se podra otorgar oportunidad razonable para respaldar informacion. No obstante, en casos graves o urgentes, el acceso puede suspenderse de inmediato.',
      'La terminacion no elimina obligaciones pendientes, responsabilidades por uso indebido, deberes de confidencialidad, obligaciones de pago ya generadas ni disposiciones que por su naturaleza deban subsistir.',
    ],
  },
  {
    title: 'Cuartilla 37. Responsabilidad del usuario por su contenido',
    body: [
      'El usuario es el unico responsable por contenido que suba, capture, edite, comparta, descargue o elimine. Esto incluye legalidad, exactitud, autorizacion, permisos, confidencialidad, derechos de autor, datos personales, informacion sensible, secretos, pruebas y documentos sujetos a reserva.',
      'El usuario mantendra indemne al Titular frente a reclamaciones, danos, multas, gastos, honorarios, sanciones o responsabilidades derivadas de contenido ilicito, uso indebido, carga no autorizada, infraccion de derechos, incumplimiento de confidencialidad o violacion de datos personales imputable al usuario o a colaboradores autorizados por el.',
      'La obligacion de indemnidad operara en la medida permitida por la ley y no cubrira actos dolosos o directamente imputables al Titular cuando una autoridad competente asi lo determine.',
    ],
  },
  {
    title: 'Cuartilla 38. Limitacion general de responsabilidad',
    body: [
      'En la máxima medida permitida por la ley, el Titular no responderá por daños indirectos, incidentales, especiales, punitivos o consecuenciales; lucro cesante; pérdida de oportunidad, negocio, reputación o clientes; ni por perjuicios derivados de plazos no verificados, datos sin respaldo, decisiones profesionales, contenido del usuario, actos de colaboradores o fallas de servicios ajenos.',
      'Cuando exista responsabilidad directa legalmente limitable, la responsabilidad acumulada del Titular por todos los hechos relacionados con un mismo evento no excederá el importe efectivamente pagado por el usuario por el servicio durante los tres meses anteriores al primer hecho reclamado. Este tope no opera cuando una norma imperativa o una resolución firme exija una reparación distinta.',
      'La exclusión y el tope no comprenden dolo, mala fe, conducta intencional, responsabilidad que no pueda renunciarse, derechos irrenunciables de consumidores ni incumplimientos directamente imputables que la ley prohíba limitar. El usuario deberá adoptar medidas razonables para evitar o reducir daños y comunicar la reclamación con información suficiente tan pronto como sea posible.',
    ],
  },
  {
    title: 'Cuartilla 39. Caso fortuito, fuerza mayor y terceros',
    body: [
      'El Titular no sera responsable por incumplimientos, retrasos, fallas o perdida de disponibilidad derivados de caso fortuito, fuerza mayor o causas fuera de control razonable, incluyendo fallas de energia, internet, servidores, proveedores, ataques, desastres, actos de autoridad, conflictos, errores de plataformas, cambios legales, bloqueos, fallas masivas de servicios tecnologicos o eventos imprevisibles.',
      'Toda plataforma conectada conserva riesgos técnicos residuales. El usuario debe prever contingencias y no utilizar la herramienta como único mecanismo de trabajo crítico.',
      'Cuando ocurra un evento de esta naturaleza, el Titular podra suspender, limitar, modificar o reanudar el servicio segun disponibilidad, sin responsabilidad por danos indirectos o por informacion que el usuario no haya respaldado.',
    ],
  },
  {
    title: 'Cuartilla 40. Relacion con derechos de consumo',
    body: [
      'Judicial Managment se dirige principalmente a profesionales y despachos que utilizan la herramienta en su actividad. Si una persona tiene la calidad legal de consumidora, estos Términos se interpretarán conforme a la Ley Federal de Protección al Consumidor y no reducirán sus derechos irrenunciables.',
      'No serán exigibles cláusulas que permitan modificar unilateralmente obligaciones esenciales en perjuicio del consumidor, liberen al proveedor de responsabilidad civil en casos prohibidos, impongan formalidades desproporcionadas, reduzcan plazos legales, sometan obligatoriamente a jurisdicción extranjera o impliquen renuncia a protecciones de orden público.',
      'La información comercial, precios, restricciones y mecanismos de cancelación deberán ser claros. Las limitaciones de responsabilidad restantes buscan asignar riesgos tecnológicos previsibles de forma proporcional y serán aplicadas solo hasta donde la legislación permita.',
    ],
  },
  {
    title: 'Cuartilla 41. Aviso de no garantia',
    body: [
      'Salvo las garantías expresas y derechos irrenunciables que resulten aplicables, la aplicación se proporciona según disponibilidad. No se garantiza operación ininterrumpida, compatibilidad universal, ausencia absoluta de errores, recuperación de información no respaldada, exactitud jurídica de resultados automatizados ni idoneidad como único sistema para una obligación profesional específica.',
      'Las demostraciones, capturas, hojas de ruta, planes futuros, prototipos o conversaciones no constituyen garantía contractual independiente salvo que se documenten expresamente con alcance, versión, precio y vigencia. La publicidad y oferta obligarán en los términos que establezca la legislación aplicable.',
      'El usuario acepta los riesgos residuales razonables de toda herramienta tecnológica y se obliga a acompañar su uso con respaldos, supervisión humana, controles de acceso, actualización de equipos y verificación profesional.',
    ],
  },
  {
    title: 'Cuartilla 42. Exportacion, portabilidad y continuidad de informacion',
    body: [
      'Las funciones de exportación, descarga o portabilidad pueden variar según módulo, permisos, formato y plan. El usuario debe mantener sus propios respaldos y verificar la integridad de cada exportación.',
      'Cuando existan funciones de exportacion, el usuario sera responsable de verificar que los archivos exportados sean completos, legibles, actuales y suficientes. La exportacion no garantiza valor probatorio, integridad certificada, sello de tiempo, firma electronica avanzada ni aceptacion por autoridades.',
      'Si el servicio termina, el Titular procurará establecer un periodo razonable de descarga o migración cuando sea técnicamente posible, sin garantizar conservación indefinida si el usuario no actúa dentro del plazo comunicado.',
    ],
  },
  {
    title: 'Cuartilla 43. Integraciones con portales publicos',
    body: [
      'La pagina y la aplicacion pueden incluir accesos rapidos a portales como Poder Judicial de la Federacion, Poder en Linea, Suprema Corte de Justicia de la Nacion u otros sitios. Estos accesos son enlaces externos para comodidad del usuario y no implican afiliacion, autorizacion, patrocinio, control, garantia ni responsabilidad sobre dichos sitios.',
      'El usuario debe revisar terminos, disponibilidad, autenticidad y seguridad de cada portal externo. El Titular no responde por cambios, caidas, errores, informacion, tramites, descargas, requisitos, certificados, credenciales o decisiones de portales ajenos.',
      'Si un enlace externo falla o cambia, ello no constituye incumplimiento esencial de la aplicacion. El usuario puede acceder directamente al portal oficial por otros medios.',
    ],
  },
  {
    title: 'Cuartilla 44. Autoridades, requerimientos y conservacion',
    body: [
      'El Titular podra conservar o revelar informacion cuando sea necesario para cumplir obligaciones legales, requerimientos de autoridad competente, defensa de derechos, investigacion de abuso, seguridad, prevencion de fraude o cumplimiento de estos Terminos, siempre dentro del marco legal aplicable.',
      'El usuario acepta que ciertos datos pueden conservarse durante plazos razonables aun despues de cancelacion, baja o eliminacion, cuando sean necesarios para cumplimiento legal, responsabilidades nacidas del tratamiento, auditoria, seguridad, cobro, defensa o resolucion de controversias.',
      'La eliminacion solicitada por el usuario se atendera conforme a la ley, posibilidades tecnicas, derechos de terceros, obligaciones de conservacion y caracteristicas del despacho compartido.',
    ],
  },
  {
    title: 'Cuartilla 45. Conflictos entre usuarios de un mismo despacho',
    body: [
      'El Titular no interviene como arbitro interno en disputas entre propietario, administradores, editores, lectores, socios, abogados, clientes, trabajadores o colaboradores. Los conflictos sobre propiedad de informacion, acceso, baja, pago, autoria, eliminacion o uso de datos deberan resolverse entre las partes o por la autoridad competente.',
      'Cuando existan reclamaciones contradictorias, el Titular podra congelar accesos, conservar registros o atender al propietario registrado del despacho, salvo orden de autoridad, evidencia tecnica concluyente o disposicion legal aplicable.',
      'El usuario debe documentar acuerdos internos sobre administracion de despachos, propiedad de expedientes, salida de colaboradores, confidencialidad, resguardo y entrega de informacion. La aplicacion no sustituye dichos acuerdos.',
    ],
  },
  {
    title: 'Cuartilla 46. Suscripciones, renovación y prueba limitada',
    body: [
      'El Titular podrá ofrecer una versión gratuita, prueba temporal, planes mensuales, módulos premium y límites por despachos, colaboradores, almacenamiento o funciones. Cada oferta indicará las condiciones vigentes antes de que el usuario proporcione datos de pago o confirme la contratación.',
      'Una renovación automática requerirá consentimiento expreso. Se enviará el aviso previo exigible, incluyendo al menos el recordatorio legal aplicable antes del cobro recurrente, y se facilitará la cancelación inmediata sin penalización indebida. La cancelación impedirá cobros posteriores, pero no revierte automáticamente servicios ya consumidos ni obligaciones válidamente generadas.',
      'Los cambios de precio se notificarán antes de la renovación afectada. El usuario podrá no renovar si no acepta el nuevo importe. Los reembolsos se resolverán conforme a la oferta, el medio de pago y los derechos imperativos aplicables.',
    ],
  },
  {
    title: 'Cuartilla 47. Uso internacional y ubicacion de datos',
    body: [
      'Aunque el proyecto se orienta principalmente a Mexico y toma como referencia Coahuila, la infraestructura tecnologica puede operar con proveedores ubicados en otras jurisdicciones o con transferencia tecnica internacional de datos. El usuario acepta esta posibilidad en la medida necesaria para operar el servicio y conforme al aviso de privacidad aplicable.',
      'Si el usuario esta sujeto a reglas especiales de otra jurisdiccion, cliente extranjero, contrato de confidencialidad internacional o regulacion sectorial, debe verificar por su cuenta si puede usar la aplicacion y cargar datos en proveedores de nube.',
      'El Titular no garantiza cumplimiento con todas las legislaciones extranjeras. El uso fuera de Mexico o con datos sujetos a regimenes especiales se realiza bajo responsabilidad del usuario, salvo acuerdo escrito especifico.',
    ],
  },
  {
    title: 'Cuartilla 48. Cesion, subcontratacion y cambios del proyecto',
    body: [
      'El Titular podra subcontratar servicios tecnicos, migrar proveedores, cambiar infraestructura, asociarse, transferir activos, crear una persona moral, vender el proyecto, licenciar la tecnologia o reorganizar la operacion, siempre procurando respetar derechos legales aplicables y avisos de privacidad.',
      'El usuario no podrá ceder su cuenta, licencia o permisos sin autorización, salvo que la función de despacho permita invitar colaboradores. La cuenta es personal y el usuario responde por la actividad realizada con sus credenciales.',
      'Si en el futuro el proyecto pasa de persona fisica a persona moral, estos Terminos podran actualizarse para reflejar al nuevo responsable contractual, sin afectar derechos irrenunciables ni obligaciones ya generadas.',
    ],
  },
  {
    title: 'Cuartilla 49. Ley aplicable, competencia y medios alternos',
    body: [
      'Estos Términos se rigen por la legislación mexicana. Las partes procurarán primero una solución directa y de buena fe, sin que ese acercamiento suspenda plazos legales ni sea requisito para acudir a una autoridad cuando la ley permita acción inmediata.',
      'Salvo competencia territorial obligatoria, derechos de consumo o disposiciones especiales, las controversias civiles podrán someterse a los tribunales competentes de Torreón, Coahuila de Zaragoza. Esta elección no obliga a una persona consumidora a renunciar al foro que la ley le reconozca.',
      'Nada impide acudir a PROFECO, a la autoridad competente en protección de datos personales, a autoridades judiciales, administrativas o especializadas. El arbitraje o mediación solo procederá mediante consentimiento válido y separado cuando corresponda.',
    ],
  },
  {
    title: 'Cuartilla 50. Integridad, supervivencia y lectura completa',
    body: [
      'Estos Términos, el aviso de privacidad, la oferta o plan contratado, las licencias de terceros y los avisos incorporados por referencia integran el acuerdo aplicable. Si existe un contrato separado firmado por las partes, prevalecerá únicamente sobre las materias que regule expresamente.',
      'Las cláusulas de propiedad intelectual, confidencialidad, límites válidos de responsabilidad, respaldos, indemnidad, datos personales, suspensión, terminación y defensa de derechos subsistirán en la medida necesaria por su naturaleza. La nulidad parcial no invalida el resto del contrato.',
      'El usuario declara haber tenido oportunidad real de consultar y conservar estos Términos antes de aceptar. Este documento es un borrador contractual preparado para revisión jurídica profesional y deberá ser validado por un abogado mexicano antes de una distribución comercial abierta.',
    ],
  },
  {
    title: 'Cuartilla 51. Referencias normativas y criterio de interpretación',
    body: [
      'La redacción considera, entre otras disposiciones, los artículos aplicables del Código Civil Federal sobre daños, caso fortuito y regulación convencional de responsabilidad; los artículos del Código de Comercio relativos a mensajes de datos; la Ley Federal de Protección al Consumidor en materia de comercio electrónico, contratos de adhesión, cláusulas inválidas, cobros recurrentes y cancelación; y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares sobre principios, aviso de privacidad, seguridad, confidencialidad y derechos ARCO.',
      'Las referencias legales son informativas y no sustituyen la revisión de reformas, criterios administrativos, jurisprudencia, reglas fiscales, disposiciones locales ni circunstancias concretas del modelo comercial. Prevalecerá siempre el texto oficial vigente y la interpretación de la autoridad competente.',
      'Antes de habilitar pagos al público, el Titular deberá completar y validar con su abogado la identidad contractual, domicilio y teléfono de contacto, datos fiscales, política de cancelación y reembolso, aviso de privacidad integral, tratamiento de datos sensibles, encargados, transferencias y cualquier requisito de registro de contrato de adhesión que resulte aplicable.',
    ],
  },
]
