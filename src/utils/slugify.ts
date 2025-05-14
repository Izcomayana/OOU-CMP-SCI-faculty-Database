export const slugify = (name: string): string =>
  name.trim().toLowerCase().replace(/[.]/g, "").replace(/ /g, "-");

// // utils/slugify.ts
// export const slugify = (name: string) =>
//   name.toLowerCase().replace(/[.]/g, "").replace(/ /g, "-");
