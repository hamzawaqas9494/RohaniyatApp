// // import { createContext, useContext, useState } from "react";
// // import { BASE_URL } from "../../config/api";

// // const DataContext = createContext();

// // export const DataProvider = ({ children }) => {
// //   const [tablesData, setTablesData] = useState({});
// //   const [loadingTables, setLoadingTables] = useState({});

// //   // ✅ Always check if data changed before updating cache
// //   const fetchTableData = async (tableName) => {
// //     if (!tableName) return [];
// //     try {
// //       setLoadingTables((prev) => ({ ...prev, [tableName]: true }));

// //       // 1️⃣ Fetch fresh data from API
// //       const res = await fetch(`${BASE_URL}/get?tableName=${tableName}`);
// //       const result = await res.json();
// //       const rows = result.rows || [];

// //       // 2️⃣ Get old cached data (if any)
// //       const oldData = tablesData[tableName];

// //       // 3️⃣ Compare new and old
// //       const isChanged =
// //         !oldData ||
// //         oldData.length !== rows.length ||
// //         JSON.stringify(oldData) !== JSON.stringify(rows);

// //       // 4️⃣ Update only if changed
// //       if (isChanged) {
// //         setTablesData((prev) => ({ ...prev, [tableName]: rows }));
// //       } 

// //       return isChanged ? rows : oldData;
// //     } catch (err) {
// //       return tablesData[tableName] || [];
// //     } finally {
// //       setLoadingTables((prev) => ({ ...prev, [tableName]: false }));
// //     }
// //   };

// //   return (
// //     <DataContext.Provider value={{ tablesData, loadingTables, fetchTableData }}>
// //       {children}
// //     </DataContext.Provider>
// //   );
// // };

// // export const useData = () => useContext(DataContext);



// // components/context/DataContext.js
// import { createContext, useContext } from "react";
// import { BASE_URL } from "../../config/api";

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const fetchData = async (endpoint, params = {}) => {
//     const url = new URL(`${BASE_URL}/get`);
//     url.searchParams.append("tableName", params.tableName);
//     if (params.list) url.searchParams.append("list", params.list);
//     if (params.category) url.searchParams.append("category", params.category);
//     if (params.subcategory) url.searchParams.append("subcategory", params.subcategory);

//     console.log("API کال:", url.toString()); // چیک کرو

//     try {
//       const res = await fetch(url);
//       if (!res.ok) {
//         const text = await res.text();
//         throw new Error(`HTTP ${res.status}: ${text}`);
//       }
//       const json = await res.json();
//           console.log("API کال:",json); // چیک کرو
//       return json;
  
//     } catch (err) {
//       console.error("API فیل مکمل:", {
//         url: url.toString(),
//         error: err.message
//       });
//       throw err; // اوپر والے کوڑ میں پکڑو
//     }
//   };

//   const fetchCategories = (tableName) => fetchData("", { tableName, list: "category" });
//   const fetchSubcategories = (tableName, category) => fetchData("", { tableName, list: "subcategory", category });
//   const fetchItems = (tableName, category, subcategory) => fetchData("", { tableName, category, subcategory });

//   return (
//     <DataContext.Provider value={{ fetchCategories, fetchSubcategories, fetchItems }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => {
//   const context = useContext(DataContext);
//   if (!context) throw new Error("useData must be used within DataProvider");
//   return context;
// };



// components/context/DataContext.js
import { createContext, useContext } from "react";
import { BASE_URL } from "../../config/api";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const fetchData = async (params = {}) => {
    const url = new URL(`${BASE_URL}/get`);

    // پیرامیٹرز شامل کرو
    if (params.tableName) url.searchParams.append("tableName", params.tableName);
    if (params.list) url.searchParams.append("list", params.list);
    if (params.category) url.searchParams.append("category", params.category);
    if (params.subcategory) url.searchParams.append("subcategory", params.subcategory);
    if (params.id) url.searchParams.append("id", params.id); // id شامل

    console.log("API کال:", url.toString());

    try {
      const res = await fetch(url);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
      const json = await res.json();
      console.log("API سے جواب:", json);

      // ہمیشہ rows لوٹاؤ (array)
      return Array.isArray(json) ? json : (json.rows || []);
    } catch (err) {
      console.error("API فیل:", err.message);
      return []; // خالی ایری لوٹاؤ
    }
  };

  // کیٹیگریز
  const fetchCategories = (tableName) =>
    fetchData({ tableName, list: "category" });

  // سب کیٹیگریز
  const fetchSubcategories = (tableName, category) =>
    fetchData({ tableName, list: "subcategory", category });

  // آئٹمز (category + subcategory)
  const fetchItems = (tableName, category = null, subcategory = null) =>
    fetchData({ tableName, category, subcategory });

  // ایک آئٹم (id سے)
  const fetchItemById = (tableName, id) =>
    fetchData({ tableName, id });

  return (
    <DataContext.Provider value={{
      fetchCategories,
      fetchSubcategories,
      fetchItems,
      fetchItemById
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};