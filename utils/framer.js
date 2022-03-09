//! TRANSITION

const pageEasing = [0.87, 0, 0.13, 1];
const pageTransition = {
  duration: 0.3,
  ease: pageEasing,
};

const mainEasing = [0.6, 0.05, -0.01, 0.9];
const mainTransition = {
  duration: 0.6,
  ease: mainEasing,
};

//! VARIANTS

export const pageVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  // // hidden: { opacity: 0, x: -200, y: 0 },
  // // enter: { opacity: 1, x: 0, y: 0 },
  // // exit: { opacity: 0, x: 0, y: -100 },
};

export const mobileMenuVariants = {
  initial: { y: '-100%' },
  animate: (custom) => ({
    y: custom ? 0 : '-100%',
    transition: mainTransition,
  }),
  exit: { y: '-100%', transition: mainTransition },
  // initial: {
  //   y: '-100vh',
  //   transition: {
  //     staggerChildren: 0.2,
  //     staggerDirection: -1,
  //   },
  // },
  // animate: {
  //   y: '0vh',
  //   transition: {
  //     staggerChildren: 0.2,
  //     staggerDirection: 1,
  //   },
  // },
  // exit: {
  //   y: '-100vh',
  //   transition: {
  //     staggerChildren: 0.2,
  //     staggerDirection: -1,
  //   },
  // },
};

// // export const mobileMenuItemVariants = {
// //   open: {
// //     y: 0,
// //     opacity: 1,
// //     transition: {
// //       y: { stiffness: 1000, velocity: -100 },
// //     },
// //   },
// //   closed: {
// //     y: 50,
// //     opacity: 0,
// //     transition: {
// //       y: { stiffness: 1000 },
// //     },
// //   },
// // };
