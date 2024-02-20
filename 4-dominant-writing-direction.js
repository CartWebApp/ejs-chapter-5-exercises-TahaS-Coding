require('./includes/scripts.js') // include the scripts used by the chapter

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  let ltrCount = 0, rtlCount = 0, ttbCount = 0;
  for (let character of text){
    let charactersScript = characterScript(text.codePointAt(character));
    switch (charactersScript.direction){
      case "ltr":
        ltrCount += 1;
        break;
      case "rtl":
        rtlCount += 1;
        break;
      case "ttb":
        ttbCount += 1;
        break;
    }
  }
  if (ltrCount > rtlCount && ltrCount > ttbCount){
    return "ltr";
  }
  else if(rtlCount > ltrCount && rtlCount > ttbCount){
    return "rtl";
  }
  else if(ttbCount > ltrCount && ttbCount > rtlCount){
    return "ttb";
  }
}
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("مساء الخير"));
  // → rtl