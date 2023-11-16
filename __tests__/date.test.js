const timezoneMock = require("timezone-mock");
const dateFormat = require("../dateFormat");

const testData = [
  {
    input: 0,
    dateWithoutTZAdjustment: new Date(0),
    expectedTimestamp: 0,
    expectedISOString: "1970-01-01T00:00:00.000Z",
    expectedQuarter: "-",
    expectedLongFormat: "-",
  },
  {
    input: 1262304000000,
    dateWithoutTZAdjustment: new Date(1262304000000),
    expectedTimestamp: 1262304000000,
    expectedISOString: "2010-01-01T00:00:00.000Z",
    expectedQuarter: "Q1 2010",
    expectedLongFormat: "Jan 1, 2010, 12:00:00 AM",
  },
  {
    input: 1585699199999,
    dateWithoutTZAdjustment: new Date(1585699199999),
    expectedTimestamp: 1585699199999,
    expectedISOString: "2020-03-31T23:59:59.999Z",
    expectedQuarter: "Q1 2020",
    expectedLongFormat: "Mar 31, 2020, 11:59:59 PM",
  },
  {
    input: "2010-01-01",
    dateWithoutTZAdjustment: new Date("2010-01-01"),
    expectedTimestamp: 1262304000000,
    expectedISOString: "2010-01-01T00:00:00.000Z",
    expectedQuarter: "Q1 2010",
    expectedLongFormat: "Jan 1, 2010, 12:00:00 AM",
  },
  {
    input: "2020-03-31T23:59:59.999Z",
    dateWithoutTZAdjustment: new Date("2020-03-31T23:59:59.999Z"),
    expectedTimestamp: 1585699199999,
    expectedISOString: "2020-03-31T23:59:59.999Z",
    expectedQuarter: "Q1 2020",
    expectedLongFormat: "Mar 31, 2020, 11:59:59 PM",
  },
];

describe.each([
  { tz: undefined, offset: new Date().getTimezoneOffset() },
  { tz: "Etc/GMT+12", offset: 720 },
  { tz: "US/Pacific", offset: 480 },
  { tz: "US/Eastern", offset: 300 },
  { tz: "Brazil/East", offset: 120 },
  { tz: "UTC", offset: -0 },
  { tz: "Europe/London", offset: -0 },
  { tz: "Australia/Adelaide", offset: -630 },
  { tz: "Etc/GMT-14", offset: -840 },
])(
  "when mock timezone is $tz and timezoneOffset is $offset",
  ({ tz, offset }) => {
    beforeEach(() => {
      tz ? timezoneMock.register(tz) : timezoneMock.unregister();
    });

    it(`should have correct tz offset: ${offset}`, () => {
      expect(new Date().getTimezoneOffset()).toBe(offset);
    });

    describe("new Date().getTime()", () => {
      it.each(testData)(
        `input: $input, expected: $expectedTimestamp`,
        ({ input, dateWithoutTZAdjustment, expectedTimestamp }) => {
          const dateWithTZAdjustment = new Date(input);
          expect(dateWithoutTZAdjustment.getTime()).toBe(expectedTimestamp);
          expect(dateWithTZAdjustment.getTime()).toBe(expectedTimestamp);
        }
      );
    });

    describe("new Date().toISOString()", () => {
      it.each(testData)(
        'input: $input, expected: "$expectedISOString"',
        ({ input, dateWithoutTZAdjustment, expectedISOString }) => {
          const dateWithTZAdjustment = new Date(input);
          expect(dateWithoutTZAdjustment.toISOString()).toBe(expectedISOString);
          expect(dateWithTZAdjustment.toISOString()).toBe(expectedISOString);
        }
      );
    });

    describe("dateFormat('QQQ yyyy')", () => {
      it.each(testData)(
        'input: $input, expected: "$expectedQuarter"',
        ({ input, expectedQuarter }) => {
          expect(dateFormat(input, "QQQ yyyy")).toBe(expectedQuarter);
        }
      );
    });

    describe("dateFormat('PPpp')", () => {
      it.each(testData)(
        'input: $input, expected: "$expectedLongFormat"',
        ({ input, expectedLongFormat }) => {
          expect(dateFormat(input, "PPpp")).toBe(expectedLongFormat);
        }
      );
    });
  }
);
