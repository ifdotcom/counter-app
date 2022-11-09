import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Pruebas en CounterApp", () => {
  const value = 10;
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });
  test("debe de mostrar el valor inicial de 10", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(10)).toBeTruthy();
  });

  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    // cuál es el valor que el h2 debe tener:
    expect(screen.getByText("11")).toBeTruthy();
  });
  test("debe de incrementar con el botón -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    // cuál es el valor que el h2 debe tener:
    expect(screen.getByText("9")).toBeTruthy();
  });
  test("should debe de funcionar el botón de reset", () => {
    render(<CounterApp value={value} />);

    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent(screen.getByRole("button", { name: "btn-reset" }));
    // screen.debug();
    expect(screen.getByText(10)).toBeTruthy();
  });
});
