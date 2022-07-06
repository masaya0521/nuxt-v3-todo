import type { Ref } from "vue";
export const inc = (counter: Ref<number>) => () => counter.value++;
export const dec = (counter: Ref<number>) => () => counter.value--;

export const useSharedCounter = () => {
  // ここのuseState宣言した変数がグローバルな値
  const counter = useState<number>("counter", () => 0);
  return {
    counter: readonly(counter),
    dec: dec(counter),
    inc: inc(counter),
  };
};
