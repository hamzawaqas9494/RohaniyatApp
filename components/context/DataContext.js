import { createContext, useContext } from "react";
import { BASE_URL } from "../../config/api";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const fetchData = async (params = {}) => {
    const url = new URL(`${BASE_URL}/get`);
    Object.keys(params).forEach((key) => {
      if (params[key] != null) url.searchParams.append(key, params[key]);
    });

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network error");
      const json = await res.json();
      return Array.isArray(json) ? json : json.rows || [];
    } catch (err) {
      console.error("API فیل:", err.message);
      return [];
    }
  };
  const fetchCategories = (tableName) =>
    fetchData({ tableName, list: "category" });

  const fetchSubcategories = (tableName, category) =>
    fetchData({ tableName, list: "subcategory", category });

  const fetchItems = (tableName, category = null, subcategory = null) =>
    fetchData({ tableName, category, subcategory });

  const fetchItemById = async (tableName, id) => {
    const data = await fetchData({ tableName, id });
    return data[0] || null;
  };

  return (
    <DataContext.Provider
      value={{
        fetchCategories,
        fetchSubcategories,
        fetchItems,
        fetchItemById,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};

// import { createContext, useContext } from "react";
// import { BASE_URL, BASE_UR_TRANSLATE } from "../../config/api";

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   // 🔹 Existing fetch
//   const fetchData = async (params = {}) => {
//     const url = new URL(`${BASE_URL}/get`);
//     Object.keys(params).forEach((key) => {
//       if (params[key] != null) url.searchParams.append(key, params[key]);
//     });

//     try {
//       const res = await fetch(url);
//       if (!res.ok) throw new Error("Network error");
//       const json = await res.json();
//       return Array.isArray(json) ? json : json.rows || [];
//     } catch (err) {
//       console.error("API فیل:", err.message);
//       return [];
//     }
//   };

//   // 🔹 NEW: Translate function
//   const translateText = async (urduText) => {
//     try {
//       const res = await fetch(`${BASE_UR_TRANSLATE}/translate`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: urduText }), // ✅ key must match backend
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Translation failed");

//       return data.translated;
//     } catch (err) {
//       console.error("Translate Error:", err.message);
//       return urduText; // fallback in case of error
//     }
//   };

//   const fetchCategories = (tableName) =>
//     fetchData({ tableName, list: "category" });

//   const fetchSubcategories = (tableName, category) =>
//     fetchData({ tableName, list: "subcategory", category });

//   const fetchItems = (tableName, category = null, subcategory = null) =>
//     fetchData({ tableName, category, subcategory });

//   const fetchItemById = async (tableName, id) => {
//     const data = await fetchData({ tableName, id });
//     return data[0] || null;
//   };

//   return (
//     <DataContext.Provider
//       value={{
//         fetchCategories,
//         fetchSubcategories,
//         fetchItems,
//         fetchItemById,
//         translateText, // 👈 expose
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => {
//   const context = useContext(DataContext);
//   if (!context) throw new Error("useData must be used within DataProvider");
//   return context;
// };
