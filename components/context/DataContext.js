// // components/context/DataContext.js
// import { createContext, useCallback, useContext, useState } from "react";
// import { BASE_URL } from "../../config/api";

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [cache, setCache] = useState({});

//   const fetchTableData = useCallback(
//     async (tableName, params = {}) => {
//       if (!tableName) return params.id ? null : [];

//       const { id, category, subcategory } = params;
//       const cacheKey = `${tableName}_${id || ''}_${category || ''}_${subcategory || ''}`;

//       if (cache[cacheKey]) {
//         return cache[cacheKey];
//       }

//       let url = `${BASE_URL}/get?tableName=${tableName}`;
//       if (id) url += `&id=${id}`;
//       if (category) url += `&category=${encodeURIComponent(category)}`;
//       if (subcategory) url += `&subcategory=${encodeURIComponent(subcategory)}`;

//       try {
//         const res = await fetch(url);
//         if (!res.ok) throw new Error("Network error");
//         const result = await res.json();
//         const rows = result.rows || [];

//         const resultData = id ? rows[0] ?? null : rows;
//         setCache(prev => ({ ...prev, [cacheKey]: resultData }));
//         return resultData;
//       } catch (err) {
//         console.warn(`Fetch failed for ${tableName}:`, err.message);
//         return params.id ? null : [];
//       }
//     },
//     [cache]
//   );

//   return (
//     <DataContext.Provider value={{ fetchTableData }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => {
//   const context = useContext(DataContext);
//   if (!context) throw new Error("useData must be used within a DataProvider");
//   return context;
// };




// components/context/DataContext.js
import { createContext, useCallback, useContext, useState } from "react";
import { BASE_URL } from "../../config/api";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const fetchTableData = useCallback(
    async (tableName, params = {}) => {
      const { id, category, subcategory, limit, offset } = params;
      const isItemList = limit !== undefined && offset !== undefined;

      const cacheKey = `${tableName}_${id || ''}_${category || ''}_${subcategory || ''}_${offset || ''}`;

      if (cache[cacheKey]) {
        return cache[cacheKey];
      }

      let url = `${BASE_URL}/get?tableName=${tableName}`;
      if (id) url += `&id=${id}`;
      if (category) url += `&category=${encodeURIComponent(category)}`;
      if (subcategory) url += `&subcategory=${encodeURIComponent(subcategory)}`;
      if (isItemList) {
        url += `&limit=${limit}&offset=${offset}`;
      }

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();

        const result = {
          rows: data.rows || [],
          hasMore: isItemList ? data.hasMore || false : false,
        };

        setCache(prev => ({ ...prev, [cacheKey]: result }));
        return result;
      } catch (err) {
        console.warn("Using cache (offline)");
        return cache[cacheKey] || { rows: [], hasMore: false };
      }
    },
    [cache]
  );

  return (
    <DataContext.Provider value={{ fetchTableData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};