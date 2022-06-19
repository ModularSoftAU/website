---
title: Using JSON Simple
sidebar_label: Using JSON Simple
sidebar_position: 0
---

The main take away with JSONSimple (and most other Java JSON libraries) is that Objects can be one of three things at all times.

It can be a `JSONObject`:

```json
{
    // This format
}
```

A `JSONArray`:

```java
[
    // This format
]
```

Or an `Object`.

All the functions return `Objects` so it is up to the programmer to understand the format of the json and how it is meant to be casted to enable reading the JSON.

If you have some JSON that looks like this:

```json
{
    "integer": 5,
    "double": 0.5,
    "string": "Hello, World!",
    "numbers": [1, 2, 3, 4, 5],
    "nested_content": [
        {
            "x": 2,
            "y": 5
        },
        {
            "x": 7,
            "y": 8
        },
    ]
}
```

...we can begin to deconstruct this into `JSONObjects`, `JSONArrays` and `Objects`. Each of the methods below show how you would parse the json to retrieve the desired values.

Disclaimer: I have not tested this code at all.

```java
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import java.util.List;


public class JsonSimpleExample {
    private JSONObject jsonObject;

    /**
     * This is how you first convert a string into a JSONObject.
     * For our example, let's assume they input the JSON from
     * above.
     */
    public JsonSimpleExample(String json) {
        try {
            jsonObject = (JSONObject) new JSONParser().parse(json);
        } catch (ParseException e) {
            // Is not valid JSON
        }
    }

    /**
     * This returns an Object that we know is an integer so 
     * we can safely cast it. Note that we are casting it to
     * a long not to an int, because internally this library
     * reads integers as longs. You can cast it to a int if
     * you know this won't be a problem.
     */
    public long getInteger() {
        return (long)jsonObject.get("integer");
    }

    /**
     * This returns an Object that we know is a double so 
     * we can safely cast it.
     */
    public double getDouble() {
        return (double)jsonObject.get("double");
    }

    /**
     * This returns an Object that we know is a String so 
     * we can safely cast it.
     */
    public String getString() {
        return (String)jsonObject.get("string");
    }

    public List<Long> getNumbers() {
        List<Long> numbers = new ArrayList<>();
        JSONArray array = (JSONArray)jsonObject.get("numbers");
        for (int i = 0; i < array.size(); i++) {
            // Again, notice how we jump straight to casting the
            // Object returned by get to a Long because we know
            // it's an integer.
            Long number = (Long)array.get(i);
            numbers.add(number);
        }
        return numbers;
    }

    /**
     * This is a more complicated example to show how you can combine
     * the concepts above to read any JSON.
     */
    public void getNestedContent() {
        JSONArray nestedContent = (JSONArray)jsonObject.get("nested_content");
        for (int i = 0; i < nested_content.size(); i++) {
            // Here we are casting the Object to a JSONObject, because
            // it is still of the form {}. Therefore it is a JSONObject
            // still and must be casted to that.
            JSONObject innerJsonObject = (JSONObject)nested_content.get(i);

            // And now that you've extracted this data, you might opt
            // to store it inside a class or another data structure.
            // For this example I've just left it here.
            long x = (long)innerJsonObject.get("x");
            long y = (long)innerJsonObject.get("x");
        }
    }
}
```
