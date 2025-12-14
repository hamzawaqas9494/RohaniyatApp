// // import { createContext, useContext } from "react";
// // import { BASE_URL } from "../../config/api";

// // const DataContext = createContext();

// // export const DataProvider = ({ children }) => {
// //   const fetchData = async (params = {}) => {
// //     const url = new URL(`${BASE_URL}/get`);
// //     Object.keys(params).forEach(key => {
// //       if (params[key] != null) url.searchParams.append(key, params[key]);
// //     });

// //     try {
// //       const res = await fetch(url);
// //       if (!res.ok) throw new Error("Network error");
// //       const json = await res.json();
// //       return Array.isArray(json) ? json : (json.rows || []);
// //     } catch (err) {
// //       console.error("API فیل:", err.message);
// //       return [];
// //     }
// //   };
// //   const fetchCategories = (tableName) =>
// //     fetchData({ tableName, list: "category" });

// //   const fetchSubcategories = (tableName, category) =>
// //     fetchData({ tableName, list: "subcategory", category });

// //   const fetchItems = (tableName, category = null, subcategory = null) =>
// //     fetchData({ tableName, category, subcategory });

// //   const fetchItemById = async (tableName, id) => {
// //     const data = await fetchData({ tableName, id });
// //     return data[0] || null;
// //   };

// //   return (
// //     <DataContext.Provider value={{
// //       fetchCategories,
// //       fetchSubcategories,
// //       fetchItems,
// //       fetchItemById
// //     }}>
// //       {children}
// //     </DataContext.Provider>
// //   );
// // };

// // export const useData = () => {
// //   const context = useContext(DataContext);
// //   if (!context) throw new Error("useData must be used within DataProvider");
// //   return context;
// // };



// import { createContext, useContext } from "react";
// import { BASE_URL, BASE_URL_TABLE } from "../../config/api";

// const DataContext = createContext();

// // tableName سے tableId نکالنے کا فنکشن (خفیہ طریقے سے)
// const getTableId = async (tableName) => {
//   try {
//     const res = await fetch(`${BASE_URL_TABLE}/getTables?name=${tableName}`);
//     if (!res.ok) return null;
//     const json = await res.json();

//     // آپ کا API object دے رہا ہے
//     if (json && json.id) return json.id;
//     // اگر array میں ہو تو بھی چلے گا
//     if (Array.isArray(json) && json.length > 0) return json[0].id;

//     return null;
//   } catch (err) {
//     console.error("getTableId ایشو:", err);
//     return null;
//   }
// };

// // main fetch (rohanishop/get اور paginated)
// const fetchApi = async (endpoint = "get", params = {}) => {
//   const url = new URL(`${BASE_URL}/${endpoint}`);
//   Object.entries(params).forEach(([key, value]) => {
//     if (value != null) url.searchParams.append(key, value);
//   });

//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const json = await res.json();
//     return json.rows || [];
//   } catch (err) {
//     console.error("fetchApi ایشو:", err);
//     return [];
//   }
// };

// export const DataProvider = ({ children }) => {
//   // بالکل آپ کے پرانے فنکشنز — صرف اندر سے tableId نکال رہے ہیں
//   const fetchCategories = async (tableName) => {
//     const tableId = await getTableId(tableName);
//     if (!tableId) return [];

//     return await fetchApi("get", { tableId, list: "category" });
//   };

//   const fetchSubcategories = async (tableName, category) => {
//     const tableId = await getTableId(tableName);
//     if (!tableId) return [];

//     return await fetchApi("get", { tableId, list: "subcategory", category });
//   };

//   const fetchItems = async (tableName, category = null, subcategory = null) => {
//     const tableId = await getTableId(tableName);
//     if (!tableId) return [];

//     const params = { tableId };
//     if (category) params.category = category;
//     if (subcategory) params.subcategory = subcategory;

//     return await fetchApi("get", params);
//   };

//   const fetchItemById = async (tableName, id) => {
//     const tableId = await getTableId(tableName);
//     if (!tableId) return null;

//     const data = await fetchApi("get", { tableId, id });
//     return data[0] || null;
//   };

//   return (
//     <DataContext.Provider value={{
//       fetchCategories,
//       fetchSubcategories,
//       fetchItems,
//       fetchItemById
//     }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => {
//   const context = useContext(DataContext);
//   if (!context) throw new Error("useData must be used within DataProvider");
//   return context;
// };


import { createContext, useContext } from "react";
import { BASE_URL, BASE_URL_TABLE } from "../../config/api";

const DataContext = createContext();

// tableName سے tableId نکالنے کا فنکشن (اب بھی باقی فیچرز کے لیے استعمال ہوگا)
const getTableId = async (tableName) => {
  try {
    const res = await fetch(`${BASE_URL_TABLE}/getTables?name=${tableName}`);
    if (!res.ok) return null;
    const json = await res.json();

    if (json && json.id) return json.id;
    if (Array.isArray(json) && json.length > 0) return json[0].id;

    return null;
  } catch (err) {
    console.error("getTableId ایشو:", err);
    return null;
  }
};

// main fetch
const fetchApi = async (endpoint = "get", params = {}) => {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value != null) url.searchParams.append(key, value);
  });

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.rows || [];
  } catch (err) {
    console.error("fetchApi ایشو:", err);
    return [];
  }
};

export const DataProvider = ({ children }) => {
  const fetchCategories = async (tableName) => {
    const tableId = await getTableId(tableName);
    if (!tableId) return [];
    return await fetchApi("get", { tableId, list: "category" });
  };

  const fetchSubcategories = async (tableName, category) => {
    const tableId = await getTableId(tableName);
    if (!tableId) return [];
    return await fetchApi("get", { tableId, list: "subcategory", category });
  };

  const fetchItems = async (tableName, category = null, subcategory = null) => {
    const tableId = await getTableId(tableName);
    if (!tableId) return [];

    const params = { tableId };
    if (category) params.category = category;
    if (subcategory) params.subcategory = subcategory;

    return await fetchApi("get", params);
  };

  // نیا اپ ڈیٹ: صرف id سے آئٹم لوڈ کرو — tableName کی ضرورت ختم!
  const fetchItemById = async (id) => {
    if (!id) return null;
    const data = await fetchApi("get", { id }); // صرف id بھیجو
    return data[0] || null;
  };

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