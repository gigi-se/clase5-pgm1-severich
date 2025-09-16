import axios from "axios";
import md5 from "md5";

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY!;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY!;
const baseUrl = "https://gateway.marvel.com/v1/public";

export async function getCharacters(nameStartsWith?: string) {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey);

  const url = `${baseUrl}/characters`;
  const params = {
    ts,
    apikey: publicKey,
    hash,
    limit: 20,
    ...(nameStartsWith && { nameStartsWith })
  };

  const response = await axios.get(url, { params });
  return response.data.data.results;
}
