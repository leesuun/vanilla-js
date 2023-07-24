package 팩토리얼0의개수_1676;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;

public class 팩토리얼0의개수_1676 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(br.readLine());

        if (num == 0) {
            System.out.println(0);
        } else {
            BigInteger factorial = BigInteger.ONE;
            for (int i = 1; i <= num; i++) {
                factorial = factorial.multiply(BigInteger.valueOf(i));
            }

            String[] ch = factorial.toString().split("");
            int count = 0;
            for (int i = ch.length - 1; i >= 0; i--) {
                if (ch[i].equals("0")) {
                    count++;
                } else {
                    break;
                }
            }

            System.out.println(count);
        }
    }
}
/*
public class 팩토리얼0의개수_1676 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(br.readLine());

        if (num == 0) {
            System.out.println(0);
            return;
        }

        BigInteger factorial = BigInteger.ONE;

        for (int i = 1; i <= num; i++) {
            factorial = factorial.multiply(BigInteger.valueOf(i));
        }

        System.out.println(factorial);

        int count = 0;
        while (factorial.mod(BigInteger.TEN).equals(BigInteger.ZERO)) {
            count++;
            factorial = factorial.divide(BigInteger.TEN);
        }

        System.out.println(count);
    }
}
 */