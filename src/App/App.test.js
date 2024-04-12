import { render, screen } from "@testing-library/react";
import App from "../App/index";

describe("App", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Cleo currency converter/i);
    expect(linkElement).toBeInTheDocument();
  });
});
