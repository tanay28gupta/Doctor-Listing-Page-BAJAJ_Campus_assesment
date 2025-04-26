export const fetchDoctors = async () => {
    const response = await fetch('https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json');
    const data = await response.json();
    return data;
  };
  