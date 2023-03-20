## Kata: User messages

Use the power of TypeScript to implement type-safe messages formatted in at least two languages. Here are examples of some messages:

* “There was a problem processing your request” (simple enough)
* “‘Doomsday’ is not a valid weekday” (error message with an argument)
* “The email address ‘foo@example.com’ is not permitted. Only addresses with domain ‘example.net’ and ‘example.org’ are permitted” (array arguments)
* “The due date must be before January 16, 2023” (date formatting)

## Getting started with a new project

1. `npm init`
2. `npm install --save-dev typescript jest ts-jest @types/jest prettier`
3. `npx tsc --init`
4. `npx ts-jest config:init`
5. `npm pkg set scripts.test=jest`
6. `npm pkg set scripts.test:watch="jest --watchAll"`
7. Create `__tests__/messages.test.ts` with `describe("translations", () => { it("shows message in english", () => {})})`
8. `npm run test:watch`

### Example assertion:

```typescript
expect(
  showMessage(norwegian, { code: "illegalArgument", key: "foo", value: "bar" })
).toEqual("Verdien for 'foo' er ikke tillat: bar");
```


### Tips

* At some point in time, you may want to install `date-fns`
* You probably want to install `prettier`
  * `npm install --save-dev prettier`
  * `npm pkg set scripts.prettier="prettier --write **/*.[jt]s"`
  * `npm pkg set scripts.check:prettier="prettier --check **/*.[jt]s"`
* Create a target for `npm run check` to verify formatting and typescript and run tests
  * `npm pkg set scripts.check:typescript="tsc --noEmit"`
  * `npm pkg set scripts.check="npm run check:prettier && npm run check:typescript && npm test"`

### Data structure

As you define messages, you probably will evolve a data structure like this:

<details>

```typescript
type Message =
  | {
      code: "generalError";
    }
  | {
      code: "userError";
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

</details>
