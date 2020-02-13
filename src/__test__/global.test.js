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

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(
      str
        .split("")
        .reverse()
        .join("")
    );
  });
};

test("Probar una promesa", () => {
  return reverseString2("Hola").then(str => {
    expect(str).toBe("aloH");
  });
});

test("Probar async/await", async () => {
  const str = await reverseString2("Hola");
  expect(str).toBe("aloH");
});

// beforeEach(() => console.log("Antes de cada prueba"));
// beforeAll(() => console.log("Antes de todas las pruebas"));

// afterEach(() => console.log("Despues de cada prueba"));
// afterAll(() => console.log("Despues de todas las pruebas"));
