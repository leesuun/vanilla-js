package 너의평점은_25206;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;


// sol 1

public class 너의평점은{

    private static final HashMap<String, Double> GRADE_CHART = new HashMap<>();
    private static final String PASS_INDICATOR = "P";

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        initializeGradeChart();

        double totalCredits = 0;
        double totalGradePoints = 0;

        String input;
        while ((input = br.readLine()) != null && !input.isEmpty()) {
            String[] info = input.split(" ");
            if (info.length < 3) {
                break;
            }

            double credits = Double.parseDouble(info[1]);
            String grade = info[2];

            if (!grade.equals(PASS_INDICATOR)) {
                totalCredits += credits;
                totalGradePoints += credits * GRADE_CHART.getOrDefault(grade, 0.0);
            }
        }
        br.close();

        if (totalCredits > 0) {
            double averageGPA = totalGradePoints / totalCredits;
            System.out.println("Average GPA: " + averageGPA);
        } else {
            System.out.println("No valid data entered.");
        }
    }

    private static void initializeGradeChart() {
        GRADE_CHART.put("A+", 4.5);
        GRADE_CHART.put("A0", 4.0);
        GRADE_CHART.put("B+", 3.5);
        GRADE_CHART.put("B0", 3.0);
        GRADE_CHART.put("C+", 2.5);
        GRADE_CHART.put("C0", 2.0);
        GRADE_CHART.put("D+", 1.5);
        GRADE_CHART.put("D0", 1.0);
        GRADE_CHART.put("F", 0.0);
    }
}



// sol 2
// public class 너의평점은 {

// 	public static void main(String[] args) throws IOException {
// 		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
// 		HashMap<String, Double> chart = new HashMap<String, Double>();
// 		double count = 0;
// 		double totalGrade = 0;
// 		String str = "";
// 		String[] info = null;
// 		chart.put("A+", 4.5);
// 		chart.put("A0", 4.0);
// 		chart.put("B+", 3.5);
// 		chart.put("B0", 3.0);
// 		chart.put("C+", 2.5);
// 		chart.put("C0", 2.0);
// 		chart.put("D+", 1.5);
// 		chart.put("D0", 1.0);
// 		chart.put("F", 0.0);

// 		while (true) {
// 			str = br.readLine();
// 			if(str == null) break;
// 			info = str.split(" ");
// 			if (info.length <= 1)
// 				break;
// 			if (!info[2].equals("P")) {
// 				count += Double.parseDouble(info[1]);
// 				totalGrade += Double.parseDouble(info[1]) * chart.get(info[2]);
// 			}
			
// 		}
// 		System.out.println(totalGrade / count);

// 	}
// }
