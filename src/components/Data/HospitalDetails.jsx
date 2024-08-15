import axios from "axios";
import { addDoc } from "firebase/firestore";
import { colRef } from "../Auth/firebase";

export const hospitalDetails = async (search) => {
  const searchParams = new URLSearchParams({
    near: search,
    categories: "15014",
    sort: "DISTANCE",
  });

  try {
    const response = await axios.get(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "fsq3N44pS283eLFGQ4ovnNs5BKD4/a/p3WlRDDoq5cLRtZU=",
        },
      }
    );
    console.log(response.data.results);
    response.data.results.forEach((result) => {
      try {
        addDoc(colRef, {
          name: result.name,
          distance: result.distance,
          location: result.location,
        });
      } catch (error) {
        console.error("data is not fetching:", error);
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("data is not fetching:", error);
    throw error;
  }
};
