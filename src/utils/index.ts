let scrollTop = 0;
let topValue = 0;
const getScollTop = () => {
  let scrollTop = 0;
  if (document?.documentElement && document?.documentElement?.scrollTop) {
    scrollTop = document?.documentElement.scrollTop;
  } else if (document?.body) {
    scrollTop = document?.body.scrollTop;
  }
  return scrollTop;
};

const bindHandleScroll = () => {
  scrollTop = getScollTop();
  if (scrollTop <= topValue) {
    console.log('向上');
  } else {
    console.log('向下');
  }
  setTimeout(function () {
    topValue = scrollTop;
  }, 0);
};
