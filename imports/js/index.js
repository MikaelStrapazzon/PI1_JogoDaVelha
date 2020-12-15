let colunas = document.querySelectorAll( ".coluna" );

colunas.forEach(coluna => {
	coluna.onclick = rotina;
});

function rotina()
{
	let classes = this.classList.value;

	if( classes.match( /selecionado/ ) )
	{
		return false;
	}

	adicionaSimbolo( this );

	let vencedor = checagemVencedor();

	if( vencedor )
	{
		if( vencedor == "X" )
		{
			let placar = document.querySelector( "#placarX" );
			placar.innerHTML = placar.innerHTML * 1 + 1;
		}
		else
		{
			let placar = document.querySelector( "#placarO" );
			placar.innerHTML = placar.innerHTML * 1 + 1;
		}

		let colunas = document.querySelectorAll( ".coluna" );

		colunas.forEach(coluna => {
			coluna.onclick = "";
		});
	}
}

function adicionaSimbolo( div )
{
	let jogador = document.querySelector( "#jogador" );

	if( jogador.value == "x" )
	{
		jogador.value = "o";
		document.querySelector( "#vezJogador" ).innerHTML = "O";

		div.classList.add( "selecionadoX" );

		div.querySelector( "p" ).innerHTML = "X";
	}
	else if( jogador.value == "o" )
	{
		jogador.value = "x";
		document.querySelector( "#vezJogador" ).innerHTML = "X";

		div.classList.add( "selecionadoO" );

		div.querySelector( "p" ).innerHTML = "O";
	}
}

function checagemVencedor()
{
	let colunas = document.querySelectorAll( ".coluna" );
	let letra = "X";

	for( let index = 1; index <= 2; index++ )
	{
		if(
			colunas[0].querySelector( "p" ).innerHTML == letra &&
			colunas[1].querySelector( "p" ).innerHTML == letra &&
			colunas[2].querySelector( "p" ).innerHTML == letra
		)
		{
			for( let x = 0; x <= 2; x++ )
			{
				colunas[x].classList.add( "vencedor" );
			}

			return letra;
		}

		if(
			colunas[3].querySelector( "p" ).innerHTML == letra &&
			colunas[4].querySelector( "p" ).innerHTML == letra &&
			colunas[5].querySelector( "p" ).innerHTML == letra
		)
		{
			for( let x = 3; x <= 5; x++ )
			{
				colunas[x].classList.add( "vencedor" );
			}

			return letra;
		}

		if(
			colunas[6].querySelector( "p" ).innerHTML == letra &&
			colunas[7].querySelector( "p" ).innerHTML == letra &&
			colunas[8].querySelector( "p" ).innerHTML == letra
		)
		{
			for( let x = 6; x <= 8; x++ )
			{
				colunas[x].classList.add( "vencedor" );
			}

			return letra;
		}

		if(
			colunas[0].querySelector( "p" ).innerHTML == letra &&
			colunas[3].querySelector( "p" ).innerHTML == letra &&
			colunas[6].querySelector( "p" ).innerHTML == letra
		)
		{
			for( let x = 0; x <= 6; x++ )
			{
				colunas[x].classList.add( "vencedor" );
				x += 2;
			}

			return letra;
		}

		if(
			colunas[1].querySelector( "p" ).innerHTML == letra &&
			colunas[4].querySelector( "p" ).innerHTML == letra &&
			colunas[7].querySelector( "p" ).innerHTML == letra
		)
		{
			for( let x = 1; x <= 7; x++ )
			{
				colunas[x].classList.add( "vencedor" );
				x += 2;
			}

			return letra;
		}

		if(
			colunas[2].querySelector( "p" ).innerHTML == letra &&
			colunas[5].querySelector( "p" ).innerHTML == letra &&
			colunas[8].querySelector( "p" ).innerHTML == letra
		)
		{
			for( let x = 2; x <= 8; x++ )
			{
				colunas[x].classList.add( "vencedor" );
				x += 2;
			}

			return letra;
		}

		if(
			colunas[0].querySelector( "p" ).innerHTML == letra &&
			colunas[4].querySelector( "p" ).innerHTML == letra &&
			colunas[8].querySelector( "p" ).innerHTML == letra
		)
		{
			for( let x = 0; x <= 8; x++ )
			{
				colunas[x].classList.add( "vencedor" );
				x += 3;
			}

			return letra;
		}

		if(
			colunas[2].querySelector( "p" ).innerHTML == letra &&
			colunas[4].querySelector( "p" ).innerHTML == letra &&
			colunas[6].querySelector( "p" ).innerHTML == letra
		)
		{
			for( let x = 2; x <= 6; x++ )
			{
				colunas[x].classList.add( "vencedor" );
				x++;
			}

			return letra;
		}

		letra = "O";
	}

	return false;
}

function reset()
{
	let colunas = document.querySelectorAll( ".coluna" );

	colunas.forEach(coluna =>
	{
		coluna.onclick = rotina;

		coluna.querySelector( "p" ).innerHTML = "";
		coluna.classList.value = "coluna";

		document.querySelector( "#jogador" ).value = "x";
		document.querySelector( "#vezJogador" ).innerHTML = "X";
	});
}