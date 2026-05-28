export interface LegalTermSection {
  title: string
  body: string[]
}

export const legalEffectiveDate = '27 de mayo de 2026'

export const legalIntro = [
  'Estos Terminos y Condiciones constituyen un contrato de adhesion electronico entre el titular persona fisica del proyecto Judicial Managment, actuando por cuenta propia y bajo la marca comercial MR Legal/Judicial Managment, y toda persona que descargue, instale, acceda, pruebe, use, configure, recomiende o administre la aplicacion, la pagina web, el portal beta, el instalador, los modulos, las funciones experimentales, los servicios conectados, las bases de datos, los documentos digitales, los chats, las notificaciones y cualquier herramienta relacionada.',
  'Judicial Managment se ofrece en fase alpha/beta, es decir, como software preliminar, experimental, sujeto a errores, interrupciones, cambios, ajustes, eliminacion de funciones, variaciones de precio, restricciones de acceso y modificaciones tecnicas. El uso de la aplicacion durante esta etapa no debe entenderse como servicio definitivo, estable, ininterrumpido, certificado, auditado, garantizado ni apto como unico medio de resguardo de informacion juridica o documental.',
  'La aceptacion ocurre al descargar, instalar, crear una cuenta, iniciar sesion, confirmar correo, unirse a un despacho, crear un despacho, cargar documentos, registrar expedientes, registrar movimientos, usar Juris, usar el calendario, usar el chat, pagar una suscripcion futura o continuar usando el sistema despues de que estos Terminos se pongan a disposicion del usuario.',
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
    title: 'Cuartilla 02. Fase alpha, beta privada y advertencia reforzada',
    body: [
      'El usuario reconoce que la aplicacion esta en fase alpha y/o beta privada. Esto significa que puede contener errores de programacion, pantallas incompletas, fallas de rendimiento, defectos de sincronizacion, cambios de estructura, diferencias entre versiones, funcionalidades no terminadas, modulos temporales y comportamientos no previstos. La prueba de la aplicacion tiene por objeto evaluar viabilidad, recibir retroalimentacion y mejorar el producto antes de una distribucion comercial amplia.',
      'Durante esta fase, el Titular podra modificar, suspender, limitar, reemplazar o eliminar cualquier modulo, funcion, diseno, precio, periodo de prueba, regla de colaboracion, sistema de permisos, politica de almacenamiento, integracion de correo, integracion de calendario, asistente interno, sistema de seguridad o forma de distribucion, sin que ello genere derecho adquirido a conservar una funcion experimental.',
      'El usuario acepta que no debe depender de la aplicacion como unica fuente de control de terminos judiciales, audiencias, vencimientos, obligaciones de pago, notificaciones oficiales, plazos procesales, promociones, anexos, documentos originales, contratos, expedientes, pruebas o informacion esencial. El uso prudente exige conservar respaldos externos y verificar cualquier informacion con fuentes oficiales o con el expediente fisico/digital correspondiente.',
    ],
  },
  {
    title: 'Cuartilla 03. Marco civil de Coahuila y limites legales de la exencion',
    body: [
      'Estos Terminos se redactan tomando como referencia general el Codigo Civil para el Estado de Coahuila de Zaragoza, particularmente los principios de voluntad contractual, licitud, responsabilidad civil, danos y perjuicios, regulacion convencional de responsabilidad y prohibicion de renunciar anticipadamente a responsabilidades derivadas de dolo, mala fe o supuestos no renunciables. El documento tambien considera normas federales aplicables a datos personales y relaciones de consumo cuando resulten procedentes.',
      'El usuario entiende que la responsabilidad civil puede pactarse y limitarse en la medida permitida por la ley, pero ninguna clausula de estos Terminos debe interpretarse como renuncia anticipada a derechos irrenunciables, como autorizacion para actuar con dolo o mala fe, como eliminacion de obligaciones impuestas por normas de orden publico, como exclusion absoluta de responsabilidad en casos donde la ley lo prohiba o como traslado indebido de responsabilidad al usuario cuando la legislacion aplicable no lo permita.',
      'Si una autoridad competente determina que alguna limitacion es excesiva, abusiva, ineficaz o no exigible, dicha determinacion afectara solo la porcion invalida, conservandose el resto del contrato en la maxima medida legal. La intencion contractual es asignar riesgos razonables propios de una herramienta alpha/beta, no privar al usuario de derechos minimos inderogables.',
    ],
  },
  {
    title: 'Cuartilla 04. Uso dirigido a profesionales y no sustitucion de criterio juridico',
    body: [
      'Judicial Managment esta pensado para usuarios que cuentan con capacidad profesional o administrativa suficiente para entender que el software es una herramienta de apoyo. La aplicacion no emite resoluciones, no presenta promociones, no valida estrategias procesales, no revisa competencia, no calcula automaticamente todos los plazos legales, no sustituye estudio juridico, no garantiza resultados y no reemplaza la responsabilidad profesional del abogado o despacho.',
      'Cualquier informacion generada por modulos, listas, plantillas, reportes, calendario, asistente Juris o referencias internas debe considerarse orientativa, administrativa y sujeta a revision humana. El usuario debe confirmar los datos con el expediente, con el juzgado, con la legislacion vigente, con acuerdos publicados, con sistemas oficiales y con su propio criterio profesional antes de tomar decisiones.',
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
      'El uso de la aplicacion puede implicar tratamiento de datos personales de usuarios, colaboradores, clientes, partes, representantes, contactos, testigos, trabajadores, beneficiarios, contrapartes y terceros. Estos datos pueden incluir nombres, correos, telefonos, domicilios, datos patrimoniales, datos laborales, informacion de expedientes, documentos legales y datos sensibles cuando el usuario los cargue bajo su responsabilidad.',
      'El Titular debera poner a disposicion un aviso de privacidad y mecanismos razonables para el ejercicio de derechos ARCO cuando resulte aplicable. El usuario acepta que, en fase alpha/beta, algunos procesos pueden evolucionar y que debera revisar periodicamente la pagina, la aplicacion o los comunicados oficiales para conocer actualizaciones.',
      'Nada en estos Terminos exime al Titular de las obligaciones legales irrenunciables en materia de datos personales. La limitacion de responsabilidad por perdida de datos se interpreta de forma compatible con las medidas de seguridad, notificacion de vulneraciones y derechos de titulares previstos en la legislacion aplicable.',
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
    title: 'Cuartilla 12. Perdida de datos, respaldos y exencion en fase alpha',
    body: [
      'Por tratarse de una aplicacion alpha/beta, el usuario acepta que puede existir perdida, corrupcion, duplicacion, desincronizacion, retraso, incompatibilidad, eliminacion accidental o inaccesibilidad temporal o definitiva de datos. El usuario se obliga a mantener respaldos externos, verificables y actualizados de todo documento, expediente, movimiento, calendario, fecha critica, cliente, contrato, evidencia o informacion que considere importante.',
      'En la maxima medida permitida por la ley, el Titular persona fisica no sera responsable por perdida de datos, perdida de documentos, interrupcion de acceso, errores de captura, eliminacion por el usuario, eliminacion por colaboradores autorizados, fallas de internet, fallas de equipo, fallas de terceros, fallas de proveedores, eventos de fuerza mayor, pruebas de desarrollo, migraciones, cambios de version, cambios de base de datos o uso de la aplicacion como unico repositorio.',
      'Esta limitacion no pretende excluir responsabilidad por dolo, mala fe, conducta intencional, incumplimiento legal irrenunciable o supuestos donde la ley expresamente prohiba limitar responsabilidad. Si una autoridad competente determina responsabilidad imputable al Titular, esta se limitara, en la medida legalmente posible, al monto efectivamente pagado por el usuario por el servicio en los tres meses previos al evento, o al monto minimo permitido por la ley si dicha limitacion no fuera valida.',
    ],
  },
  {
    title: 'Cuartilla 13. Deber reforzado de respaldo del usuario',
    body: [
      'El usuario acepta que el respaldo de informacion juridica es una obligacion propia y continua. Debe conservar copias fisicas o digitales independientes de expedientes, promociones, acuerdos, sentencias, contratos, identificaciones, poderes, anexos, constancias, recibos, convenios, documentos laborales y cualquier archivo que pueda ser necesario para defensa, prueba, auditoria, cumplimiento o atencion al cliente.',
      'La aplicacion no debe utilizarse como archivo unico, archivo maestro, caja fuerte digital exclusiva, sistema de fe publica, repositorio oficial o sustituto de obligaciones profesionales de conservacion documental. La existencia de funciones de carga de PDF, Word, imagenes o notas no cambia esta obligacion.',
      'Si el usuario decide operar sin respaldos externos, acepta que lo hace bajo su propio riesgo. La falta de respaldo externo se considerara incumplimiento de una medida elemental de prudencia, especialmente en una etapa alpha/beta expresamente anunciada como experimental.',
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
      'Durante alpha/beta, la aplicacion puede ser gratuita, parcialmente gratuita, limitada, de prueba, por invitacion, con acceso controlado o con funciones futuras sujetas a pago. El Titular puede modificar precios, paquetes, limites, funciones, duracion de prueba, condiciones de suscripcion, promociones, planes y politicas comerciales antes de lanzamiento o durante la beta.',
      'Ninguna funcion gratuita durante alpha/beta crea derecho permanente a gratuidad. La continuidad del servicio puede condicionarse a pago, suscripcion, renovacion, verificacion, aceptacion de nuevos terminos, disponibilidad tecnica o permanencia dentro del programa beta.',
      'Si se implementan pagos, el usuario debera revisar el plan contratado, precio, impuestos, periodicidad, forma de cancelacion, restricciones y politica de reembolsos. Mientras no exista sistema de cobro formal, cualquier referencia a precios futuros sera informativa y sujeta a cambio.',
    ],
  },
  {
    title: 'Cuartilla 17. Cambios de funciones y ausencia de derecho adquirido',
    body: [
      'El usuario acepta que las funciones de expedientes, archivo, clientes, movimientos, calendario, laboral, chat, documentos, Juris, dashboard, seguridad, 2FA, Google, descarga, invitaciones, roles, reportes y cualquier otra pueden modificarse. Los cambios pueden responder a mejoras, errores, seguridad, costo, viabilidad legal, decisiones de producto o comentarios de beta.',
      'El Titular podra cambiar nombres de modulos, orden de pantallas, colores, iconos, flujos, permisos, estructuras de datos, limites de archivos, integraciones, opciones de busqueda y reglas de colaboracion. La modificacion o eliminacion de funciones experimentales no sera incumplimiento, salvo obligaciones especificas pactadas por escrito en contrato separado.',
      'El usuario debe revisar notas de version o comunicados cuando existan. Si no esta de acuerdo con un cambio, su remedio principal sera dejar de usar la aplicacion, exportar o respaldar su informacion en la medida en que la funcion este disponible y cancelar su participacion beta.',
    ],
  },
  {
    title: 'Cuartilla 18. Juris, bot interno y ausencia de inteligencia juridica vinculante',
    body: [
      'Juris es un asistente interno basado en reglas, palabras clave, textos predefinidos o logica experimental. No es abogado, no sustituye consulta juridica, no interpreta expedientes completos, no evalua pruebas, no garantiza legislacion vigente, no emite dictamen profesional y no debe utilizarse como base unica para decisiones legales.',
      'Las respuestas de Juris pueden contener errores, generalizaciones, omisiones, desactualizaciones o recomendaciones no aplicables al caso concreto. El usuario debe verificar cualquier informacion con fuentes oficiales, legislacion vigente y criterio profesional antes de actuar.',
      'El Titular no responde por danos derivados de confiar exclusivamente en Juris, especialmente cuando el usuario no revise la informacion o la use para plazos, audiencias, promociones, demandas, contestaciones, recursos, convenios, estrategias o asesorias a terceros.',
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
      'Los usuarios que sean abogados, auxiliares o colaboradores deben cumplir deberes de secreto profesional, confidencialidad, reserva, lealtad y resguardo de expedientes conforme a su normativa aplicable. El uso de la aplicacion no disminuye esos deberes ni convierte al Titular en responsable de la estrategia de confidencialidad del despacho.',
      'El usuario debe abstenerse de subir informacion cuando no cuente con autorizacion, cuando exista orden de reserva, cuando pueda violar confidencialidad, cuando exceda la finalidad del despacho o cuando el acceso de colaboradores no este adecuadamente limitado.',
      'El Titular mantendra controles razonables de seguridad para operar el servicio, pero no puede asumir obligaciones de secreto profesional propias del abogado frente a sus clientes salvo las obligaciones legales de confidencialidad y proteccion de datos que correspondan al tratamiento tecnico.',
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
      'El usuario recibe una licencia limitada, revocable, no exclusiva, no transferible y condicionada al cumplimiento de estos Terminos para instalar y usar la aplicacion durante la beta o periodo autorizado. No se otorga venta de codigo fuente, cesion de marca, derecho de sublicencia ni derecho a explotar comercialmente la plataforma salvo acuerdo escrito.',
      'El usuario conserva propiedad sobre sus datos y documentos, pero autoriza el tratamiento tecnico necesario para operar el servicio. Cualquier sugerencia, comentario o retroalimentacion enviada durante beta podra utilizarse para mejorar el producto sin obligacion de compensacion, salvo acuerdo escrito distinto.',
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
      'Durante alpha/beta, el soporte puede ser limitado, informal, manual, por disponibilidad del Titular y sin niveles de servicio garantizados. El usuario puede reportar errores, solicitudes, ideas o fallas, pero el Titular no esta obligado a resolver todo reporte, implementar toda sugerencia o responder en plazo determinado salvo acuerdo escrito.',
      'El mantenimiento puede requerir interrupciones, actualizaciones, migraciones, reinicios, pruebas, limpieza de datos, cambios de estructura o bloqueo temporal. En la medida posible se procurara reducir afectaciones, pero la fase experimental implica tolerancia a interrupciones.',
      'El usuario debe describir errores de forma clara, evitar enviar datos sensibles innecesarios y conservar respaldos antes de permitir pruebas o diagnosticos. El soporte no incluye asesoria juridica, reparacion de equipos, recuperacion garantizada de datos ni administracion interna del despacho.',
    ],
  },
  {
    title: 'Cuartilla 30. Disponibilidad y continuidad',
    body: [
      'La aplicacion puede no estar disponible de forma continua. Puede fallar por internet, servidor, proveedor de base de datos, mantenimiento, cambios de version, errores de autenticacion, bloqueo de correo, antivirus, firewall, expiracion de sesion, problemas de instalacion o causas no imputables al Titular.',
      'El Titular no garantiza disponibilidad 24/7, tiempos minimos de actividad, recuperacion inmediata, ausencia de errores ni continuidad indefinida de la beta. El usuario debe contar con planes alternos para trabajar expedientes y cumplir obligaciones aun cuando el sistema no funcione.',
      'La indisponibilidad temporal no libera al usuario de sus obligaciones profesionales, procesales, laborales, fiscales o contractuales. La app es una herramienta auxiliar y no debe ser el unico medio de operacion critica.',
    ],
  },
  {
    title: 'Cuartilla 31. Actualizaciones obligatorias y migraciones',
    body: [
      'El Titular podra requerir actualizaciones para corregir errores, mejorar seguridad, cambiar base de datos, incorporar funciones, retirar modulos o preparar distribucion comercial. Algunas versiones antiguas pueden dejar de funcionar o perder compatibilidad.',
      'Las migraciones de datos pueden implicar riesgos. El usuario debe respaldar informacion antes de actualizar o migrar. El Titular podra realizar esfuerzos razonables de migracion, pero no garantiza que todos los datos, adjuntos, formatos, configuraciones o historiales se conserven intactos durante la fase alpha/beta.',
      'Si el usuario rechaza actualizaciones necesarias, puede perder acceso, seguridad, compatibilidad o soporte. La continuacion del uso despues de una actualizacion implica aceptacion de los cambios tecnicos y funcionales asociados.',
    ],
  },
  {
    title: 'Cuartilla 32. Beta controlada, admision y baja de usuarios',
    body: [
      'La beta puede limitar el numero de usuarios, despachos, expedientes, colaboradores, archivos, invitaciones o funciones. El Titular podra admitir o rechazar usuarios por disponibilidad, seguridad, capacidad tecnica, perfil de prueba, abuso, incumplimiento o necesidad de controlar costos.',
      'El usuario no adquiere derecho indefinido de acceso por haber sido invitado. La beta puede terminar para todos o para ciertos usuarios. El Titular podra cerrar registros, modificar limites, pausar la beta o migrar a una version comercial.',
      'Cuando sea razonablemente posible, se procurara avisar cambios relevantes. Sin embargo, en casos de seguridad, abuso, falla grave, requerimiento legal o riesgo operativo, el acceso puede suspenderse sin aviso previo.',
    ],
  },
  {
    title: 'Cuartilla 33. Comunicaciones oficiales',
    body: [
      'Las comunicaciones oficiales podran realizarse por correo electronico registrado, avisos dentro de la aplicacion, pagina web, mensajes del portal beta, documentos publicados, cambios visibles en la interfaz o cualquier medio razonable. El usuario debe mantener su correo actualizado y revisar avisos.',
      'El Titular no responde si el usuario no lee correos, si su proveedor los envia a spam, si perdio acceso al correo, si compartio credenciales o si no reviso actualizaciones disponibles. La obligacion de mantenerse informado recae tambien en el usuario.',
      'Los avisos sobre cambios de Terminos, privacidad, precios, funciones o seguridad surtiran efectos conforme al texto indicado en el aviso o, en su defecto, desde su publicacion o puesta a disposicion, salvo que la ley exija plazo o consentimiento especifico.',
    ],
  },
  {
    title: 'Cuartilla 34. Modificacion de terminos',
    body: [
      'El Titular podra modificar estos Terminos por cambios legales, tecnicos, comerciales, de seguridad, de producto, de proveedores, de modelo de negocio o de fase alpha/beta a fase comercial. La version vigente sera la publicada en la pagina o en la aplicacion.',
      'Si el usuario continua usando la aplicacion despues de la publicacion de cambios, se entendera que acepta la nueva version, salvo que la ley requiera consentimiento expreso. Si no esta de acuerdo, debera dejar de usar la aplicacion y respaldar su informacion.',
      'Los cambios no buscaran afectar retroactivamente derechos irrenunciables ya adquiridos. Sin embargo, las funciones experimentales, precios futuros, planes, limites y disponibilidad podran cambiar hacia adelante por la naturaleza alpha/beta.',
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
      'El Titular podra suspender o terminar el acceso del usuario por incumplimiento, riesgo de seguridad, uso abusivo, falta de pago futuro, pruebas concluidas, cierre de beta, requerimiento de autoridad, violacion de derechos de terceros, afectacion a otros usuarios o conducta que comprometa la operacion.',
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
      'En la maxima medida permitida por la ley, el Titular no sera responsable por danos indirectos, especiales, incidentales, punitivos, consecuenciales, perdida de oportunidad, lucro cesante, perdida de negocio, perdida de reputacion, perdida de clientes, interrupcion de actividad profesional, perdida de informacion por falta de respaldo, perdida de plazos por no verificar fuentes oficiales o danos derivados del uso experimental del software.',
      'Cualquier responsabilidad directa que legalmente no pueda excluirse se limitara, en la medida permitida, al monto efectivamente pagado por el usuario al Titular por el servicio durante los tres meses anteriores al evento que dio origen a la reclamacion. Si no hubo pago, la responsabilidad se limitara al minimo permitido por la legislacion aplicable.',
      'Esta limitacion no excluye derechos irrenunciables, responsabilidad por dolo, mala fe, conducta intencional, vulneraciones legales no eximibles o supuestos donde una autoridad competente determine que la limitacion es invalida.',
    ],
  },
  {
    title: 'Cuartilla 39. Caso fortuito, fuerza mayor y terceros',
    body: [
      'El Titular no sera responsable por incumplimientos, retrasos, fallas o perdida de disponibilidad derivados de caso fortuito, fuerza mayor o causas fuera de control razonable, incluyendo fallas de energia, internet, servidores, proveedores, ataques, desastres, actos de autoridad, conflictos, errores de plataformas, cambios legales, bloqueos, fallas masivas de servicios tecnologicos o eventos imprevisibles.',
      'La fase alpha/beta aumenta la posibilidad de incidencias tecnicas. El usuario acepta que debe prever contingencias y que la herramienta no debe ser su unico mecanismo de trabajo.',
      'Cuando ocurra un evento de esta naturaleza, el Titular podra suspender, limitar, modificar o reanudar el servicio segun disponibilidad, sin responsabilidad por danos indirectos o por informacion que el usuario no haya respaldado.',
    ],
  },
  {
    title: 'Cuartilla 40. Relacion con derechos de consumo',
    body: [
      'Judicial Managment se dirige principalmente a profesionales, abogados y despachos que usan la herramienta en su actividad. No obstante, si por cualquier razon resulta aplicable la legislacion de proteccion al consumidor, estos Terminos se interpretaran de forma compatible con dicha legislacion y no limitaran derechos irrenunciables.',
      'Ninguna disposicion debe entenderse como autorizacion para imponer obligaciones abusivas, modificar unilateralmente obligaciones esenciales en perjuicio del consumidor cuando la ley lo prohiba, renunciar a protecciones legales o liberar responsabilidad civil en supuestos no permitidos por la Ley Federal de Proteccion al Consumidor.',
      'Las limitaciones aqui previstas buscan reflejar el caracter alpha/beta, el deber de respaldo y la asignacion razonable de riesgos tecnologicos, no desconocer derechos minimos establecidos por normas imperativas.',
    ],
  },
  {
    title: 'Cuartilla 41. Aviso de no garantia',
    body: [
      'La aplicacion se proporciona "tal como esta" y "segun disponibilidad" durante la fase alpha/beta. No se otorgan garantias de comerciabilidad, idoneidad para un fin particular, ausencia de errores, disponibilidad continua, compatibilidad universal, recuperacion de datos, exactitud juridica, integridad documental o cumplimiento de necesidades especificas del usuario.',
      'Las demostraciones, capturas, textos comerciales, conversaciones, planes futuros, prototipos, promesas generales o ideas de desarrollo no constituyen garantia contractual definitiva salvo que se pacten expresamente por escrito y con identificacion del alcance, precio, version y fecha.',
      'El usuario asume el riesgo de probar software preliminar y acepta que la decision de usarlo para informacion real debe ir acompanada de respaldos, supervision profesional y controles internos.',
    ],
  },
  {
    title: 'Cuartilla 42. Exportacion, portabilidad y continuidad de informacion',
    body: [
      'El Titular podra incorporar funciones de exportacion, descarga o portabilidad, pero durante alpha/beta dichas funciones pueden ser parciales, manuales, limitadas o inexistentes. El usuario debe mantener sus propios respaldos para no depender de una exportacion futura.',
      'Cuando existan funciones de exportacion, el usuario sera responsable de verificar que los archivos exportados sean completos, legibles, actuales y suficientes. La exportacion no garantiza valor probatorio, integridad certificada, sello de tiempo, firma electronica avanzada ni aceptacion por autoridades.',
      'Si la beta termina, el Titular podra establecer un periodo razonable de descarga o migracion cuando sea tecnicamente posible, pero no garantiza conservacion indefinida si el usuario no actua dentro del plazo comunicado.',
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
    title: 'Cuartilla 46. Suscripciones futuras y prueba limitada',
    body: [
      'El Titular podra implementar una version limitada gratuita, periodo de prueba de diez dias, planes de pago mensual, version ilimitada, modulos premium, limites por numero de despachos, expedientes, usuarios, almacenamiento, archivos o funciones. Estas condiciones se definiran en comunicados, pagina de precios o contrato actualizado.',
      'La descarga inicial o acceso beta no garantiza precio preferente indefinido, acceso ilimitado, permanencia gratuita ni congelamiento de condiciones. El Titular podra ajustar precios por costos de infraestructura, soporte, almacenamiento, seguridad, proveedores, mercado o mejora del producto.',
      'Cuando se active cobro recurrente, el usuario debera aceptar condiciones especificas de pago, cancelacion, renovacion, facturacion, impuestos y reembolsos. Hasta entonces, cualquier texto de precios futuros es preparatorio y sujeto a cambio.',
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
      'El usuario no podra ceder su cuenta, licencia, acceso beta o permisos sin autorizacion, salvo que la funcion de despacho permita invitar colaboradores. La cuenta es personal y el usuario responde por actividad realizada con sus credenciales.',
      'Si en el futuro el proyecto pasa de persona fisica a persona moral, estos Terminos podran actualizarse para reflejar al nuevo responsable contractual, sin afectar derechos irrenunciables ni obligaciones ya generadas.',
    ],
  },
  {
    title: 'Cuartilla 49. Ley aplicable, competencia y medios alternos',
    body: [
      'En lo no previsto y en la medida que corresponda, estos Terminos se interpretaran conforme a la legislacion mexicana aplicable y, para aspectos civiles locales, tomando como referencia el Estado de Coahuila de Zaragoza. Cuando proceda, las partes procuraran resolver controversias mediante comunicacion directa y buena fe antes de acudir a autoridades.',
      'Salvo derechos irrenunciables, normas de consumo, competencia territorial obligatoria o disposiciones especiales, las partes podran someterse a los tribunales competentes del Estado de Coahuila de Zaragoza para controversias civiles relacionadas con estos Terminos.',
      'Si una controversia corresponde a PROFECO, autoridad de datos personales, autoridad judicial, autoridad administrativa o autoridad especializada por disposicion legal, estos Terminos no impediran el ejercicio de los derechos o acciones que la ley conceda.',
    ],
  },
  {
    title: 'Cuartilla 50. Integridad, supervivencia y lectura completa',
    body: [
      'Estos Terminos, junto con el aviso de privacidad, politicas de precios, comunicados de beta, condiciones de plan, licencias de terceros y avisos dentro de la aplicacion, integran el acuerdo aplicable al uso de Judicial Managment. Si existe contrato escrito separado firmado por el Titular y el usuario, ese contrato prevalecera en lo expresamente pactado.',
      'Las clausulas sobre propiedad intelectual, confidencialidad, limitacion de responsabilidad, perdida de datos, respaldos, indemnidad, ley aplicable, datos personales, suspension, terminacion y defensa de derechos subsistiran aun despues de que el usuario deje de usar la aplicacion.',
      'El usuario declara haber tenido oportunidad de leer estos Terminos antes de usar la aplicacion. Si no entiende alguna disposicion, debe abstenerse de usar el sistema o solicitar asesoria independiente. El uso continuo constituye aceptacion informada dentro de los limites permitidos por la ley.',
    ],
  },
]
