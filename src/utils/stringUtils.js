function isStringNotNumberAndNotEmpty(value) {
  const isValueString = typeof value === 'string';
  const isValueNotNumber = isNaN(parseInt(value));
  return isValueString && isValueNotNumber && value.length > 0;
}

export {isStringNotNumberAndNotEmpty};