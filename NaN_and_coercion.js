/**
 * NaN :  comparing to anything (even itself) returns false for example:
 * NaN == false => false
 * NaN == 0 => false
 * NaN == 'foo' => false
 * NaN == '1' => false
 * NaN == NaN => false
 * Checking :
 *  Number('foo') => NaN for this reason : isNan('foo') => true
 *  Number('1') => 1 for this reason : isNan('1') => false
 * SINCE NaN is the only type doesn't equals itself so the best way to check for NaN is !==
 * var a = NaN
 * if(a !== a)
 * */
/**
 * Coercion :
     01- number + string => string : it will convert the number to string
        12 + 'fares' => 12fares
     02-
         1<2<3 => true <=> 1<2 is true and true coerced to 1(try by Number(true))
         true < 3 <=> 1<3 => true
         3<2<1 => true <=> 3<2 => false and false coerced to 0 (Number(false))
         false < 1 <=>	0<1 => true
     03- some important coercions:
         - false  	coerced to 0
         - true  	coerced to 1
         - null    	coerced to 0 ( except in comparison ==
         for example null == 0 => false BUT null < 1 => true
         - undefined  coerced to NaN
         - NaN 	coerced to NaN
         - string of characters coerced to NaN  for example Number('fares') => NaN
         - string of number coerced to number  for example Number('12') => 12
         - '' coerced to 0
         for example: '' == 0        => true
        '' == false  => true because '' coerced to 0 and false coerced to 0.
 * */
