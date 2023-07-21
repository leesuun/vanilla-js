package ROT13_11655;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ROT13 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		String str = br.readLine();

		if (str == null || str.isEmpty()) {
			return;
		}

		for (int i = 0; i < str.length(); i++) {
			char ascii = str.charAt(i);

			if ('A' <= ascii && ascii <= 'Z') {
				ascii += 13;
				if ('Z' < ascii) {
					ascii -= 26;
				}

			} else if ('a' <= ascii && ascii <= 'z') {
				ascii += 13;
				if ('z' < ascii) {
					ascii -= 26;
				}

			}
			sb.append((char) ascii);

		}
		System.out.println(sb);
	}

}