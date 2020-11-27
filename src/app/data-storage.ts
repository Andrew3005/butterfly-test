export class DataStorage {
  private static instance: DataStorage;

  constructor() { }

  public static getInstance(): DataStorage {
    if (!DataStorage.instance) {
      DataStorage.instance = new DataStorage();
    }

    return DataStorage.instance;
  }

  value = 0;
}
