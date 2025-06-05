

const scriptsInEvents = {

	async EventSheet1_Event2(runtime, localVars)
	{
		
	},

	async EventSheet1_Event4(runtime, localVars)
	{
		
	},

	async EventSheet1_Event5(runtime, localVars)
	{
		
	},

	async EventSheet1_Event3_Act1(runtime, localVars)
	{
		(async () => {
		  if (!window.ethereum) {
		    runtime.globalVars.walletAddress = "MetaMask não detectada";
		    runtime.globalVars.walletBNB = "";
		    runtime.globalVars.walletInfinity = "";
		    return;
		  }
		
		  for (let i = 0; i < 10; i++) {
		    if (typeof Web3 !== 'undefined') break;
		    await new Promise(r => setTimeout(r, 100));
		  }
		
		  if (typeof Web3 === 'undefined') {
		    runtime.globalVars.walletAddress = "Web3 não carregado.";
		    runtime.globalVars.walletBNB = "";
		    runtime.globalVars.walletInfinity = "";
		    return;
		  }
		
		  try {
		    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		    const account = accounts[0] || "Desconhecido";
		    runtime.globalVars.walletAddress = "Conectado: " + account;
		
		    const web3 = new Web3(window.ethereum);
		
		    // BNB balance
		    const balanceWei = await web3.eth.getBalance(account);
		    const balanceBNB = web3.utils.fromWei(balanceWei, 'ether');
		    runtime.globalVars.walletBNB = "Saldo BNB: " + parseFloat(balanceBNB).toFixed(4) + " BNB";
		
		    // Infinity token contract info (ERC-20 standard ABI minimum)
		    const infinityContract = new web3.eth.Contract([
		      {
		        constant: true,
		        inputs: [{ name: "_owner", type: "address" }],
		        name: "balanceOf",
		        outputs: [{ name: "balance", type: "uint256" }],
		        type: "function"
		      },
		      {
		        constant: true,
		        inputs: [],
		        name: "decimals",
		        outputs: [{ name: "", type: "uint8" }],
		        type: "function"
		      }
		    ], "0x723B8253744c64D8085f768499660eA88005a434");
		
		    // Get token balance and decimals
		    const infinityRaw = await infinityContract.methods.balanceOf(account).call();
		    const infinityDecimals = await infinityContract.methods.decimals().call();
		
		    // Convert to human readable
		    const infinityBalance = parseFloat(infinityRaw) / (10 ** infinityDecimals);
		
		    runtime.globalVars.walletInfinity = "Saldo Infinity: " + infinityBalance.toFixed(4);
		
		  } catch (err) {
		    runtime.globalVars.walletAddress = "Erro: " + err.message;
		    runtime.globalVars.walletBNB = "";
		    runtime.globalVars.walletInfinity = "";
		  }
		})();
		
	},

	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		(() => {
		  if (!window.Web3) {
		    const script = document.createElement('script');
		    script.src = "https://cdn.jsdelivr.net/npm/web3@1.10.0/dist/web3.min.js";
		    script.onload = () => {
		      console.log('Web3.js carregado!');
		    };
		    script.onerror = () => {
		      console.error('Erro ao carregar Web3.js');
		    };
		    document.head.appendChild(script);
		  }
		})();
		
	},

	async EventSheet1_Event8_Act1(runtime, localVars)
	{
		(async () => {
		  if (!window.ethereum) {
		    alert("MetaMask não detectada");
		    return;
		  }
		  try {
		    const wasAdded = await window.ethereum.request({
		      method: 'wallet_watchAsset',
		      params: {
		        type: 'ERC20',
		        options: {
		          address: '0x723B8253744c64D8085f768499660eA88005a434',
		          symbol: 'INFINITY',
		          decimals: 18,
		          image: 'https://link-para-icone-token.png',
		        },
		      },
		    });
		    if (wasAdded) {
		      alert('Token Infinity adicionado à carteira!');
		    } else {
		      alert('Token Infinity não foi adicionado.');
		    }
		  } catch (error) {
		    alert('Erro ao tentar adicionar token.');
		  }
		})();
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
