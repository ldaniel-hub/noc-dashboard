import { useCallback, useState } from "react";

const initialLinksStatus = { 1: true, 2: true, 3: true, 4: true, 5: true };
const dependencyByCategory = { Carro: 1, Caminhonete: 1, "Caminhão": 2, Ônibus: 4, Moto: 5 };

export function useFleetMonitor() {
  const [linksStatus, setLinksStatus] = useState(initialLinksStatus);
  const toggleLink = useCallback((id) => {
    setLinksStatus((previous) => ({ ...previous, [id]: !previous[id] }));
  }, []);
  const isCategoryOnline = useCallback(
    (category) => linksStatus[dependencyByCategory[category] || 3],
    [linksStatus],
  );
  return { linksStatus, setLinksStatus, toggleLink, isCategoryOnline };
}