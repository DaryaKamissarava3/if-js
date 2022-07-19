export const arrFromFetch = async () => {
  try {
    const response = await fetch(`https://fe-student-api.herokuapp.com/api/hotels/popular`);
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const onSearch = async (country, adults, children, rooms) => {
  const response = await fetch(
    ` https://fe-student-api.herokuapp.com/api/hotels?search=${country}&adults=${adults}&children=${children}&rooms=${rooms}`,
  );
  return response.json();
};
