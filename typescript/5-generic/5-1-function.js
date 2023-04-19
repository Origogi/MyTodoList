{
    function checkNotNull(arg) {
        if (arg === null) {
            throw new Error("not valid number");
        }
        return arg;
    }
    var result = checkNotNull(123);
    console.log(result);
    console.log(checkNotNull(null));
}
