package 바구니뒤집기_10811;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 바구니뒤집기_10811 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());

		int[] basket = new int[n];
		for (int i = 0; i < n; i++) {
			basket[i] = i + 1;
		}

		for (int i = 0; i < m; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			int start = Integer.parseInt(st.nextToken()) - 1; // 인덱스는 0부터 시작하므로 조정
			int finish = Integer.parseInt(st.nextToken()) - 1; // 인덱스는 0부터 시작하므로 조정

			while (start < finish) {
				int temp = basket[start];
				basket[start] = basket[finish];
				basket[finish] = temp;
				start++;
				finish--;
			}
		}

		StringBuilder sb = new StringBuilder();
		for (int i : basket) {
			sb.append(i).append(" ");
		}

		System.out.println(sb.toString().trim());
	}
}
