import java.util.*;
public class code {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        int n = scan.nextInt();
        ArrayList<Integer> arr = new ArrayList<>();
        int d = 3;
        for (int i = 0; i < n; i++) {
            int temp = scan.nextInt();
            arr.add(temp);
        }
        scan.close();
        if (n < d) {
            d = d % n;
        }
        if (d == 0 || d == n) {
            System.out.println(arr);
            return;
        }
        Collections.reverse(arr.subList(0, d-1));
        Collections.reverse(arr.subList(d, n));
        Collections.reverse(arr.subList(0, n));
        System.out.println(arr);
    }
}