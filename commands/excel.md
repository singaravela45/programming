Formulas start with =
Arithmetic
=A1+B1
=A1*B1
=A1/B1

Essential functions
=SUM(A1:A10)
=AVERAGE(A1:A10)
=MAX(A1:A10)
=MIN(A1:A10)
=COUNT(A1:A10)
Absolute reference (very important)
=$A$1
Locks a cell when copying formulas.

3. Logic & Conditions
IF:
=IF(A1>=50,"Pass","Fail")
AND / OR
=IF(AND(A1>=50,B1>=50),"Pass","Fail")

4. Data Lookup (Used everywhere)
VLOOKUP (older, still common)
=VLOOKUP(A2,A:B,2,FALSE)

XLOOKUP (modern, better)
=XLOOKUP(A2,A:A,B:B)

Use XLOOKUP whenever possible.

5. Text Functions (Cleaning data)
=LEFT(A1,4)
=RIGHT(A1,2)
=MID(A1,2,3)
=LEN(A1)
=TRIM(A1)
=UPPER(A1)
=LOWER(A1)

6. Sorting, Filtering & Tables (Daily work)
Select data → Ctrl + T → convert to table
Filters appear automatically
Sort numbers, dates, text in seconds
Tables = cleaner formulas + auto-expanding ranges.

7. Charts (Only what matters)
Select data → Insert → Chart
Most useful:
Column
Line
Pie (use sparingly)
Always add:
Chart title
Axis labels

8. Pivot Tables (Excel Superpower)
Select data → Insert → Pivot Table
Drag:
Rows → categories
Values → numbers (Sum, Count, Avg)
Filters → quick analysis

9. Keyboard Shortcuts (Memorize these)
Shortcut	Action
Ctrl + Arrow	Jump to data edge
Ctrl + Shift + Arrow	Select data
Ctrl + T	Table
Ctrl + ;	Current date
Alt + =	AutoSum