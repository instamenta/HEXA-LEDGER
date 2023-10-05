export const prepare_to_stringify = (d: object) => JSON.stringify(d, (k, v) =>
    typeof v === 'bigint' ? v.toString() : v
);