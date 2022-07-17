const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    let nextIndex = 0;

    const next = () => {
      if (nextIndex < this.data.length) {
        const value = this.data[nextIndex++];
        return { value, done: false };
      }

      if (nextIndex === this.data.length) {
        nextIndex = 0;
        const value = this.data[nextIndex++];
        return { value, done: false };
      }

      return { done: true };
    };
    return { next };
  },
};

for (let p of document.getElementsByTagName('p')) {
  let i = 0;
  const it = colors[Symbol.iterator]();
  p.onclick = function () {
    this.style.color = it.next().value;
    i++;
  };
}
