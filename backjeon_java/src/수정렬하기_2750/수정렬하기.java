package 수정렬하기_2750;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import java.io.IOException;

public class 수정렬하기 {

	public static int[] ary;

	public static void quickSort(int[] ary, int start, int end) {
		if (start >= end)
			return;

		int pivot = start;
		int i = start + 1, j = end, temp;

		while (i <= j) {
			while (i <= end && ary[i] <= ary[pivot]) {
				i++;
			}
			while (j > start && ary[j] >= ary[pivot]) {
				j--;
			}

			if (i > j) {
				temp = ary[j];
				ary[j] = ary[pivot];
				ary[pivot] = temp;
			} else {
				temp = ary[i];
				ary[i] = ary[j];
				ary[j] = temp;
			}

		}

		quickSort(ary, start, j - 1);
		quickSort(ary, j + 1, end);
	}

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());

		ary = new int[N];
		for (int i = 0; i < ary.length; i++) {
			ary[i] = Integer.parseInt(br.readLine());
		}

		quickSort(ary, 0, ary.length - 1);

		for (int i = 0; i < ary.length; i++) {
			System.out.println(ary[i]);
		}

	}
}