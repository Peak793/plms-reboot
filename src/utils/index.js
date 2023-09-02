export const getClassNames = (classes, ...classNames) => classNames.map(className => classes[className]).join(' ');
