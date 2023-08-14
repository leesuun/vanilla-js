package 블랙잭_2798;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 블랙잭 {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		int[] cards = new int[N];
		int result = 0;

		st = new StringTokenizer(br.readLine());

		for (int i = 0; i < cards.length; i++) {
			cards[i] = Integer.parseInt(st.nextToken());
		}

		for (int i = 0; i <= cards.length - 3; i++) {
			for (int j = 1 + i; j <= cards.length - 2; j++) {
				for (int k = 1 + j; k < cards.length; k++) {
					int hap = cards[i] + cards[j] + cards[k];
					if (hap > result && hap <= M) {
						result = hap;
					}
				}

			}
		}
		System.out.println(result);

	}
}
