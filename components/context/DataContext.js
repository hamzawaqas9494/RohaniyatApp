// components/context/DataContext.js
import { createContext, useCallback, useContext, useState } from "react";
import { BASE_URL } from "../../config/api";

const DataContext = createContext();
const PAGE_SIZE = 10;

export const DataProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const fetchTableData = useCallback(async (tableName, params = {}) => {
    const { category, subcategory, limit = PAGE_SIZE, offset = 0 } = params;
    const cacheKey = `${tableName}_${category || ""}_${subcategory || ""}_${offset}`;

    // کیچ چیک کرو
    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    // URL بناؤ
    let url = `${BASE_URL}/get?tableName=${tableName}&limit=${limit}&offset=${offset}`;
    if (category) url += `&category=${encodeURIComponent(category)}`;
    if (subcategory) url += `&subcategory=${encodeURIComponent(subcategory)}`;

    try {
      const response = await fetch(url, { method: "GET" });

      // اگر نیٹ نہیں یا سرور ڈاؤن
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      const result = {
        rows: Array.isArray(data.rows) ? data.rows : [],
        hasMore: data.hasMore === true,
      };

      // کیچ میں ڈالو
      setCache(prev => ({ ...prev, [cacheKey]: result }));
      return result;

    } catch (err) {
      // صرف آف لائن ہونے پر وارننگ
      console.log("⚡ نیٹ آن ہے لیکن API فیل → پرانا کیچ استعمال");
      return cache[cacheKey] || { rows: [], hasMore: false };
    }
  }, [cache]);

  return (
    <DataContext.Provider value={{ fetchTableData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};