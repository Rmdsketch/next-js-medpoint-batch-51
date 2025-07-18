class LocalStorage {
  private instance: Storage;

  constructor(storage?: Storage) {
    if (typeof window === 'undefined') {
      throw new Error('LocalStorage is not available');
    }

    if (typeof storage === 'undefined') {
      this.instance = window.localStorage;
    } else {
      this.instance = storage;
    }
  }

  public getItem(key: string) {
    const value = this.instance.getItem(key);
    if (!value) return null;
    const valueObject = JSON.parse(value);
    if (valueObject.hasOwnProperty('value')) {
      if (valueObject.value === null) {
        return null;
      }
      return valueObject.value;
    }
    return null;
  }

  public setItem(key: string, value: object) {
    const valueToBeSerialized = { value: value };
    const serializedValue = JSON.stringify(valueToBeSerialized);
    this.instance.setItem(key, serializedValue);
    return value;
  }

  public removeItem(key: string) {
    this.instance.removeItem(key);
  }

  public clear() {
    this.instance.clear();
  }
}

export default LocalStorage;
