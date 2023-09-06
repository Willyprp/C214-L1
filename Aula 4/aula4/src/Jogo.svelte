<script>
	import Jogador from "./Jogador.svelte";
	import {Bar} from "svelte-chartjs";
	import {
    	Chart,
    	Title,
    	Tooltip,
    	Legend,
    	BarElement,
    	CategoryScale,
    	LinearScale,
  	} from 'chart.js';

	Chart.register(
    	Title,
    	Tooltip,
    	Legend,
    	BarElement,
    	CategoryScale,
    	LinearScale
  	);

	let mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
	let golMes = Array(mes.length).fill(0);;
	let gol = 0;
	let auxmes = 0;
	let grafico = false;
	let lista = false;
	let data = {};
	function marcaGol(){
		gol = gol + 1;
	}
	function trocaMes(){
		if (auxmes < 12){
			
			golMes[auxmes] += gol;
			auxmes = auxmes + 1;
			gol = 0;
		}
		else{
			auxmes = 0;
		}
	}

	function mostraGrafico(){
		data = {
		labels: mes,
		datasets: [
			{
				label: "Gols por Mês",
				data: golMes,
				backgroundColor: [
          			"rgba(255, 134,159,0.4)",
          			"rgba(98,  182, 239,0.4)",
          			"rgba(255, 218, 128,0.4)",
          			"rgba(113, 205, 205,0.4)",
          			"rgba(170, 128, 252,0.4)",
          			"rgba(255, 177, 101,0.4)"
        		],
				borderWidth: 2,
        		borderColor: [
          			"rgba(255, 134, 159, 1)",
          			"rgba(98,  182, 239, 1)",
          			"rgba(255, 218, 128, 1)",
          			"rgba(113, 205, 205, 1)",
          			"rgba(170, 128, 252, 1)",
          			"rgba(255, 177, 101, 1)"
        		]
			}
		]
		};
		lista = false;
		grafico = true;
	}
	function mostraLista(){
		grafico = false;
		lista = true;
	}
	
</script>

<main>
	<h1> Controle de gols marcados no ano </h1>
	<Jogador acao = {marcaGol} />
	<p>Gols marcados: {gol}</p>
	<button
		on:click = {trocaMes}
		style = "background-color: blue;"
	>Trocar o Mes</button>
	<p>Mes atual: {mes[auxmes]}</p>

	<button 
		on:click = {mostraLista}
		style = "background-color: yellow;"
	>Mostrar lista</button>


	{#if lista}
		<p>Gols marcados em cada mes:</p>
		<u1>
			{#each mes as nomeMes, index}
			<li>{nomeMes}: {golMes[index]}</li>
		{/each}
		</u1>
	{/if}
	
	<button
		on:click = {mostraGrafico}
		style = "background-color: red;"
	>Plotar o gráfico</button>
	{#if grafico}
		<Bar {data} options = {{responsive: true}}/>
	{/if}
</main>

<style>
	main {
	  font-family: sans-serif; 
	  padding: 2rem;
	  background-color: silver;

	}
  
	h1 {
	  font-size: 1.5rem;
	  text-align: center;
	  margin-bottom: 1rem;
	}
	
  </style>