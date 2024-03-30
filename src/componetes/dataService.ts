
export class Api {

  public static async request(path: string, method: string, body: any) {
    const API_KEY = "f5fc14d5c6ae4410bb043c42f8ef8e57";
    const url = path ? path : "https://newsapi.org/v2/everything?q=India%20space&pageSize=3";
    const res = await fetch(`${url}&apiKey=${API_KEY}`);
    const result = await res.json();
    console.log(result)
    return result
  }
}