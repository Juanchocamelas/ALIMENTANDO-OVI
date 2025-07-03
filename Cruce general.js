function CruceGeneral() {
  const hojaOrigen = hojaActiva.getSheetByName('Facturación - Administración de facturación');
  const hojaExterna = hojaActiva.getSheetByName('Copia de VALIDACION RECHAZOS');

  const ultimaFila = hojaOrigen.getLastRow();
  const ultimaFilaExterna = hojaExterna.getLastRow();

  // 🔑 LLAVE LOCAL
  hojaOrigen.getRange("E2:E" + ultimaFila).setFormula("=CONCAT(D2; B2)");
  Logger.log("LLAVE1: LLAVE creada exitosamente.");

  // 🔄 Corregimos formatos para evitar fallos en fórmulas
  convertirYVerificarTexto();

  // 🔑 LLAVE EXTERNA
  hojaExterna.getRange("A2:A" + ultimaFilaExterna).setFormula("=CONCAT(I2; G2)");
  Logger.log("Fórmula aplicada en columna A de hoja de validación.");

  // 🔍 Cruce 1 – Validación rechazos
  hojaOrigen.getRange("F2:F" + ultimaFila).setFormula("=VLOOKUP(E2; 'Copia de VALIDACION RECHAZOS'!A:A; 1; FALSE)");
  Logger.log("Cruce VALIDACION RECHAZOS aplicado en columna F.");

  // 📄 Cruce 2 – MAESTRA
  hojaOrigen.getRange("G2:G" + ultimaFila).setFormula("=VLOOKUP(D2;'Copia de MAESTRA'!G:L; 6;0)");
  Logger.log("Cruce MAESTRA aplicado en columna G.");

  // 📚 Cruce 3 – MultiClaves
  hojaOrigen.getRange("H2:H" + ultimaFila).setFormula("=VLOOKUP(D2;'Copia de Directorio MultiClaves - Corred'!B:D; 3;0)");
  Logger.log("Cruce MULTICLAVES aplicado en columna H.");

  // 🧾 Cruce 4 – Fact Voluntarios
  hojaOrigen.getRange("I2:I" + ultimaFila).setFormula("=VLOOKUP(D2;'Copia de Lista Fact Voluntarios'!C:C;1;0)");
  Logger.log("Cruce FACT VOLUNTARIOS aplicado en columna I.");
}
