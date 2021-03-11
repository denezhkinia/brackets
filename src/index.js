module.exports = function check(str, bracketsConfig) {
	const open = bracketsConfig.map(pair => pair[0]).join('');
	const close = bracketsConfig.map(pair => pair[1]).join('');

	return checkBalance(str, open, close)
}

function checkBalance(str, open, close) {
	let stack = [];
	let last = '';
	let my = [];
	for (const ch of str) {
		let i = open.indexOf(ch);

		if (close.includes(open[i])) {
			if (my.length == 0) {
				my.push(ch);
			}
			else {
				if (my[my.length - 1] == ch) {
					my.pop();
				}
				else {
					my.push(ch);
				}
				if (!close.includes(last)) {
					return false
				}
			}

		}
		if (i > -1) stack.push(close[i]);
		if (close.includes(ch) && ch != stack.pop()) return false
		last = ch;
	}
	if (my.length != 0)
		return false
	return stack.length == 0;
}


