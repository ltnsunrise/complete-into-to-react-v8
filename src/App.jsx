import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import SearchParams from "./components/SearchParams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdoptedPetContextProvider } from "./contexts/AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <AdoptedPetContextProvider>
        <QueryClientProvider client={queryClient}>
          <div
            className="p-0 m-0"
            style={{
              background:
                "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
            }}
          >
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </AdoptedPetContextProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
