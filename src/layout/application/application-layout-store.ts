import { makeAutoObservable } from "mobx";

class LayoutStore {
  public isDrawerOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  public toggleDrawer = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };
}

export { LayoutStore };
