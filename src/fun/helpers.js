function getTag(line) {
    let res, left,
        i = line.length - 1,
        right = i
    while (i >= 0 && '{('.indexOf(line.charAt(i)) === -1) {
        right = --i
    }
    if (right > 0) {
        left = --i
        while (i >= 0 && ' ,}({)'.indexOf(line.charAt(i)) === -1) {
            left = i
            i--
        }
        res = line.substring(left, right).trim()
    } else {
        res = null
    }

    return res
}
function getLastWord(line) {
    const notWordChars = ' <>,.(){}"[]`'
    line = line.trim()
    let last = line.length - 1
    let i
    for (i = last; i >= 0; i--) {
        let ch = line.charAt(i)
        if (notWordChars.indexOf(ch) != -1) {
            return line.substring(i + 1)
        }
    }
    return line.substring(i)
}

function getParams(tag, line) {
    tag = tag + '('
    let tagLen = tag.length
    line = line.substring(line.indexOf(tag) + tagLen).replace(/\)\..*/, '').replace(/(".*?")/, '')
    let re = /([A-Z][a-z]+)(?=:)/g
    let params = line.match(re)
    return params || []
}
exports.getLastWord = getLastWord
exports.getTag = getTag
exports.getParams = getParams