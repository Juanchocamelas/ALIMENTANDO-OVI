/* ¿POR QUÉ USAR FORMAT Y NO STRING?

 1. RAZÓN PARA USAR FORMAT: CAMBIA NO SOLO EL FORMATO, SINO TAMBIÉN CÓMO SERÁ TRATADO ESE DATO DE AHORA EN ADELANTE EN LA BASE DE DATOS. 

 STRING NO LO HACE: NO CAMBIA EL FORMATO, PERO SÍ CÓMO SERÁ INTERPRETADO, 
    "PERO SOLO DENTRO DEL CÓDIGO".

 LA RAZÓN POR LA QUE STRING NO FUNCIONARÍA ES PORQUE ESTAMOS USANDO BUSCARV 
    DESDE LA INTERFAZ DE GOOGLE SHEETS, Y ESTE SOLO FUNCIONA SI EL CAMBIO 
   SE REFLEJA DIRECTAMENTE EN LA BASE DE DATOS.


*/

function convertirYVerificarTexto() {
  const hojasYColumnas = [
    { hoja: "Facturación - Administración de facturación", columnas: [4, 5] },
    { hoja: "Copia de VALIDACION RECHAZOS", columnas: [1] },
    { hoja: "Copia de MAESTRA", columnas: [7] },
    { hoja: "Copia de Directorio MultiClaves - Corred", columnas: [2] },
    { hoja: "Copia de Lista Fact Voluntarios", columnas: [2] }
  ];

  hojasYColumnas.forEach(({ hoja, columnas }) => {
    const hojaActual = hojaActiva.getSheetByName(hoja);
    const inicioFila = 2;
    const numFilas = hojaActual.getLastRow() - 1;
    if (numFilas < 1) return;

    Logger.log(`\nHoja: ${hoja}`);

    columnas.forEach(col => {
      const rango = hojaActual.getRange(inicioFila, col, numFilas, 1);
      const formatos = Array(numFilas).fill(["@"]);

      // Aplica formato texto
      rango.setNumberFormats(formatos);

      // Verifica si quedó aplicado
      const aplicados = rango.getNumberFormats();
      const todosTexto = aplicados.every(fila => fila[0] === "@");
      const letraCol = String.fromCharCode(64 + col);
      Logger.log(`Columna ${letraCol} => ${todosTexto ? "todos son [@]" : "hay formatos diferentes"}`);
    });
  });
}




