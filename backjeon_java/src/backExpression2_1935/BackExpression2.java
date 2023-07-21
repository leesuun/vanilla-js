import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.HashMap;
import java.util.Map;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int num = Integer.parseInt(br.readLine());
		String data = br.readLine();
		Stack<Double> stack = new Stack<Double>();

		Map<Character, Double> values = new HashMap<Character, Double>();

		for (int i = 0; i < num; i++) {
			Character key = (char) ('A' + i);
			Double value = Double.parseDouble(br.readLine());
			values.put(key, value);
		}

		for (int i = 0; i < data.length(); i++) {

			if (Character.isLetter(data.charAt(i))) {
				// push
				stack.push(values.get(data.charAt(i)));

			} else {
				// 연산

				if (!stack.isEmpty()) {
					double first = stack.pop();
					double second = stack.pop();

					switch (data.charAt(i)) {
					case '+':
						stack.push(second + first);

						break;
					case '-':
						stack.push(second - first);

						break;
					case '*':
						stack.push(second * first);

						break;
					case '/':
						stack.push(second / first);

						break;

					}
				}
			}

		}

		System.out.printf("%.2f", stack.pop());
	}

}