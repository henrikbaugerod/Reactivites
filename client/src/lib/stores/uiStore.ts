import { action, makeObservable, observable } from "mobx";

export default class UiStore {
  isLoading = false;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      isBusy: action,
      isIdle: action
    });
  }

  isBusy = () => {
    this.isLoading = true;
  }

  isIdle = () => {
    this.isLoading = false;
  }
}