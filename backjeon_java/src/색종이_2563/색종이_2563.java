package 색종이_2563;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        boolean[][] canvas = new boolean[101][101]; // 100x100 도화지

        for (int n = 0; n < N; n++) {
            String[] input = br.readLine().split(" ");
            int x = Integer.parseInt(input[0]);
            int y = Integer.parseInt(input[1]);

            for (int i = x; i < x + 10; i++) {
                for (int j = y; j < y + 10; j++) {
                    canvas[i][j] = true; // 색종이 영역을 true로 표시
                }
            }
        }

        int blackArea = 0;
        for (int i = 0; i <= 100; i++) {
            for (int j = 0; j <= 100; j++) {
                if (canvas[i][j]) {
                    blackArea++; // 검은색 영역인 경우 카운트 증가
                }
            }
        }

        System.out.println(blackArea);
    }
}
