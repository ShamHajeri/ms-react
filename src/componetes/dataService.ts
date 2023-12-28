export class Api {
  public static async request(path:string, method:string, body:any) {
    let url :string= 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=India%20space&apiKey=f5fc14d5c6ae4410bb043c42f8ef8e57';
    let init: any
    if (method === 'GET') {
      init = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method,
      }

    }
    else {
      init = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        method,
        bodyRequest: JSON.stringify(body)
      }
    }
    
    let respone = await fetch(url, init)
    console.log(respone)
    let result = await respone.json()
    return result
  }
}