function logClass(params: any) {
  console.log(params);
  return function (target: any) {
    console.log(target);
  }
}

@logClass('ss')
class HttpClient {
  public url: string | undefined;
  constructor() {
    this.url = 'constructor url'
  }

  getData() {
    console.log(this.url);
  }
}

var a: any = new HttpClient();

console.log(a);
