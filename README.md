## Test Results



<section>


### when mock timezone is undefined and timezoneOffset is 360
- ✅ should have correct tz offset: 360

<section>

#### new Date().getTime()
- ✅ input: 0, expected: 0
- ✅ input: 1262304000000, expected: 1262304000000
- ✅ input: 1585699199999, expected: 1585699199999
- ✅ input: 2010-01-01, expected: 1262304000000
- ✅ input: 2020-03-31T23:59:59.999Z, expected: 1585699199999

#### new Date().toISOString()
- ✅ input: 0, expected: &quot;1970-01-01T00:00:00.000Z&quot;
- ✅ input: 1262304000000, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 1585699199999, expected: &quot;2020-03-31T23:59:59.999Z&quot;
- ✅ input: 2010-01-01, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;2020-03-31T23:59:59.999Z&quot;

#### dateFormat(&#39;QQQ yyyy&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Q1 2010&quot;
- ✅ input: 1585699199999, expected: &quot;Q1 2020&quot;
- ✅ input: 2010-01-01, expected: &quot;Q1 2010&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Q1 2020&quot;

#### dateFormat(&#39;PPpp&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 1585699199999, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;
- ✅ input: 2010-01-01, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;

</section>

### when mock timezone is Etc&#x2F;GMT+12 and timezoneOffset is 720
- ✅ should have correct tz offset: 720

<section>

#### new Date().getTime()
- ✅ input: 0, expected: 0
- ✅ input: 1262304000000, expected: 1262304000000
- ✅ input: 1585699199999, expected: 1585699199999
- ✅ input: 2010-01-01, expected: 1262304000000
- ✅ input: 2020-03-31T23:59:59.999Z, expected: 1585699199999

#### new Date().toISOString()
- ✅ input: 0, expected: &quot;1970-01-01T00:00:00.000Z&quot;
- ✅ input: 1262304000000, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 1585699199999, expected: &quot;2020-03-31T23:59:59.999Z&quot;
- ✅ input: 2010-01-01, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;2020-03-31T23:59:59.999Z&quot;

#### dateFormat(&#39;QQQ yyyy&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Q1 2010&quot;
- ✅ input: 1585699199999, expected: &quot;Q1 2020&quot;
- ✅ input: 2010-01-01, expected: &quot;Q1 2010&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Q1 2020&quot;

#### dateFormat(&#39;PPpp&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 1585699199999, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;
- ✅ input: 2010-01-01, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;

</section>

### when mock timezone is US&#x2F;Pacific and timezoneOffset is 480
- ✅ should have correct tz offset: 480

<section>

#### new Date().getTime()
- ✅ input: 0, expected: 0
- ✅ input: 1262304000000, expected: 1262304000000
- ✅ input: 1585699199999, expected: 1585699199999
- ✅ input: 2010-01-01, expected: 1262304000000
- ✅ input: 2020-03-31T23:59:59.999Z, expected: 1585699199999

#### new Date().toISOString()
- ✅ input: 0, expected: &quot;1970-01-01T00:00:00.000Z&quot;
- ✅ input: 1262304000000, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 1585699199999, expected: &quot;2020-03-31T23:59:59.999Z&quot;
- ✅ input: 2010-01-01, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;2020-03-31T23:59:59.999Z&quot;

#### dateFormat(&#39;QQQ yyyy&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Q1 2010&quot;
- ✅ input: 1585699199999, expected: &quot;Q1 2020&quot;
- ✅ input: 2010-01-01, expected: &quot;Q1 2010&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Q1 2020&quot;

#### dateFormat(&#39;PPpp&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 1585699199999, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;
- ✅ input: 2010-01-01, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;

</section>

### when mock timezone is US&#x2F;Eastern and timezoneOffset is 300
- ✅ should have correct tz offset: 300

<section>

#### new Date().getTime()
- ✅ input: 0, expected: 0
- ✅ input: 1262304000000, expected: 1262304000000
- ✅ input: 1585699199999, expected: 1585699199999
- ✅ input: 2010-01-01, expected: 1262304000000
- ✅ input: 2020-03-31T23:59:59.999Z, expected: 1585699199999

#### new Date().toISOString()
- ✅ input: 0, expected: &quot;1970-01-01T00:00:00.000Z&quot;
- ✅ input: 1262304000000, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 1585699199999, expected: &quot;2020-03-31T23:59:59.999Z&quot;
- ✅ input: 2010-01-01, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;2020-03-31T23:59:59.999Z&quot;

#### dateFormat(&#39;QQQ yyyy&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Q1 2010&quot;
- ✅ input: 1585699199999, expected: &quot;Q1 2020&quot;
- ✅ input: 2010-01-01, expected: &quot;Q1 2010&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Q1 2020&quot;

#### dateFormat(&#39;PPpp&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 1585699199999, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;
- ✅ input: 2010-01-01, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;

</section>

### when mock timezone is Brazil&#x2F;East and timezoneOffset is 120
- ✅ should have correct tz offset: 120

<section>

#### new Date().getTime()
- ✅ input: 0, expected: 0
- ✅ input: 1262304000000, expected: 1262304000000
- ✅ input: 1585699199999, expected: 1585699199999
- ✅ input: 2010-01-01, expected: 1262304000000
- ✅ input: 2020-03-31T23:59:59.999Z, expected: 1585699199999

#### new Date().toISOString()
- ✅ input: 0, expected: &quot;1970-01-01T00:00:00.000Z&quot;
- ✅ input: 1262304000000, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 1585699199999, expected: &quot;2020-03-31T23:59:59.999Z&quot;
- ✅ input: 2010-01-01, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;2020-03-31T23:59:59.999Z&quot;

