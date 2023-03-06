interface JsonObject {
  [key: string]: string | number | boolean | null | JsonObject | JsonObject[];
}

export default function addTime(value: JsonObject): JsonObject {
  value.time = Date.now();

  return value;
}
