import axios from "axios";

export async function getAccount(token: string) {
  // Call an external API endpoint to get posts

  try {
    const baseURL = process.env.SERVER_URL;
    const res = await axios.get(baseURL + "/user/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error went send get all user to server!!!");
    // Handle the error
  }
}
