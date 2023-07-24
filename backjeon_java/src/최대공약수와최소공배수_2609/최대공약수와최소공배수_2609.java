package 최대공약수와최소공배수_2609;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.stream.Stream;

public class 최대공약수와최소공배수_2609 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int[] arr = Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        int gcd = gcd(arr[0], arr[1]);
        
        sb.append(gcd).append('\n').append(arr[0] * arr[1] / gcd);
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
