

/* ESTRUCTURA QUE DEBE EXIGIRSE

// UNSHIFT Y SETVALUE EN VALIDACIONES => UNSHIFT MUESTRA EL PRIMER ELEMENTO, PERO SOLO DENTRO DE LA LISTA, Y SETVALUES LO PRIMERO QUE VEZ EN LA VALIDACION, SIN ESTAR DENTRO DE LA LISTA


// SI EL TIPO NO ESTA RELACIONADO O ATADO A NINGUN TIPO DE COMPROBANTE, ENTONCES POR DEFECTO DEJAMOS EN LA LISTA DESPLEGABLE ESE TIPO => CHECK
// SI EL TIPO NO EXISTE, Y NO ES NOTA CREDITO SE DEJA VACIA => CHECK

// SI ES MULTICLAVE, PERO ES NOTA CREDITO, ENTONCES POR DEFECTO DEJAMOS EN LA LISTA DESPLEGABLE NOTA CREDITO, COMO PRIMERA OPCION Y VALOR PREDETERMINADO => CHECK
// SI ES CORREDOR DE SEGUROS, PERO ES NOTA CREDITO, SOLO SE PONE DE PRIMERO EN LA LISTA, PERO EL VALOR PREDETERMINADO ES CORREDOR DE SEGUROS => CHECK

// SI ES NOTA CREDITO, Y SOLO NOTA CREDITO, EN LA VALIDACION SOLO APARECERA NOTA CREDITO =>  CHECK

// MANTENER PREFERENCIA DE QUE NOTA CREDITO APAREZCA PRIMERO EN LA LISTA => CHECK */


function IntermedarioAlimentandoOVI2() {
  const hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  const hojaOrigen = hojaActiva.getSheetByName('Facturación - Administración de facturación');
  const hojaDestino = hojaActiva.getSheetByName('Copia de VALIDACION RECHAZOS');

  const llavesRechazo = new Set(hojaDestino.getRange('A:A').getValues().flat().filter(Boolean));
  const datos = hojaOrigen.getDataRange().getValues().slice(1); // Sin encabezado
  const columnasNecesarias = [1, 2, 3, 9, 10, 11, 12, 13, 14, 15, 19, 20, 26, 27, 18];

  const filasFiltradas = [];
  const tipos = [];
  const tiposComprobanteTemp = [];

  datos.forEach(fila => {
    const estado = fila[6];
    const llave = fila[4];
    const origen = fila[7];
    const tipoComprobante = fila[12];

    if ((estado === "Activo" || estado === "Cancelado") && !llavesRechazo.has(llave)) {

     const tipo = ["MULTICLAVES", "CORREDORES"].includes(origen) ? origen : "";  // SI no corresponde a multiclave o corredor, se marca como un valor vacio, ya sea por un error o lo que sea

      const filaFiltrada = [tipo].concat(columnasNecesarias.map(i => fila[i]));  // filaFiltrada, contiene tanto cuantas filas a pegar gracias a [tipo] y cuantas columnas a [pegar] conformando filaFiltrada
      filasFiltradas.push(filaFiltrada);
      tipos.push(tipo);
      tiposComprobanteTemp.push(tipoComprobante);
    }
  });

  Logger.log(`${filasFiltradas.length} filas filtradas.`);

  if (filasFiltradas.length === 0) return;

  const ultimaFilaDestino = hojaDestino.getLastRow();
  const filasDisponibles = hojaDestino.getMaxRows() - ultimaFilaDestino;
  const columnasTotal = columnasNecesarias.length  ;  // incluyendo el tipo, porque aunque tenga varias columnas, solo se insertan si cumple las validaciones de estado
 
  if (filasDisponibles < filasFiltradas.length) {

    hojaDestino.insertRowsAfter(ultimaFilaDestino, filasFiltradas.length - filasDisponibles);  // Insercion de filas vacias, usando tipo

    const rangoInsertado = hojaDestino.getRange(ultimaFilaDestino + 1, 2, filasFiltradas.length, 1);  // => Evitando herencia, solo en la columna B (Donde ira tipo)
    rangoInsertado.clearDataValidations();

    hojaDestino.getRange(ultimaFilaDestino + 1, 7, filasFiltradas.length, columnasTotal).setValues(filasFiltradas.map(fila => fila.slice(1))); // omites la columna tipo, en "FILAS FILTRADAS" (RANGE), para que concuerde con las columnasTotales, porque, tipo solo es para las validaciones de mas adelante y antes se uso solo para insertar las fials correspondientes

  }


  // Validaciones sincronizadas
  const rangoDestinoTipo = hojaDestino.getRange(ultimaFilaDestino + 1, 2, filasFiltradas.length, 1);

  const valoresFinales = [];  // → valor predeterminado que aparece en la celda (debe estar en la lista)
  const validaciones = []; // =>  // → lista desplegable con opciones válidas (incluye nota crédito si aplica)

  for (let i = 0; i < filasFiltradas.length; i++) {
    const tipo = tipos[i];
    const tipoComprobante = tiposComprobanteTemp[i];

    let valoresValidos = [tipo]; // => tipos a los que se les va a hacer una asignacion  ( si ninguno entro en la validacion, se deja el tipo)
    let valorFinal = tipo;  //asignaciones luego de validaciones

    if (tipoComprobante == 91) {
      valoresValidos.unshift("NOTA CREDITO");  // preferencia del usuario de ver siempre nota credito de primeras en la lista (dentro de la lista)

      if (tipo === "MULTICLAVES" || tipo === "") {  // correspondiente a valoresFinales, si es corredor, pues deja corredor, ya que no entra en ninguna validacion, sino hay tipo y es nota credito se deja nota credito
        valorFinal = "NOTA CREDITO"; 
      }
    }

    valoresFinales.push([valorFinal]);

    const validacion = SpreadsheetApp.newDataValidation()
      .requireValueInList(valoresValidos, true)
      .build();

    validaciones.push([validacion]);
  }

  // Aplicamos valores y validaciones
  rangoDestinoTipo.setValues(valoresFinales); // el valor que ve el usuario por defecto
  rangoDestinoTipo.setDataValidations(validaciones); // opciones disponibles en la lista (incluye nota crédito al inicio si corresponde)

  Logger.log("Inserción y validaciones aplicadas con éxito.");
}




