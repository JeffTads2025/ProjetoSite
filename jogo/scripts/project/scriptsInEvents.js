

const scriptsInEvents = {

	async FolhaDeEventos1_Event9_Act4(runtime, localVars)
	{
		//obter valor da variavel global vidas
		let vidas = runtime.globalVars.vidas;
		
		// reduzir uma vida
		
		vidas --;
		
		// atualiza a variavel global do construct 3
		runtime.globalVars.vidas = vidas;
		
		//se vidas chegarem a 0, va para game over
		
		if(vidas <= 0){
			console.log("Gamer Over");
			runtime.goToLayout("game over")
		}
	},

	async FolhaDeEventos1_Event11_Act2(runtime, localVars)
	{
		runtime.goToLayout("game over")
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
