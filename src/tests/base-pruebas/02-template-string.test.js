import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("getSaludo debe retornar Hola Fernanda", () => {
    const name = "Fernanda";
    const msg = getSaludo(name);
    expect(msg).toBe(`Hola ${name}`);
  });
});
