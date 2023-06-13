package accounts

import (
	"log"
)

type Account struct {
	Callsign string `json:"callsign"`
	Faction  string `json:"faction"`
	Token    string `json:"token"`
}

var accounts []Account

func GetAccounts() ([]Account, error) {
	err := readAccountsFromFile()
	if err != nil {
		log.Fatal("readAccountsFromFile:", err)
	}
	log.Println(accounts)
	return accounts, nil
}

func CreateAccount(callsign, faction string) error {
	accounts = append(accounts, Account{
		Callsign: callsign,
		Faction:  faction,
		Token:    "TESTTOKEN",
	})

	if err := writeAccountsToFile(); err != nil {
		log.Fatal("CreateAccount:", err)
	}

	log.Println("CREATED ACCOUNT:", callsign, faction)
	return nil
}

func ResetAllAccounts() {
	log.Println("Resetting all accounts...")
	accounts = make([]Account, 0)

	if err := writeAccountsToFile(); err != nil {
		log.Fatal("ResetAllAccounts:", err)
	}
}
