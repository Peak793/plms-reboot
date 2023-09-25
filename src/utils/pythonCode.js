export const getKwConSourceCode = (userCode) => {
    return `
import tokenize
from io import BytesIO
import keyword
import json
import builtins


def check_syntax(code_str):
    try:
        compile(code_str, "<string>", "exec")
        return None  # No syntax error found
    except SyntaxError as e:
        return str(e)  # Return the syntax error message


def suggest_constraints(code_str):
    tokens = tokenize.tokenize(BytesIO(code_str.encode("utf-8")).readline)

    reserved_keywords = set(keyword.kwlist)
    builtin_functions = set(dir(builtins))  # Convert to set

    keyword_counts = {"builtin_functions": {}, "reserved_words": {}, "other": {}}

    for token in tokens:
        if token.type == tokenize.NAME:
            name = token.string
            if name in reserved_keywords:
                keyword_counts["reserved_words"][name] = (
                    keyword_counts["reserved_words"].get(name, 0) + 1
                )
            elif name in builtin_functions:
                keyword_counts["builtin_functions"][name] = (
                    keyword_counts["builtin_functions"].get(name, 0) + 1
                )
            else:
                keyword_counts["other"][name] = keyword_counts["other"].get(name, 0) + 1

    # Convert the keyword_counts to the desired format
    suggested_constraints = {}
    for category, keywords in keyword_counts.items():
        suggested_constraints[category] = [
            {"keyword": key, "type": "eq", "limit": count, "active": False}
            for key, count in keywords.items()
        ]

    return suggested_constraints


def analyze_code(code_str):
    syntax_error = check_syntax(code_str)
    if syntax_error:
        return {
            "status": "error",
            "message": f"Syntax Error: {syntax_error}",
            "data": None,
        }
    else:
        suggested_constraints = suggest_constraints(code_str)
        return {
            "status": "success",
            "message": "Analysis completed successfully.",
            "data": suggested_constraints,
        }


if __name__ == "__main__":
    code = """${userCode}"""

    result = analyze_code(code)
    print(json.dumps(result, indent=4, sort_keys=False))
  
  `
}