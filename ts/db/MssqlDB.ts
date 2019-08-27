import { DBI } from "./DBI";

export class MssqlDB<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
    // throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    return true;
    // throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    return true;
    // throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    return [];
    // throw new Error("Method not implemented.");
  }
}
