package two진수eight진수_1373;

import java.io.IOException;
import java.util.Scanner;

public class two진수eight진수_1373 {

	public static void main(String[] args) throws IOException {
		Scanner scan = new Scanner(System.in);
		String s = scan.nextLine();
		int n = s.length();
		if (n % 3 == 1) {
			System.out.print(s.charAt(0));
		} else if (n % 3 == 2) {
			System.out.print((s.charAt(0) - '0') * 2 + (s.charAt(1) - '0'));
		}

		for (int i = n % 3; i < n; i += 3) {
			System.out.print((s.charAt(i) - '0') * 4 + (s.charAt(i + 1) - '0') * 2 + (s.charAt(i + 2) - '0'));
		}
		
		scan.close();

	}

}