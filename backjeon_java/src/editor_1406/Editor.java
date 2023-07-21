package editor_1406;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Editor {
	public static void main(String args[]) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Stack<Character> leftstack = new Stack<>();
		Stack<Character> rightstack = new Stack<>();

		String str = br.readLine();
		for (int i = 0; i < str.length(); i++)
			leftstack.push(str.charAt(i));

		int cnt = Integer.parseInt(br.readLine());

		for (int i = 0; i < cnt; i++) {
			String order = br.readLine();
			switch (order.charAt(0)) {
			case 'L':
				if (!leftstack.isEmpty())
					rightstack.push(leftstack.pop());
				System.out.println("R " + rightstack);
				System.out.println("L " + leftstack);
				break;
			case 'D':
				if (!rightstack.isEmpty())
					leftstack.push(rightstack.pop());

				System.out.println("R " + rightstack);
				System.out.println("L " + leftstack);
				break;
			case 'B':
				if (!leftstack.isEmpty())
					leftstack.pop();
				System.out.println("R " + rightstack);
				System.out.println("L " + leftstack);

				break;
			case 'P':
				leftstack.push(order.charAt(2));
				System.out.println("R " + rightstack);
				System.out.println("L " + leftstack);
			}
		}

		while (!leftstack.isEmpty())
			rightstack.push(leftstack.pop());

		StringBuilder sb = new StringBuilder();

		while (!rightstack.isEmpty())
			sb.append(rightstack.pop());

		System.out.print(sb);
	}
}

//public class Editor {
//
//    public static void main(String[] args) throws IOException {
//        List<Character> list = new ArrayList<>();
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        String str = br.readLine();
//        int N = Integer.parseInt(br.readLine());
//
//        for (char ch : str.toCharArray()) {
//            list.add(ch);
//        }
//
//        int cursor = list.size();
//
//        String addChar = "";
//        for (int i = 0; i < N; i++) {
//            String cmd = br.readLine();
//            if (cmd.length() > 1) {
//                addChar = "P " + cmd.charAt(cmd.length() - 1);
//            }
//            if (cmd.equals("L")) {
//                if (cursor > 0) {
//                    cursor--;
//                }
//
//            } else if (cmd.equals("D")) {
//                if (cursor < list.size()) {
//                    cursor++;
//                }
//
//
//            } else if (cmd.equals("B")) {
//                if (cursor > 0) {
//                    list.remove(cursor - 1);
//                    cursor--;
//                }
//
//            } else if (cmd.equals(addChar)) {
//                list.add(cursor, cmd.charAt(cmd.length() - 1));
//                cursor++;
//
//            }
//        }
//
//        StringBuilder sb = new StringBuilder();
//        for (char ch : list) {
//            sb.append(ch);
//        }
//
//        System.out.println(sb.toString());
//    }
//}
