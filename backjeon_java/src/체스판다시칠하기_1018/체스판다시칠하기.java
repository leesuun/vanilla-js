package 체스판다시칠하기_1018;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 체스판다시칠하기 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());

		char[][] board = new char[N][M];

		for (int i = 0; i < board.length; i++) {
			board[i] = br.readLine().toCharArray();
		}
		int minCount = Integer.MAX_VALUE;

		for (int i = 0; i <= N - 8; i++) {
			for (int j = 0; j <= M - 8; j++) {

				int count1 = 0;
				for (int x = i; x < i + 8; x++) {
					for (int y = j; y < j + 8; y++) {
						if ((x+y) % 2 == 0 && board[x][y] != 'W')
							count1++;
						if ((x+y) % 2 != 0 && board[x][y] != 'B')
							count1++;
					}
				}

				int count2 = 0;
				for (int x = i; x < i + 8; x++) {
					for (int y = j; y < j + 8; y++) {
						if ((x+y) % 2 == 0 && board[x][y] != 'B')
							count2++;
						if ((x+y) % 2 != 0 && board[x][y] != 'W')
							count2++;
					}
				}

				int count = Math.min(count1, count2);
				minCount = Math.min(minCount, count);

			}
		}

		System.out.println(minCount);
	}
}
