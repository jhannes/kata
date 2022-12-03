## Kata: User messages

Use the power of TypeScript to implement type-safe messages formatted in at least two languages. Here are examples of some messages:

* “There was a problem processing your request” (simple enough)
* “‘Doomsday’ is not a valid weekday” (error message with an argument)
* “The email address ‘foo@example.com’ is not permitted. Only addresses with domain ‘example.net’ and ‘example.org’ are permitted” (array arguments)
* “The due date must be before January 16, 2023” (date formatting)

### Example assertion:

```typescript
expect(
  showMessage(norwegian, { code: "illegalArgument", key: "foo", value: "bar" })
).toEqual("Verdien for 'foo' er ikke tillat: bar");
```

### Example error messages

```typescript
type Message =
  | {
      code: "generalError";
    }
  | {
      code: "invalidWeekday";
      weekday: string;
    }
  | {
      code: "tooLateDueDate";
      dueDateLimit: Date;
    }
  | {
      code: "invalidEmailDomain";
      emailInput: string;
      validDomains: string[];
    };
```


## Getting started with a new project

1. `npm init`
2. `npx tsc --init`
3. `npm install --save-dev typescript jest ts-jest @types/jest prettier`
4. `npm set-script test jest`
5. `npm set-script check:typescript "tsc --noEmit"`
6. `npm set-script check:prettier "prettier --check **/*.[jt]s"`
7. `npm set-script check "npm run check:prettier && npm run check:typescript"`
8. Create `__tests__/messages.test.ts` with `describe("translations", () => { it("shows message in english", () => {})}`
9. `npm test`

### `jest.config.js`

```javascript
module.exports = {
  preset: "ts-jest/presets/js-with-babel",
};
```

### Tips

* At some point in time, you may want to install `date-fns`