function onOpen() {
  var ui = SpreadsheetApp.getUi();
   
  ui.createMenu("OVI")
  .addItem("1️⃣ Crear encabezados", "creacionColumnas")
  .addItem("2️⃣ Cruce general", "CruceGeneral") // apenas se cree la primera llave se cambian los formatos a todas las hojas
  .addItem("3️⃣ Agregar nuevas validaciones a hoja de rechazos", "IntermedarioAlimentandoOVI2")
  .addSeparator()
  .addItem("🚀 Ejecutar Todo", "EjecutarTodo")
  .addToUi();
}
     





function EjecutarTodo () {


     var ui = SpreadsheetApp.getUi();
var respuesta = ui.alert(
  "⚠️ Advertencia ⚠️",
  "Estimado usuario,\n\n" +
  "En este momento no se puede ejecutar el problema, por favor desista.\n\n" +
  "✅ Si al usar este programa no ha tenido inconvenientes, presione el botón **Sí**.\n\n" +
  "🙏 Gracias por su comprensión \n\n" +
   "⚠️ HA SIDO AVISADO",

  ui.ButtonSet.YES_NO
);


        if (respuesta == ui.Button.NO) {
            return;
        }



  creacionColumnas(); 
  CruceGeneral();
  IntermedarioAlimentandoOVI2 ();
}





