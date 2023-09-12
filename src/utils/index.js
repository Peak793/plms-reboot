export const getClassNames = (classes, ...classNames) => classNames.map(className => classes[className]).join(' ');

export const dayColor = {
  "จันทร์": "var(--monday)",
  "อังคาร": "var(--tuesday)",
  "พุธ": "var(--wednesday)",
  "พฤหัสบดี": "var(--thursday)",
  "ศุกร์": "var(--friday)",
  "เสาร์": "var(--saturday)",
  "อาทิตย์": "var(--sunday)",
}