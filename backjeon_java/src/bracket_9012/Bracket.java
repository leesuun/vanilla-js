package bracket_9012;

import java.util.Scanner;

public class Bracket {

	public static void main(String args[]) {
		Scanner in = new Scanner(System.in);

		int N = in.nextInt();
		in.nextLine();

		for (int i = 0; i < N; i++) {
			String str = in.nextLine();
			int stack = 0 ;
			
			for(int j =0; j<str.length(); j++) {
				if(str.charAt(j) == '(') {
					stack++;
				}else {
					stack--;
				}				
				if(stack == -1) break;

			}
			if(stack == 0) {
				System.out.println("YES");
			}else {
				System.out.println("NO");
			}
		}

	}

}
