import {
  makeObservable,
  computed,
  action,
  runInAction,
  observable,
} from "mobx";
import axios from "axios";
import React from "react";

type Caoshi = {
  id: number;
  title: string;
  paragraphs: Array<string>;
};

class CaoshisStore {
  constructor() {
    makeObservable(this, {
      caoshis: observable,
      totalCaoshis: computed,
      createCaoshi: action,
      deleteCaoshi: action,
      // getcaoshisByTitle: action
    });
    runInAction(this.prefetchData);
  }

  caoshis: Caoshi[] = [];

  createCaoshi(caoshi: Caoshi = { id: 0, title: "", paragraphs: [] }): void {
    this.caoshis.push(caoshi);
  }

  deleteCaoshi(id: number): void {
    this.caoshis = this.caoshis.filter((caoshi) => caoshi.id !== id);
  }

  // total number of caoshis
  get totalCaoshis(): number {
    return this.caoshis.length;
  }

  prefetchData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/caocaoshiji/caocao.json"
      )
      .then((res) => {
        console.log(res.data);
        res.data.forEach(
          (
            item: { title: string; paragraphs: Array<string> },
            index: number
          ) => {
            this.createCaoshi({
              id: index,
              title: item.title,
              paragraphs: item.paragraphs,
            });
          }
        );
      });
  };
}

export default CaoshisStore;
