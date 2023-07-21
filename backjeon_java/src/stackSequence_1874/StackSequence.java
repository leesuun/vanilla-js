package stackSequence_1874;

import java.util.Scanner;
import java.util.Stack;


//public class StackSequence {
//
//	public static void main(String args[]) {
//
//		Stack<Integer> stack = new Stack<>();
//		Scanner in = new Scanner(System.in);
//		StringBuilder sb = new StringBuilder();
//		
//		
//		int N = in.nextInt();
//		in.nextLine();
//
//		for (int i = 0; i < N; i++) {
//			int num = in.nextInt();
//			int size = stack.size();
//			if (stack.search(num) == -1) {
//				for (int j = stack.size() + 1 + size; stack.size()+size < num; j++) {
//					stack.push(j);
//					sb.append('+').append('\n');					
//				}
//				stack.pop();
//				sb.append('-').append('\n');
//				
//			}else {
//				stack.pop();
//				sb.append('-').append('\n');
//			}
//
//		}
//		if(stack.size() == 0) {
//			
//			System.out.println(sb);
//		}else {
//			System.out.println("NO");
//		}
//
//	}
//
//}

public class StackSequence {

	public static void main(String args[]) {

		Stack<Integer> stack = new Stack<>();
		Scanner in = new Scanner(System.in);
		StringBuilder sb = new StringBuilder();
		
		
		int N = in.nextInt();

		int current = 1;
		for (int i = 0; i < N; i++) {
			int num = in.nextInt();
			
			while(current <= num) {
				stack.push(current);
				sb.append('+').append('\n');
				current++;
			}
			
			if(!stack.isEmpty() && stack.peek() == num) {
				stack.pop();
				sb.append('-').append('\n');
				
			}else {
				System.out.println("NO");
				return;
			}


		}
		System.out.println(sb.toString());


	}

}
