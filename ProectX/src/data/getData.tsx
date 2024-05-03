import toast from "react-hot-toast";

const token = import.meta.env.VITE_TOKEN;

export async function getData(url: string) {
  const options = {
    method: "GET",
    header: `x-access-token: ${token}`,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    toast.error("Что-то пошло не так! Попробуйте еще раз");
    console.log(error);
  }
}
