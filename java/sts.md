```java
//sieve
import java.util.*;
public class code {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        int n=scan.nextInt();
        ArrayList<Boolean> list = new ArrayList<>(Collections.nCopies(n + 1, true));
        Collections.fill(list, true);
        for(int i=2;i*i<=n;i++){
            if(list.get(i)==true){
                for (int j=i*i;j<=n;j+=i){
                    list.set(j,false);
                }
            }
        }
        for (int i = 2; i <= n; i++) {
            if (list.get(i) == true) {
                System.out.print(i + " ");
            }
        }
        scan.close();
    }
}

//euler pie
public class code {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        int n=scan.nextInt();
        int result=n;
        for (int i = 2; i <= n; i++) {
            if (n % i == 0) {
                while (n % i == 0) {
                    n /= i;
                }
                int temp =1-(1 / i);
                result *= temp;
            }
        }
        System.out.println(result);
        scan.close();
    }
}

//strobogrammatic number
public class code {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        Map<Character, Character> mp = new HashMap<>();
        mp.put('1', '1');
        mp.put('0', '0');
        mp.put('8', '8');
        mp.put('6', '9');
        mp.put('9', '6');
        String s = scan.nextLine();
        int n = s.length();
        int left = 0;
        int right = n - 1;
        while (left <= right) {
            if (!mp.containsKey(s.charAt(left))) {
                System.out.println("this is not Strobogrammatic_Number");
                scan.close();
                return;
            } else {
                if (s.charAt(right) != mp.get(s.charAt(left))) {
                    System.out.println("this is not Strobogrammatic Number");
                    scan.close();
                    return;
                } else {
                    right--;
                    left++;
                }
            }
        }
        System.out.println("this is strobogrammatic number");
        scan.close();
    }
}

//chinese reminder theorem
import java.util.*;
public class code {
    static int mminverse(int mm, int m) {
        for (int i = 1; i < m; i++) {
            if ((i * mm) % m == 1)
                return i;
        }
        return 0;
    }
    static int find(int a[], int m[], int n) {
        int M = 1;
        for (int i = 0; i < n; i++) {
            M *= m[i];
        }
        int ans = 0;
        for (int i = 0; i < n; i++) {
            int mm=M/m[i];
            ans += a[i]*mm*mminverse(mm,m[i]);
        }
        return ans % M;
    }
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        int n = scan.nextInt();
        int[] a = new int[n];
        int[] m= new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = scan.nextInt();
        }
        for (int i = 0; i < n; i++) {
            m[i] = scan.nextInt();
        }
        int ans = find(a,m,n);
        System.out.println(ans);
        scan.close();
    }
}

//longest 1s
public class code {
    public static void main(String[] args) {
        int maxlen = 0;
        String binaryStr = "0b111011110";
        int currentlen = 0;
        int prevlen = 0;
        for (char bit : binaryStr.toCharArray()) {
            if (bit == '1') {
                currentlen++;
            } else {
                maxlen = Math.max(maxlen, currentlen + prevlen + 1);
                prevlen = currentlen;
                currentlen = 0;
            }
        }
        maxlen = Math.max(maxlen, currentlen + prevlen + 1);
        System.err.println(maxlen);
    }
}

//swap two nibbles


```