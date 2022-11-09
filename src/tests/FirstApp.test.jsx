import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en FirstApp", () => {
  // test("Debe de hacer match con el snapshot", () => {
  //   const title = "Hola, soy Fernanda";
  //   const { container } = render(<FirstApp title={title} />);
  //   // console.log(container);

  //   expect(container).toMatchSnapshot();
  // });
  test("Debe de mostrar el titulo en un h1", () => {
    const title = "Hola, soy Fernanda";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // console.log(h1.innerHTML);
    // expect(h1.innerHTML).toBe(title);

    // test para saber que existe...
    // expect(getByTestId("test-title")).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("Debe de mostrr el subtitulo enviado por props", () => {
    const title = "Hola, soy Fernanda";

    const subTitle = "Hola, soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
