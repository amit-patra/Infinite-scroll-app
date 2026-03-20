export const fetchPosts = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`,
  );
  if (!res.ok) throw new Error("API Error");
  return res.json();
};
