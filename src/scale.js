export function getScaleFromStorage() {
  const scale = localStorage.getItem('scale');

  if (!scale) {
    return 'c';
  } else return JSON.parse(scale).scale;
}

export function setScaleToStorage(scale) {
  const json = JSON.stringify({ scale });
  localStorage.setItem('scale', json);
}
