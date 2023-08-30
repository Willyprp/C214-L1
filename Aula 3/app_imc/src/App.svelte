<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let exibirMensagens = false;
	let recomendacoesAbaixoPeso = false;
	let recomendacoesObesidade = false;
	let recomendacoesPesoIdeal = false;
  
	// Função para calcular o IMC
	function calcularIMC() {
	  	recomendacoesAbaixoPeso = false;
		recomendacoesObesidade = false;
		recomendacoesPesoIdeal = false;
	  	if (peso > 0 && altura > 0) {
			imc = (peso / Math.pow(altura, 2)).toFixed(2);
			exibirMensagens = true;
	  	} else {
			imc = 0;
			exibirMensagens = false;
	  	}
	}

	function recomendacoes(){
		if (imc < 18.5){
			recomendacoesAbaixoPeso = true;
			recomendacoesObesidade = false;
			recomendacoesPesoIdeal = false;
		} else if (imc >= 30){
			recomendacoesAbaixoPeso = false;
			recomendacoesObesidade = true;
			recomendacoesPesoIdeal = false;
		} else{
			recomendacoesAbaixoPeso = false;
			recomendacoesObesidade = false;
			recomendacoesPesoIdeal = true;
		}
	}

  </script>
  
  <main>
	<h1>Calculadora de IMC</h1>
	<label>
		Peso
	</label>
	<label>
		<input type="number" bind:value={peso}/> kg
	</label>
	<label>
		Altura
	</label>
	<label>
		<input type="number" bind:value={altura}/> m
	</label>
	<button on:click = {calcularIMC}>Calcular IMC</button>

	{#if exibirMensagens}
		{#if imc > 0}
	  		<p>Seu IMC é {imc}</p>
	  		{#if imc < 18.5}
	  			<p>Você está abaixo do peso! </p>
	  		{:else if  imc >= 18.5 && imc <25}
	  			<p>Parabéns! Você está com seu peso ideal! </p>	
	  		{:else if  imc >= 25 && imc <30}
	  			<p>Você está levemente acima do peso! </p>
	  		{:else if  imc >= 30 && imc <35}
	  			<p style="color: red;">Você está com obesidade grau 1! </p>
	  		{:else if  imc >= 35 && imc <40}
	  			<p style="color: red;">Você está com obesidade severa, grau 2! </p>
	  		{:else}
				<p style="color: red; font-size: 18px;">Cuidado!!! Você está com obesidade mórbida, grau 3 </p>
	  		{/if}		
		{/if}
		<button on:click = {recomendacoes}>Mostrar Recomendações</button>
		{#if recomendacoesAbaixoPeso}
			<p>Procure uma nutricionista para que seja guiado de como ganhar peso de uma maneira saudável!</p>
		{/if}

		{#if recomendacoesPesoIdeal}
			<p>Continue como está!</p>
		{/if}

		{#if recomendacoesObesidade}
			<p>Procure realizar atividades físicas, se hidradatar e ter uma dieta mais balanceada, caso seja necessário lembre de buscar um profissional!</p>
		{/if}

	{/if}
  </main>
  
  <style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	}
  
	input {
	  padding: 0.25rem;
	}
  </style>
  