import React from "react";

export const IP = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '';


export function capitalize(string) {
  if (!string) return;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function pluralize(count, noun, suffix = 's') {
  return `${count} ${noun}${count !== 1 ? suffix : ''}`;
}

export function debounce(func, timeout = 300){
  // 
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function sleep(duration = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

export function useForceUpdate(){
  
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}