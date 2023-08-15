package 영화감독숌_1436;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 영화감독숌 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int N = Integer.parseInt(br.readLine());

		int count = 0;
		int i = 666;

		while (count < N) {
			if (Integer.toString(i).contains("666"))
				count++;
			i++;
		}
		System.out.println(i);

	}
}

