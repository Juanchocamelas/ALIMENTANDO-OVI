function creacionColumnas() {
  const hoja = hojaActiva.getSheetByName("Facturación - Administración de facturación");

  hoja.insertColumnsBefore(5, 5); // Inserta 5 columnas antes de la columna E

  const encabezados = ["LLAVE", "FACTURA1VSOVI", "MAESTRA", "MULTICLAVEOCORREDORES", "FACTVOLUNTARIO"];
  hoja.getRange(1, 5, 1, encabezados.length).setValues([encabezados]); // comienza en la E

  Logger.log("Se han insertado correctamente 5 nuevas columnas antes de la columna E y asignado nombres.");
}
