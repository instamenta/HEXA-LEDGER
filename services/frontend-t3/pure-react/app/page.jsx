'use client';

import { Web3 } from "web3";
import { MetaMaskSDK } from '@metamask/sdk';
import { useEffect, useState } from "react";

export default function Home() {

	const [ provider, setProvider ] = useState(null);
	const [ address, setAddress ] = useState(null);

	useEffect(() => {
		connect().then();
	}, []);

	const connect = async () => {
		if(typeof window.ethereum !== 'undefined') {
			const web3 = new Web3(window.ethereum);
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			console.log(accounts)
			setProvider(web3);
			setAddress(accounts[0]);
		}
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

			</div>
		</main>
	)
}
