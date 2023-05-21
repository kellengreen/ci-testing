export default function getReleaseLevel(labels) {
  for (let label of labels) {
    if (label.name.startsWith("release/")) {
      const [_, level] = label.name.split("/", 2);
      if (level) {
        return level;
      }
    }
  }
  return "";
}
