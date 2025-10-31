// import { createContext, useContext, useState } from "react";
// import { BASE_URL } from "../../config/api";

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [tablesData, setTablesData] = useState({});
//   const [loadingTables, setLoadingTables] = useState({});

//   // ✅ Always check if data changed before updating cache
//   const fetchTableData = async (tableName) => {
//     if (!tableName) return [];
//     try {
//       setLoadingTables((prev) => ({ ...prev, [tableName]: true }));

//       // 1️⃣ Fetch fresh data from API
//       const res = await fetch(`${BASE_URL}/get?tableName=${tableName}`);
//       const result = await res.json();
//       const rows = result.rows || [];

//       // 2️⃣ Get old cached data (if any)
//       const oldData = tablesData[tableName];

//       // 3️⃣ Compare new and old
//       const isChanged =
//         !oldData ||
//         oldData.length !== rows.length ||
//         JSON.stringify(oldData) !== JSON.stringify(rows);

//       // 4️⃣ Update only if changed
//       if (isChanged) {
//         setTablesData((prev) => ({ ...prev, [tableName]: rows }));
//       } 

//       return isChanged ? rows : oldData;
//     } catch (err) {
//       return tablesData[tableName] || [];
//     } finally {
//       setLoadingTables((prev) => ({ ...prev, [tableName]: false }));
//     }
//   };

//   return (
//     <DataContext.Provider value={{ tablesData, loadingTables, fetchTableData }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => useContext(DataContext);




// src/components/context/DataContext.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../config/api";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tablesData, setTablesData] = useState({});
  const [loadingTables, setLoadingTables] = useState({});

  useEffect(() => {
    const loadCache = async () => {
      try {
        const stored = await AsyncStorage.getItem('tablesData');
        if (stored) setTablesData(JSON.parse(stored));
      } catch (e) {
        console.warn("Cache load failed", e);
      }
    };
    loadCache();
  }, []);

  useEffect(() => {
    const saveCache = async () => {
      try {
        await AsyncStorage.setItem('tablesData', JSON.stringify(tablesData));
      } catch (e) {
        console.warn("Cache save failed", e);
      }
    };
    saveCache();
  }, [tablesData]);

  const fetchTableData = async (tableName, { forceRefresh = false, id, category, subcategory } = {}) => {
    if (!tableName) return id ? null : [];

    const cacheKey = id 
      ? `${tableName}_${id}` 
      : subcategory 
        ? `${tableName}_${category}_${subcategory}` 
        : category 
          ? `${tableName}_${category}` 
          : tableName;

    const cachedData = tablesData[cacheKey];

    if (cachedData && !forceRefresh) return cachedData;

    const netState = await NetInfo.fetch();
    const isOnline = netState.isConnected;

    // آف لائن + کیچ ہے → کیچ لوٹا دو
    if (!isOnline && cachedData) {
      return cachedData;
    }

    // آف لائن + کیچ نہیں → خالی
    if (!isOnline && !cachedData) {
      return id ? null : [];
    }

    try {
      setLoadingTables(prev => ({ ...prev, [cacheKey]: true }));

      let url = `${BASE_URL}/get?tableName=${tableName}`;
      if (id) url += `&id=${id}`;
      if (category) url += `&category=${encodeURIComponent(category)}`;
      if (subcategory) url += `&subcategory=${encodeURIComponent(subcategory)}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');

      const result = await res.json();
      const rows = result.rows || [];
      const dataToCache = id ? rows[0] : rows;

      const oldData = cachedData || [];
      const isChanged = !oldData ||
        (Array.isArray(dataToCache) && oldData.length !== dataToCache.length) ||
        JSON.stringify(oldData) !== JSON.stringify(dataToCache);

      if (Array.isArray(dataToCache) && oldData && dataToCache.length < oldData.length) {
        setTablesData(prev => {
          const newTables = { ...prev };
          Object.keys(newTables).forEach(key => {
            if (key.startsWith(tableName)) delete newTables[key];
          });
          newTables[cacheKey] = dataToCache;
          return newTables;
        });
      } else if (isChanged || !cachedData) {
        setTablesData(prev => ({ ...prev, [cacheKey]: dataToCache }));
      }

      return dataToCache;
    } catch (err) {
      console.warn(`Fetch failed for ${cacheKey}:`, err.message);
      return cachedData || (id ? null : []);
    } finally {
      setLoadingTables(prev => ({ ...prev, [cacheKey]: false }));
    }
  };

  return (
    <DataContext.Provider value={{ tablesData, loadingTables, fetchTableData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);