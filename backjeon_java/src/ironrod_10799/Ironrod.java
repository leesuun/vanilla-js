package ironrod_10799;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Ironrod {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		String str = br.readLine();
		
		int stack = 0;
		int totalIronrod = 0;
		
		for(int i=0; i<str.length(); i++) {
			if(str.charAt(i) == '(') {
				stack++;
			}else {
				stack--;
				if(str.charAt(i-1) == '(') {
					totalIronrod += stack;	
				}else {
					totalIronrod++;
				}
				
			}
		}
		bw.write(totalIronrod + "\n");
		bw.flush();
		br.close();
		bw.close();
		
		
	}

}
