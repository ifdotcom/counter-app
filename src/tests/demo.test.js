describe("Pruebas en <DeamoComponent/>", () => {
  test("Esta prueba no debe fallar uwu", () => {
    // 1. inicialización
    const msg1 = "Hola mundo";
    // 2. estimulo
    const msg2 = msg1.trim();
    // 3. Observar el comportamiento... esperado
    expect(msg1).toBe(msg2);
  });
});
