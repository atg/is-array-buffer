window.isArrayBuffer = function(value) {
  return typeof ArrayBuffer === 'function'
    && (value instanceof ArrayBuffer
      || Object.prototype.toString.call(value) === '[object ArrayBuffer]');
}
