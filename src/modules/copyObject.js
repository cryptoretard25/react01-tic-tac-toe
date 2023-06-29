const createObjCopy = (obj) => {
  if (typeof obj !== "object" || !obj) return obj;

  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    clone[key] = createObjCopy(obj[key]);
  }
  return clone;
};

export default createObjCopy;
