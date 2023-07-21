package stringAnalysis_10820;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class StringAnalysis {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		String str = br.readLine();

		while (str != null && str.length() != 0) {
			int numCount = 0;
			int lowerCount = 0;
			int upperCount = 0;
			int spaceCount = 0;

			for (int i = 0; i < str.length(); i++) {
				int ascii = (int) str.charAt(i);

				if (ascii == 32) {
					spaceCount++;
				} else if (97 <= ascii && ascii <= 122) {
					lowerCount++;
				} else if (65 <= ascii && ascii <= 90) {
					upperCount++;
				} else {
					numCount++;
				}
			}

			sb.append(lowerCount).append(' ').append(upperCount).append(' ').append(numCount).append(' ')
					.append(spaceCount).append('\n');

			str = br.readLine();

		}

		System.out.println(sb);
	}

}