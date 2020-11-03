export function removeFilePathSuffix(path) {
  return path.replace(/[.].*/, "");
}

export function replaceDashWithSpace(string) {
  return string.replace(/[-]/, " ");
}

export function capitalizer(string) {
  return string.toUpperCase().slice(0, 1) + string.slice(1);
}