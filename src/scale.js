export function getScaleFromStorage() {
  const scale = localStorage.getItem('scale');

  if (!scale) {
    return 'c';
  }
  return scale;
}

export function setScaleToStorage(scale) {
  localStorage.setItem('scale', scale);
}
