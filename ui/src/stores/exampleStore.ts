import { writable } from "svelte/store";
import type { Writable } from 'svelte/store';
import fetchNUI from '../utils/fetch';

interface exampleState {
  show: Writable<boolean>;
  currentIndex: Writable<number>;
}

const store = () => {
  const exampleStore: exampleState = {
    show: writable(false),
    currentIndex: writable(0),
  }

  const methods = {
    closeUI() {
      // Close the ui locally
      exampleStore.show.set(false);
      // Tell client lua that we closed the ui
      fetchNUI("closeUI");
    },
    increaseIndex() {
      exampleStore.currentIndex.update((state) => {
        state++;
        if (state > 9) {
          state = 9;
        }
        return state;
      })
    },
    decreaseIndex() {
      exampleStore.currentIndex.update((state) => {
        state--;
        if (state < 0) {
          state = 0;
        }
        return state;
      })
    },
    receiveShowMessage() {
      // If they send us true/false we set our store value to that
      exampleStore.show.set(true);
    }
  }

  return {
    ...exampleStore,
    ...methods
  }
}

export default store();