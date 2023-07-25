package N진법TO10진법_2745;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class N진법TO10진법_2745 {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] arr = br.readLine().split(" ");

		conversion(arr[0], Integer.parseInt(arr[1])); // 2진법 변환
	}

	public static void conversion(String number, int N) {
		int result = 0;

		for (int i = 0; i < number.length(); i++) {
			char c = number.charAt(i);

			if ('A' <= c && c <= 'Z') {
				result += (number.charAt(i) - 'A' + 10) * Math.pow(N, number.length() - i - 1);
			} else {
				result += (number.charAt(i) - '0') * Math.pow(N, number.length() - i - 1);
			}
			
		}
		System.out.println(result);

	}

}