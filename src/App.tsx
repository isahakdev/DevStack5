import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./assets/types/types";
import Loading from "./assets/components/Loading";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import TechnologyGrid from "./assets/components/TechnologyGrid";
import Footer from "./assets/components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  // Add Technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  // Remove One
  const handleRemoveFromStack = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove All
  const handleRemoveAll = () => {
    if (stack.length === 0) return;

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <TechnologyGrid
          technologies={technologies}
          stack={stack}
          onAdd={handleAddToStack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </main>

      <Footer />

      {/* Toast Notifications */}
      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;