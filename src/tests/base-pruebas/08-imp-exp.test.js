import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe regresar un heroe por ID", () => {
    const id = 2;
    const hero = getHeroeById(id);
    // console.log(hero);
    expect(hero).toEqual({ id: 2, name: "Spiderman", owner: "Marvel" });
  });
  test("getHeroeById debe regresar undefined si no existe", () => {
    const id = 200;
    const hero = getHeroeById(id);
    // console.log(hero);
    expect(hero).toBeFalsy();
  });

  //   Tarea:
  /*   Debe de retornar un arreglo con los héroes de DC
        Lengh === 3
        toEqueal al rreglo filtrado

        debe retornar un arreglo con los héroes de MArvel
        length === 2
*/
  test("getHeroesByOwner debe retornar los héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);

    // Otra manera:
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
  test("getHeroesByOwner debe retornar los héroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    // console.log(heroes);

    expect(heroes).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);

    expect(heroes.length).toBe(2);
  });
});
