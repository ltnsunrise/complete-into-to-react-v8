import { createContext, useContext, useState } from "react";

const AdoptedPetContext = createContext();
export const AdoptedPetContextProvider = ({ children }) => {
  const [adoptedPet, setAdoptedPet] = useState(null);

  return (
    <AdoptedPetContext.Provider value={{ adoptedPet, setAdoptedPet }}>
      {children}
    </AdoptedPetContext.Provider>
  );
};

export const useAdoptedPetContext = () => useContext(AdoptedPetContext);

export default AdoptedPetContext;
