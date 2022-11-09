import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retonar un objecto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    // console.log(user);

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Fernanda";

    const user = getUsuarioActivo(name);
    expect(user).toStrictEqual({
      uid: "ABC567",
      username: name.toUpperCase(),
    });
  });
});
