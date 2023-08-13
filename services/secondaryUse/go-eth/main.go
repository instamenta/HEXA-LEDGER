package main

import (
	"context"
	"crypto/ecdsa"
	"fmt"
	"log"
	"math/big"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/ethereum/go-ethereum/params"
)

func main() {

	client, err := ethclient.Dial("https://mainnet.infura.io/v3/f330bc13a6ae4b1993208d55b7f0fa11")
	if err != nil {
		log.Fatal("unable to connect to client")
	}

	privateKey, err := crypto.HexToECDSA("09b76383b26582f81ee197bb6c437401725a82f74a5ade0cab4733cd0598795e")
	if err != nil {
		log.Fatal(err)
	}

	publicKey := privateKey.Public()

	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)

	if !ok {
		log.Fatal(err)
	}

	fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)

	nonce, err := client.PendingNonceAt(context.Background(), fromAddress)

	if err != nil {
		log.Fatal("unable to get nonce")
	}

	fmt.Println("nonce ", nonce)

	toAddress := common.HexToAddress("0x74C0e41E23C2A6a43EcC0588856129F6E9009b9a")

	value := big.NewInt(1000)

	GasFeeCap, gasTipCap, gas := big.NewInt(38694000460), big.NewInt(38694000460), uint64(38694000460)

	var data []byte

	tx := types.NewTx(&types.DynamicFeeTx{
		Nonce:     nonce,
		GasFeeCap: GasFeeCap,
		GasTipCap: gasTipCap,
		Gas:       gas,
		To:        &toAddress,
		Value:     value,
		Data:      data,
	})

	config, block := params.RinkebyChainConfig, params.RinkebyChainConfig.LondonBlock

	types.MakeSigner(config, block)

	signer := types.MakeSigner(config, block)

	signedTx, err := types.SignTx(tx, signer, privateKey)
	if err != nil {
		log.Fatal("unable to sign tx")
	}

	err = client.SendTransaction(context.Background(), signedTx)

	if err != nil {
		log.Fatal("cant send tx")
	}

	fmt.Printf("tx send %s", signedTx.Hash().Hex())

}
