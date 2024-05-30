const employee = {
  info: [
    {
      personal: [
        { firstName: "John" },
        { lastName: "Doe" },
        { age: 30 },
        {
          address: [
            { city: "Anytown" },
            { state: "NY" },
            { postalCode: "12345" },
          ],
        },
      ],
    },
    {
      employment: [
        { position: "Software Engineer" },
        { department: "Engineering" },
        { startDate: "2022-01-01" },
        { endDate: null },
        {
          manager: [
            { firstName: "Alice" },
            { lastName: "Smith" },
            { email: "alice@example.com" },
          ],
        },
      ],
    },
  ],
};

const getEmployeeInfo = (obj, key) => {
  const lowerCaseKey = key.toLowerCase();

  if (typeof obj === "object" && obj !== null) {
    for (const k in obj) {
      if (k.toLowerCase() === lowerCaseKey) {
        return obj[k];
      }
      const result = getEmployeeInfo(obj[k], key);
      if (result !== "Klucz nie istnieje") {
        return result;
      }
    }
  } else if (Array.isArray(obj)) {
    for (const item of obj) {
      const result = getEmployeeInfo(item, key);
      if (result !== "Klucz nie istnieje") {
        return result;
      }
    }
  }
  return "Klucz nie istnieje";
};

console.log(getEmployeeInfo(employee, "firstName")); // Powinno zwrócić: "John"
console.log(getEmployeeInfo(employee, "lastName")); // Powinno zwrócić: "Doe"
console.log(getEmployeeInfo(employee, "position")); // Powinno zwrócić: "Software Engineer"
console.log(getEmployeeInfo(employee, "street")); // Powinno zwrócić: "Klucz nie istnieje"
console.log(getEmployeeInfo(employee, "email"));
console.log(getEmployeeInfo(employee, "postalCode"));
console.log(getEmployeeInfo(employee, "postalcode"));
