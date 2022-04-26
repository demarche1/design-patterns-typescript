export default class Singleton {
  private static _instance: Singleton | null;

  private constructor() {}

  public static get instance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}
