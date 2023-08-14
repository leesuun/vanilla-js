package 분해합_2231;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 분해합 {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int result = 0;

        // 시작점을 N의 절반으로 설정하여 탐색 범위를 줄임
        for (int i = N / 2; i < N; i++) {
            int temp = i;
            int sum = i; // 자기 자신을 더함

            // 각 자릿수를 더함
            while (temp != 0) {
                sum += temp % 10;
                temp /= 10;
            }

            if (sum == N) {
                result = i;
                break;
            }
        }
        System.out.println(result);
    }
}
