export const getKwConSourceCode = (userCode) => {
    const escapedUserCode = JSON.stringify(userCode); // Escape special characters
    return `
code = ${escapedUserCode}
result = analyze_code(code)
print(json.dumps(result, indent=2, sort_keys=False))
`;
};
