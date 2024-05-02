const baseURL = "https://fakestoreapi.com/products";

export const getLimit = async (limit) => {
  const res = await fetch(`${baseURL}?limit=${limit}`);
  const data = await res.json();

  return data;
};

export const getSingleCategory = async (id) => {
    try {
        const res = await fetch(`${baseURL}/${id}`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
export const getAllCategory = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};