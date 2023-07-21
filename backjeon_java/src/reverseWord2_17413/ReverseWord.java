package reverseWord2_17413;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class ReverseWord {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		String str = br.readLine();

		boolean open = false;
		String result = "";
		Stack<Character> word = new Stack<>();
		for (int i = 0; i < str.length(); i++) {
			if (str.charAt(i) == '<') {
				open = true;
				while (!word.isEmpty()) {
					result += (word.pop());
				}
				result += '<';
			} else if (str.charAt(i) == '>') {
				open = false;
				result += '>';
				continue;
			} else {

				if (open) {
					result += str.charAt(i);
				} else {
					if (str.charAt(i) == ' ') {
						while (!word.isEmpty()) {
							result += word.pop();
						}
						result += ' ';
						continue;
					} else {
						word.push(str.charAt(i));
					}
				}
			}

			if (i == str.length() - 1) {
				while (!word.isEmpty()) {
					result += word.pop();
				}
			}

		}

		System.out.println(result);
	}
}