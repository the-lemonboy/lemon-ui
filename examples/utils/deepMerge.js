export function deepMerge(target, merged) {
    for (var key in merged) {
      if (target[key] && (0, _typeof2["default"])(target[key]) === 'object') {
        deepMerge(target[key], merged[key]);
        continue;
      }

      if ((0, _typeof2["default"])(merged[key]) === 'object') {
        target[key] = (0, util.deepClone)(merged[key], true);
        continue;
      }

      target[key] = merged[key];
    }

    return target;
  }