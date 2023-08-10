package 약수들의합_9506;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.util.Arrays;

// SOL 1
public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int N = 0;

		while (true) {
			N = Integer.parseInt(br.readLine());
			if (N < 0)
				break;

			int[] arr = new int[N];

			for (int i = 1; i < N; i++) {
				if (N % i == 0) {
					arr[i - 1] = i;
				}
			}

			if (Arrays.stream(arr).sum() == N) {
				sb.append(N).append(' ').append('=').append(' ');
				for (int i = 0; i < arr.length; i++) {
					if (arr[i] != 0) {
						sb.append(i + 1).append(' ').append('+').append(' ');
					}
				}
				sb.delete(sb.length() - 3, sb.length());
			} else {
				sb.append(N).append(" is NOT perfect.");

			}

			sb.append('\n');

		}
		System.out.println(sb);

	}
}

// SOL 2 (수학적 최적화)
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N;

        while (true) {
            N = Integer.parseInt(br.readLine());
            if (N < 0)
                break;

            int sum = 0;

            for (int i = 1; i <= N / 2; i++) {
                if (N % i == 0) {
                    sum += i;
                }
            }

            if (sum == N) {
                sb.append(N).append(" = 1");
                for (int i = 2; i <= N / 2; i++) {
                    if (N % i == 0) {
                        sb.append(" + ").append(i);
                    }
                }
            } else {
                sb.append(N).append(" is NOT perfect.");
            }

            sb.append('\n');
        }
        System.out.println(sb);
    }
}
