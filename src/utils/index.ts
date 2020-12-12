interface Option {
  value: string;
  label: string;
}

interface NestedOption extends Option {
  options?: NestedOption[];
}

export const getFlatOptions = (
  list: NestedOption[],
  currentPath?: string
): Option[] => {
  return list.reduce((prev, { value, label, options }) => {
    const computedPath = currentPath ? `${currentPath}.${value}` : value;
    if (options && options.length !== 0) {
      return [
        ...prev,
        { value, label },
        ...getFlatOptions(options, computedPath),
      ];
    } else {
      return [...prev, { value: computedPath, label }];
    }
  }, [] as Option[]);
};

const getDotCount = (s: string): number => s.split(".").length - 1;
export const getNextBranchId = (
  value: boolean,
  ids: string[],
  pointerId: string
): string | undefined => {
  const index = ids.indexOf(pointerId) + 1;
  if (value) {
    return ids[index];
  } else {
    const pointerIdDotCount = getDotCount(pointerId);
    const rightIds = ids.slice(index);
    return rightIds.find((id) => getDotCount(id) === pointerIdDotCount);
  }
};
