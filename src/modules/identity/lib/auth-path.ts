export function safeAppPath(value: FormDataEntryValue | string | null | undefined) {
  if (
    typeof value !== "string" ||
    !/^\/app(?:\/|$)/.test(value) ||
    value.startsWith("//") ||
    /[\r\n\\]/.test(value)
  ) {
    return "/app";
  }

  return value;
}
