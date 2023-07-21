package alphabetCount_10808;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class AlphaberCount {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		String str = br.readLine();
		Map<Character, Integer> map = new HashMap<Character, Integer>();

		for (int i = 0; i < 26; i++) {
			Character key = (char) ('a' + i);
			map.put(key, 0);
		}

		for (int i = 0; i < str.length(); i++) {
			map.replace(str.charAt(i), 1 + map.get(str.charAt(i)));
		}
		for (Integer key : map.values()) {
			sb.append(key);
			sb.append(' ');
		}
		System.out.println(sb);
	}

}

// 대소문자 구분: 현재 코드는 모두 소문자로 처리하고 있으므로 대문자는 무시됩니다. 대소문자를 구분해야 하는 경우 문자열을 소문자 또는 대문자로 통일시킨 후 빈도를 계산하는 것이 좋습니다.
// 문자열 전처리: 입력 문자열에는 공백, 특수 문자 등이 포함될 수 있습니다. 필요에 따라 문자열을 전처리하여 원하는 결과를 얻을 수 있도록 합니다.
// 출력 순서: 현재 코드는 알파벳 순서로 출력합니다. 만약 다른 순서로 출력하고 싶다면, HashMap을 TreeMap으로 변경하면 됩니다.
// 메모리 사용: 코드에서는 모든 알파벳에 대한 Map을 생성하여 사용하고 있습니다. 하지만 입력 문자열에는 모든 알파벳이 포함되지 않을 수도 있습니다. 필요한 알파벳만 저장하는 방식으로 개선할 수 있습니다.