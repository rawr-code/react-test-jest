const text = "Hola Mundo";
const fruits = ["Manzana", "Melon", "Cambur", "Pera"];

test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

test("Tenemos una manzana?", () => {
  expect(fruits).toContain("Manzana");
});

test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

test("Verdadero", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, cb) => {
  cb(
    str
      .split("")
      .reverse()
      .join("")
  );
};

test("Probar un callback", () => {
  reverseString("Hola", str => {
    expect(str).toBe("aloH");
  });
});
