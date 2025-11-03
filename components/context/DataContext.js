// // components/context/DataContext.js
// import { createContext, useContext } from "react";
// import { BASE_URL } from "../../config/api";

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const fetchData = async (params = {}) => {
//     const url = new URL(`${BASE_URL}/get`);
//     Object.keys(params).forEach(key => {
//       if (params[key] != null) url.searchParams.append(key, params[key]);
//     });

//     try {
//       const res = await fetch(url);
//       if (!res.ok) throw new Error("Network error");
//       const json = await res.json();
//       console.log(json,"json")
//       return Array.isArray(json) ? json : (json.rows || []);
//     } catch (err) {
//       console.error("API فیل:", err.message);
//       return [];
//     }
//   };

//   // باقی sync رکھو (پہلے جیسا)
//   const fetchCategories = (tableName) =>
//     fetchData({ tableName, list: "category" });

//   const fetchSubcategories = (tableName, category) =>
//     fetchData({ tableName, list: "subcategory", category });

//   const fetchItems = (tableName, category = null, subcategory = null) =>
//     fetchData({ tableName, category, subcategory });

//   // صرف fetchItemById کو async کرو
//   const fetchItemById = async (tableName, id) => {
//     const data = await fetchData({ tableName, id });
//     return data?.[0] || null; // rows[0] کی بجائے data[0]
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

// export const useData = () => useContext(DataContext);

// components/context/DataContext.js
import { createContext, useContext } from "react";
import { BASE_URL } from "../../config/api";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const fetchData = async (params = {}) => {
    const url = new URL(`${BASE_URL}/get`);
    Object.keys(params).forEach(key => {
      if (params[key] != null) url.searchParams.append(key, params[key]);
    });

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network error");
      const json = await res.json();
      console.log(json,"json")
      return Array.isArray(json) ? json : (json.rows || []);
    } catch (err) {
      console.error("API فیل:", err.message);
      return [];
    }
  };

  // کیٹیگریز، سب کیٹیگریز، آئٹمز → sync (Promise لوٹاتے ہیں)
  const fetchCategories = (tableName) =>
    fetchData({ tableName, list: "category" });

  const fetchSubcategories = (tableName, category) =>
    fetchData({ tableName, list: "subcategory", category });

  const fetchItems = (tableName, category = null, subcategory = null) =>
    fetchData({ tableName, category, subcategory });

  // صرف ایک آئٹم → async
  const fetchItemById = async (tableName, id) => {
    const data = await fetchData({ tableName, id });
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