import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../../config/api";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tablesData, setTablesData] = useState({});
  const [loadingTables, setLoadingTables] = useState({});

  // ✅ Always check if data changed before updating cache
  const fetchTableData = async (tableName) => {
    if (!tableName) return [];
    try {
      setLoadingTables((prev) => ({ ...prev, [tableName]: true }));

      // 1️⃣ Fetch fresh data from API
      const res = await fetch(`${BASE_URL}/get?tableName=${tableName}`);
      const result = await res.json();
      const rows = result.rows || [];

      // 2️⃣ Get old cached data (if any)
      const oldData = tablesData[tableName];

      // 3️⃣ Compare new and old
      const isChanged =
        !oldData ||
        oldData.length !== rows.length ||
        JSON.stringify(oldData) !== JSON.stringify(rows);

      // 4️⃣ Update only if changed
      if (isChanged) {
        setTablesData((prev) => ({ ...prev, [tableName]: rows }));
      } 

      return isChanged ? rows : oldData;
    } catch (err) {
      return tablesData[tableName] || [];
    } finally {
      setLoadingTables((prev) => ({ ...prev, [tableName]: false }));
    }
  };

  return (
    <DataContext.Provider value={{ tablesData, loadingTables, fetchTableData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
