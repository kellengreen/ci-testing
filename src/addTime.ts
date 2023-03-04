interface JsonValue {
  [key: string]: string | number | boolean | null | JsonValue | JsonValue[];
}

export default function addTime(value: JsonValue): JsonValue {
  value.time = Date.now()
  return value;
}
