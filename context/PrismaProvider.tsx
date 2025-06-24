import { PrismaClient } from "@prisma/client";
import { createContext, ReactNode, useContext } from "react";

interface ContextValue {
  prisma: PrismaClient;
}

const PrismaContext = createContext<ContextValue | null>(null);

export const PrismaProvider = ({ children }: { children: ReactNode }) => {
  const prisma = new PrismaClient();

  return (
    <PrismaContext.Provider value={{ prisma }}>
      {children}
    </PrismaContext.Provider>
  );
};

export const usePrisma = () => {
  const context = useContext(PrismaContext);
  if (!context)
    throw new Error("usePrisma must be used within a PrismaProvider");
  return context;
};
