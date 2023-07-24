package 숨바꼭질6_17087;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.stream.Stream;

public class 숨바꼭질6_17087 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int[] arr1 = Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
		int[] arr2 = Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

		if (arr1[0] == 1) {
			System.out.println(Math.abs(arr1[1] - arr2[0]));
			return;
		}

		for (int i = 0; i < arr1[0]; i++) {
			arr2[i] = Math.abs(arr2[i] - arr1[1]);
		}

		int gcdNum = arr2[0];
		for (int i = 1; i < arr2.length; i++) {
			gcdNum = gcd(gcdNum, arr2[i]);
		}
		System.out.println(gcdNum);

	}

	public static int gcd(int n1, int n2) {
		if (n2 == 0)
			return n1;
		else
			return gcd(n2, n1 % n2);
	}

}