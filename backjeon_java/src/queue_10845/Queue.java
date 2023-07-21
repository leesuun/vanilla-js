package queue_10845;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Queue {

	public static List<Integer> queue;
	public static int size = 0;

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int N = Integer.parseInt(br.readLine());
		queue = new ArrayList<>();

		StringTokenizer str;
		for (int i = 0; i < N; i++) {
			str = new StringTokenizer(br.readLine());

			switch (str.nextToken()) {
			case "push":
				int num = Integer.parseInt(str.nextToken());
				push(num);
				break;
			case "pop":
				sb.append(pop()).append('\n');

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

			default:
				break;
			}

		}
		System.out.println(sb);

	}

	// push X: 정수 X를 큐에 넣는 연산이다.
	public static void push(int x) {
		queue.add(x);
		size++;
	}

	// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
	public static int pop() {
		if (queue.isEmpty())
			return -1;
		int pop = queue.remove(0);
		size--;

		return pop;
	}

	// size: 큐에 들어있는 정수의 개수를 출력한다.
	public static int size() {
		return size;

	}

	// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
	public static int empty() {
		if (queue.isEmpty()) {
			return 1;
		} else {
			return 0;
		}

	}

	// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
	public static int front() {
		if(queue.isEmpty()) return -1;
		return queue.get(0);
	}

	// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
	public static int back() {
		if(queue.isEmpty()) return -1;
		return queue.get(size - 1);

	}

}
