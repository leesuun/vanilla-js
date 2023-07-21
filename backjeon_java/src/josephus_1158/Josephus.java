package josephus_1158;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.StringTokenizer;


//public class Josephus {
//
//  public static void main(String[] args) throws IOException {
//      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//      StringTokenizer str = new StringTokenizer(br.readLine());
//
//      int count = Integer.parseInt(str.nextToken());
//      int jNum = Integer.parseInt(str.nextToken()) - 1;
//
//      List<Integer> josephus = new ArrayList<>();
//      List<Integer> people = new ArrayList<>();
//      for (int i = 1; i <= count; i++) {
//          people.add(i);
//      }
//
//      int index = 0;
//      while (!people.isEmpty()) {
//          index = (index + jNum) % people.size();
//          josephus.add(people.remove(index));
//          System.out.println(people);
//      }
//
//      StringBuilder sb = new StringBuilder();
//      sb.append("<");
//      for (int i = 0; i < josephus.size() - 1; i++) {
//          sb.append(josephus.get(i)).append(", ");
//      }
//      sb.append(josephus.get(josephus.size() - 1)).append(">");
//      System.out.println(sb.toString());
//  }
//}

public class Josephus {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer str = new StringTokenizer(br.readLine());
				
		List<Integer> ary = new ArrayList<>();
		int count = Integer.parseInt(str.nextToken());
		int jNum = Integer.parseInt(str.nextToken())- 1;
		int josephus[] = new int[count];
		for(int i=0; i< count; i++) {
			ary.add(i+1);
		}
		
		int index =0; 
		for(int i =0; i<count; i++) {
			index = ( index+jNum) % ary.size();
			System.out.println(index + " " + ary);
			josephus[i] = ary.remove(index);
		}

		System.out.println(Arrays.toString(josephus).replace("[", "<").replace("]", ">"));
	
	}

}
