let width = 20;
let height = 7;
let output = "";

for (let i = 1; i <= height; i++) {
    let line = "";

    for (let j = 1; j <= width; j++) {
        if (i === 1 || i === height || j === 1 || j === width) {
            line += "*";
        } else {
            line += "&nbsp;&nbsp;";
        }
    }

    output += line + "<br>";
}

document.writeln(output);