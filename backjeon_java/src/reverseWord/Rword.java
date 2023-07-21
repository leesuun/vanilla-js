package reverseWord;

import java.util.Scanner;

public class Rword {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner in = new Scanner(System.in);

		int N = in.nextInt();
		in.nextLine();

		for (int i = 0; i < N; i++) {
			String str = in.nextLine();
			String temp = "";
			String temp2 = "";

			for (int j = 0; j < str.length(); j++) {
				if (str.charAt(j) != ' ') {
					temp = str.charAt(j) + temp;
					if (j == str.length() - 1)
						temp2 += temp;
				} else {
					temp2 += temp + " ";
					temp = "";
				}

			}
			System.out.println(temp2);

		}

	}

}
