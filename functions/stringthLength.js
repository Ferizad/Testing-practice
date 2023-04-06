function stringLength(string) {
    if (string.length < 1) {
      throw new Error("String must be at least 1 character");
    } else if (string.length > 10) {
      throw new Error("String must not be more than 10 characters");
    }
    return string.length;
  }

module.exports=stringLength;