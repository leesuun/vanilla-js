package 네거티브2진수_2089;

import java.util.Scanner;

public class 네거티브2진수_2089 {

    public static String decimalToNegativeBinary(int decimal) {
        StringBuilder negativeBinary = new StringBuilder();

        if (decimal == 0) {
            return "0";
        }

        while (decimal != 0) {
            int remainder = Math.abs(decimal % -2);
            decimal = (int)Math.ceil((double)decimal / -2);
            negativeBinary.insert(0, remainder);
        }

        return negativeBinary.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int decimalNumber = scanner.nextInt();
        scanner.close();

        String negativeBinaryNumber = decimalToNegativeBinary(decimalNumber);
        System.out.println(negativeBinaryNumber);
    }
}