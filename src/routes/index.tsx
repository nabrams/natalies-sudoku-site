import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="landing">
      <div class="landing__inner">
        <div class="landing__badge">✨ Play Now</div>
        <h1 class="landing__title">
          <span class="landing__title-main">Natalie's Sudoku</span>
        </h1>
        <p class="landing__tagline">
          Classic number puzzles, made with love. Fill the grid, beat the clock, and give your brain a workout!
        </p>
        <div class="landing__grid-preview" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} class="landing__cell" style={`--i: ${i}`}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9][i % 9]}
            </div>
          ))}
        </div>
        <p class="landing__intro">
          Whether you're a first-timer or a grid master, every game is a fresh challenge. 
          No two puzzles are alike—just you, the numbers, and a whole lot of fun.
        </p>
        <footer class="landing__footer">
          <a href="/privacy-policy/" class="landing__privacy">
            Privacy Policy
          </a>
        </footer>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Natalie's Sudoku — Fun Number Puzzles",
  meta: [
    {
      name: "description",
      content: "Play Natalie's Sudoku — classic number puzzles made with love. Fill the grid and give your brain a workout!",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,800;1,9..40,400&display=swap",
    },
  ],
};
