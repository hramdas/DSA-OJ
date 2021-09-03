<script>

	// A space optimized Javascript
	// program to check if a
	// number is happy number
	
	// Returns sum of squares of
	// digits of a number n. For
	// example for n = 12 it
	// returns 1 + 4 = 5
	
	function sumDigitSquare(n)
	{
		let sq = 0;
		while (n != 0)
		{
			let digit = n % 10;
			sq += digit * digit;
			n = parseInt(n / 10, 10);
		}
		return sq;
	}

	// Returns true if n is Happy
	// number else returns false.

	function isHappy(n) {
		// Keep replacing n with
		// sum of squares of digits
		// until we either reach 1
		// or we end up in a cycle

		while (true)
		
        {

			// Number is Happy if
			// we reach 1
			if (n == 1)
				return true;

			// Replace n with sum
			// of squares of digits
			n = sumDigitSquare(n);

			// Number is not Happy
			// if we reach 4
			if (n == 4)
				return false;
		}

	}
	
	let n = 23;
	if (isHappy(n))
		document.write("Yes");
	else
		document.write("No" );

</script>