#### dateFormat(&#39;QQQ yyyy&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Q1 2010&quot;
- ✅ input: 1585699199999, expected: &quot;Q1 2020&quot;
- ✅ input: 2010-01-01, expected: &quot;Q1 2010&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Q1 2020&quot;

#### dateFormat(&#39;PPpp&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 1585699199999, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;
- ✅ input: 2010-01-01, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;

</section>

### when mock timezone is UTC and timezoneOffset is 0
- ✅ should have correct tz offset: 0

<section>

#### new Date().getTime()
- ✅ input: 0, expected: 0
- ✅ input: 1262304000000, expected: 1262304000000
- ✅ input: 1585699199999, expected: 1585699199999
- ✅ input: 2010-01-01, expected: 1262304000000
- ✅ input: 2020-03-31T23:59:59.999Z, expected: 1585699199999

#### new Date().toISOString()
- ✅ input: 0, expected: &quot;1970-01-01T00:00:00.000Z&quot;
- ✅ input: 1262304000000, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 1585699199999, expected: &quot;2020-03-31T23:59:59.999Z&quot;
- ✅ input: 2010-01-01, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;2020-03-31T23:59:59.999Z&quot;

#### dateFormat(&#39;QQQ yyyy&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Q1 2010&quot;
- ✅ input: 1585699199999, expected: &quot;Q1 2020&quot;
- ✅ input: 2010-01-01, expected: &quot;Q1 2010&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Q1 2020&quot;

#### dateFormat(&#39;PPpp&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 1585699199999, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;
- ✅ input: 2010-01-01, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;

</section>

### when mock timezone is Europe&#x2F;London and timezoneOffset is 0
- ✅ should have correct tz offset: 0

<section>

#### new Date().getTime()
- ✅ input: 0, expected: 0
- ✅ input: 1262304000000, expected: 1262304000000
- ✅ input: 1585699199999, expected: 1585699199999
- ✅ input: 2010-01-01, expected: 1262304000000
- ✅ input: 2020-03-31T23:59:59.999Z, expected: 1585699199999

#### new Date().toISOString()
- ✅ input: 0, expected: &quot;1970-01-01T00:00:00.000Z&quot;
- ✅ input: 1262304000000, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 1585699199999, expected: &quot;2020-03-31T23:59:59.999Z&quot;
- ✅ input: 2010-01-01, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;2020-03-31T23:59:59.999Z&quot;

#### dateFormat(&#39;QQQ yyyy&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Q1 2010&quot;
- ✅ input: 1585699199999, expected: &quot;Q1 2020&quot;
- ✅ input: 2010-01-01, expected: &quot;Q1 2010&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Q1 2020&quot;

#### dateFormat(&#39;PPpp&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 1585699199999, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;
- ✅ input: 2010-01-01, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;

</section>

### when mock timezone is Australia&#x2F;Adelaide and timezoneOffset is -630
- ✅ should have correct tz offset: -630

<section>

#### new Date().getTime()
- ✅ input: 0, expected: 0
- ✅ input: 1262304000000, expected: 1262304000000
- ✅ input: 1585699199999, expected: 1585699199999
- ✅ input: 2010-01-01, expected: 1262304000000
- ✅ input: 2020-03-31T23:59:59.999Z, expected: 1585699199999

#### new Date().toISOString()
- ✅ input: 0, expected: &quot;1970-01-01T00:00:00.000Z&quot;
- ✅ input: 1262304000000, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 1585699199999, expected: &quot;2020-03-31T23:59:59.999Z&quot;
- ✅ input: 2010-01-01, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;2020-03-31T23:59:59.999Z&quot;

#### dateFormat(&#39;QQQ yyyy&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Q1 2010&quot;
- ✅ input: 1585699199999, expected: &quot;Q1 2020&quot;
- ✅ input: 2010-01-01, expected: &quot;Q1 2010&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Q1 2020&quot;

#### dateFormat(&#39;PPpp&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 1585699199999, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;
- ✅ input: 2010-01-01, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;

</section>

### when mock timezone is Etc&#x2F;GMT-14 and timezoneOffset is -840
- ✅ should have correct tz offset: -840

<section>

#### new Date().getTime()
- ✅ input: 0, expected: 0
- ✅ input: 1262304000000, expected: 1262304000000
- ✅ input: 1585699199999, expected: 1585699199999
- ✅ input: 2010-01-01, expected: 1262304000000
- ✅ input: 2020-03-31T23:59:59.999Z, expected: 1585699199999

#### new Date().toISOString()
- ✅ input: 0, expected: &quot;1970-01-01T00:00:00.000Z&quot;
- ✅ input: 1262304000000, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 1585699199999, expected: &quot;2020-03-31T23:59:59.999Z&quot;
- ✅ input: 2010-01-01, expected: &quot;2010-01-01T00:00:00.000Z&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;2020-03-31T23:59:59.999Z&quot;

#### dateFormat(&#39;QQQ yyyy&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Q1 2010&quot;
- ✅ input: 1585699199999, expected: &quot;Q1 2020&quot;
- ✅ input: 2010-01-01, expected: &quot;Q1 2010&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Q1 2020&quot;

#### dateFormat(&#39;PPpp&#39;)
- ✅ input: 0, expected: &quot;-&quot;
- ✅ input: 1262304000000, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 1585699199999, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;
- ✅ input: 2010-01-01, expected: &quot;Jan 1, 2010, 12:00:00 AM&quot;
- ✅ input: 2020-03-31T23:59:59.999Z, expected: &quot;Mar 31, 2020, 11:59:59 PM&quot;

</section>


</section>

---

## Summary

| Tests  |   # |    % |
| ------ | --: | ---: |
| Passed | 189 | 100% |
| Failed | 0 | 0% |