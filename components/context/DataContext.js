import { createContext, useContext } from "react";
import { BASE_URL, BASE_URL_TABLE } from "../../config/api";

const DataContext = createContext();

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

  const fetchItemById = async (id) => {
    if (!id) return null;
    const data = await fetchApi("get", { id });
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