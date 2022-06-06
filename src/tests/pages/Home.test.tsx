import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "../../features/store";

describe("Component: Home", () => {
  it("displays returned tasks on successful fetch", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const displayedMovies = await screen.findAllByTestId(/\d+/);
    const moviesCount = displayedMovies.length;
    expect(moviesCount).toBeGreaterThan(2);
  });

  it("displays error message when fetching movies raises error", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const displayedMovies = screen.queryAllByTestId(/movie-id-\d+/);
    expect(displayedMovies).toEqual([]);
  });
});
