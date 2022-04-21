const API_URL = "https://api.spacexdata.com/v3";

export async function getAllLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches/`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getLaunchById(id) {
  try {
    const response = await fetch(`${API_URL}/launches/${id}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
