import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdoptedPetContextProvider } from "./contexts/AdoptedPetContext";
import { lazy, Suspense } from "react";

const Details = lazy(() => import("./components/Details"));
const SearchParams = lazy(() => import("./components/SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <AdoptedPetContextProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader">🌀</h2>
              </div>
            }
          >
            <div>
              <header>
                <Link to="/">Adopt Me!</Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </div>
          </Suspense>
        </QueryClientProvider>
      </AdoptedPetContextProvider>
    </BrowserRouter>
  );
};

export default App;

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
