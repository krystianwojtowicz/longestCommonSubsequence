let s1 = '';
let s2 = '';


function lcs(i, j) {
    if (!s1[i] || !s2[j]) return 0;
    else if (s1[i] == s2[j]) return 1 + lcs(i + 1, j + 1);
    else return Math.max(lcs(i + 1, j), lcs(i, j + 1));
}

function check() {
    let i = 0;
    let j = 0;
    s1 = prompt('s1');
    s2 = prompt('s2');
    let sLCS = "";
    while (s1[i] && s2[j])
        if (s1[i] == s2[j]) {
            sLCS += s1[i]; i++; j++;
        }
        else if (lcs(i + 1, j) <= lcs(i, j + 1)) j++; else i++;
    console.log(sLCS.length);
    return 0;
}

check()