create or replace function greatnum
(num1 number, num2 number) 
return number is
  resultnum number;
  num3      number;
  minnum    number;
begin
  if num1 >= num2 then
    minnum := num2;
  else
    minnum := num1;
  end if;
  num3 := minnum;
  loop
    if (mod(num1, num3) = 0 and mod(num2, num3) = 0) then
      resultnum := num3;
      exit;
     end if;
    num3 := num3 - 1;
  end loop;
  return(resultnum);
end;

set serveroutput on;
declare
  num1 NUMBER;
  num2 NUMBER;
  res NUMBER;
begin
  num1 := 9;
  num2 := 3;
  res := greatnum(num1,num2);
  dbms_output.put_line(num1 || '和' || num2 || '的最小公倍数：' || res);
end;