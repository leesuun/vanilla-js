package deque_10866;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class Deque {

	public static LinkedList<Integer> deque = new LinkedList<>();
	public static int size = 0;

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int N = Integer.parseInt(br.readLine());

		StringTokenizer str;
		for (int i = 0; i < N; i++) {
			str = new StringTokenizer(br.readLine());

			switch (str.nextToken()) {
			case "push_front":
				int fNum = Integer.parseInt(str.nextToken());
				push_front(fNum);
				break;
			case "push_back":
				int bNum = Integer.parseInt(str.nextToken());
				push_back(bNum);
				break;
			case "pop_front":
				sb.append(pop_front()).append('\n');
				break;
			case "pop_back":
				sb.append(pop_back()).append('\n');

				break;
			case "size":
				sb.append(size()).append('\n');
				break;
			case "empty":
				sb.append(empty()).append('\n');

				break;
			case "front":
				sb.append(front()).append('\n');
				break;
			case "back":
				sb.append(back()).append('\n');
				break;

			}

		}
		System.out.println(sb);
	}

	public static void push_front(int x) {
		deque.add(0, x);
		size++;
	}

	public static void push_back(int x) {
		deque.add(size, x);
		size++;
	}

	public static int pop_front() {
		if(size == 0) {
			return -1;
		}
		size--;
		return deque.remove(0);
	}

	public static int pop_back() {
		if(size == 0) {
			return -1;
		}
		
		return deque.remove(--size);
	}

	public static int size() {
		return size;
	}

	public static int empty() {
		if (size == 0) {
			return 1;
		} else {
			return 0;
		}
	}

	public static int front() {
		if(deque.isEmpty()) {
			return -1;
		}else {
			return deque.get(0);
		}
	}

	public static int back() {
		if(deque.isEmpty()) {
			return -1;
		}else {
			return deque.get(size-1);
		}
	}

}
