package gcd합_9613;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.stream.Stream;

public class gcd합_9613 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int N = Integer.parseInt(br.readLine());
		
		for (int i = 0; i < N; i++) {
			int[] arr = Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			long hap = 0;

			for (int j = 1; j < arr.length-1; j++) {
				for (int k = 1+j; k < arr.length; k++) {
					hap += gcd(arr[j], arr[k]);
				}

			}
			sb.append(hap).append('\n');

		}
		System.out.println(sb);

	}

	public static int gcd(int a, int b) {
		while (b != 0) {
			int temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}

}