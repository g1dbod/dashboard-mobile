export const animateListEvent = (delay: number) => {
  return {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 0.5 + delay / 6,
    },
  }
}

export const animateItemEvent = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
  // transition: {
  //   delay: 0.5 + 0 / 50,
  // },
}

export const animateItemBtnEvent = (delay: number) => {
  return {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: {
      // duration: 0.8,
      delay: 0.1 + delay / 30,
    },
  }
}
