package fourNumber_10824;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 100만 + 100만 int로 표현불가

public class FourNumber {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		String[] arr = br.readLine().split(" ");
		String first = "";
		String second = "";

		for (int i = 0; i < arr.length; i++) {
			if (i == 0) {
				first += arr[i];
			} else if (i == 1) {
				first += arr[i];

			} else if (i == 2) {
				second += arr[i];

			} else {
				second += arr[i];
				System.out.println(Long.parseLong(first) + Long.parseLong(second));
				
			}
		}

	}

}
