try {
    console.bugichugi("This is an error message");
} catch (error) {
    console.error("An error occurred:", error);
} finally {
    console.log("This will always run");
}

// throw and custom error
var age = 15;
try {
    if (age < 18) {
        var underAge = new Error("You must be at least 18 years old.");
        throw underAge;
    }
} catch (error) {
    console.error(error.message);
}