const BASE_URL = "https://api.rhodesapi.com/api/";

export const fetchOperator = async () => {
  try {
    const response = await fetch(`${BASE_URL}operator`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Api response data: ", data);
    return data.results || data;
  } catch (err) {
    console.log("Error fetching Operator Data: ", err);
    throw err;
  }
};
